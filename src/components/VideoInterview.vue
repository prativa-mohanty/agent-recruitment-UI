# components/VideoInterview.vue
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Status Bar -->
    <div class="flex items-center justify-between px-4 py-2 bg-white border-b">
      <div class="flex items-center space-x-2">
        <span class="px-3 py-1 text-sm rounded-full" 
          :class="store.statusBadges.technical.class">
          {{ store.statusBadges.technical.text }}
        </span>
        <span class="px-3 py-1 text-sm rounded-full"
          :class="store.statusBadges.inProgress.class">
          {{ store.statusBadges.inProgress.text }}
        </span>
      </div>
      <div class="flex items-center space-x-2">
        <button v-for="btn in [
          store.buttons.primary.moveForward,
          store.buttons.primary.schedule,
          store.buttons.primary.reject,
          store.buttons.primary.flag
        ]" 
        :key="btn.text"
        :class="[btn.class, 'px-4 py-2 rounded-lg text-sm font-medium']">
          {{ btn.text }}
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto p-6">
      <div class="grid grid-cols-3 gap-6">
        <!-- Video Player Column -->
        <div class="col-span-2">
          <div class="bg-white rounded-lg shadow overflow-hidden">
            <!-- Video Player -->
            <div class="aspect-w-16 aspect-h-9 bg-gray-900">
              <video 
                class="w-full h-full"
                controls
                :src="store.interview.videoUrl"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            
            <!-- Video Progress -->
            <div class="p-4 border-t">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">{{ store.interview.duration }}</span>
                <span class="text-gray-600">{{ store.interview.progress }}</span>
              </div>
            </div>
          </div>

          <!-- Candidate Info -->
          <div class="mt-4 bg-white rounded-lg shadow p-4">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-lg font-semibold">{{ store.candidate.name }}</h2>
                <p class="text-gray-600">{{ store.candidate.role }}</p>
              </div>
              <div class="flex space-x-2">
                <span v-for="skill in store.candidate.skills" 
                  :key="skill.name"
                  :class="[skill.class, 'px-3 py-1 rounded-full text-sm']">
                  {{ skill.name }}
                </span>
              </div>
            </div>
          </div>

          <!-- AI Insights -->
          <div class="w-full mt-4 bg-blue-50 rounded-lg p-4">
            <div class="flex items-start space-x-3">
              <span class="text-2xl">{{ store.aiInsights.icon }}</span>
              <p class="text-blue-800">{{ store.aiInsights.text }}</p>
            </div>
          </div>
        </div>

        <!-- Right Sidebar -->
        <div class="space-y-6">
          <!-- Tabs -->
          <div class="bg-white rounded-lg shadow">
            <div class="border-b">
              <div class="flex">
                <button 
                  v-for="tab in store.tabs"
                  :key="tab.id"
                  @click="currentTab = tab.id"
                  :class="[
                    'px-4 py-2 text-sm font-medium',
                    currentTab === tab.id 
                      ? 'border-b-2 border-blue-500 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  ]"
                >
                  {{ tab.label }}
                </button>
              </div>
            </div>
            <div class="p-4">
              <!-- Tab content will go here -->
              <div v-if="currentTab === 'transcript'">
                Transcript content
              </div>
              <div v-else-if="currentTab === 'comments'">
                Comments content
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useVideoInterviewStore } from '../stores/videoInterview'

const store = useVideoInterviewStore()
const currentTab = ref('transcript')
</script>