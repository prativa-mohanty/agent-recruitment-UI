# components/Technical.vue
<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <div class="flex items-center gap-4">
        <div 
          v-for="task in store.assessment.tasks"
          :key="task.id"
          class="flex items-center gap-2 px-3 py-1 rounded-full text-sm"
          :class="task.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'"
        >
          <span>{{ task.name }}</span>
          <span>{{ task.score }}%</span>
        </div>
      </div>
      <div class="text-blue-600 flex items-center gap-2">
        <BeakerIcon class="w-5 h-5" />
        <span>{{ store.headings.sections.analysis }}</span>
      </div>
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-3 gap-6">
      <!-- Code Implementation -->
      <div class="col-span-2 space-y-6">
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <div class="bg-gray-900 p-4">
            <div class="flex justify-between items-center text-white mb-4">
              <h2 class="font-medium">{{ store.codeImplementation.title }}</h2>
              <div class="flex items-center gap-2">
                <button class="px-3 py-1 bg-gray-800 rounded text-sm">Test Scripts</button>
                <button class="px-3 py-1 bg-gray-800 rounded text-sm">System Design</button>
              </div>
            </div>
            <!-- Code Editor -->
            <div class="font-mono text-sm text-gray-300 bg-gray-900 p-4 rounded">
              <pre>{{ store.codeImplementation.code }}</pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Sidebar -->
      <div class="space-y-6">
        <!-- AI Analysis -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold mb-4">{{ store.headings.sections.analysis }}</h2>
          <p class="text-blue-700 mb-6">{{ store.aiAnalysis.summary }}</p>

          <!-- Key Strengths -->
          <div class="space-y-4 mb-6">
            <h3 class="font-medium">{{ store.headings.sections.strengths }}</h3>
            <div class="space-y-2">
              <div 
                v-for="(strength, index) in store.aiAnalysis.keyStrengths" 
                :key="index"
                class="flex items-start gap-2"
              >
                <CheckCircleIcon class="w-5 h-5 text-green-600 flex-shrink-0" />
                <span class="text-gray-600">{{ strength }}</span>
              </div>
            </div>
          </div>

          <!-- Suggested Improvements -->
          <div class="space-y-4">
            <h3 class="font-medium">{{ store.headings.sections.improvements }}</h3>
            <div class="space-y-2">
              <div 
                v-for="(improvement, index) in store.aiAnalysis.suggestedImprovements" 
                :key="index"
                class="flex items-start gap-2"
              >
                <ExclamationTriangleIcon class="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <span class="text-gray-600">{{ improvement.point }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTechnicalStore } from '../stores/technical'
import { 
  BeakerIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/vue/24/outline'

const store = useTechnicalStore()
</script>