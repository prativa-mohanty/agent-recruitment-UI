# ViewCandidate.vue
<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <!-- Header -->
    <div class="bg-white rounded-lg shadow p-6 mb-6">
      <div class="flex justify-between items-start">
        <div>
          <h1 class="text-2xl font-bold">{{ store.candidateInfo.name }}</h1>
          <div class="flex items-center gap-2 text-gray-600 mt-1">
            <span>{{ store.candidateInfo.role }}</span>
            <span>•</span>
            <span>{{ store.candidateInfo.experience }}</span>
            <span>•</span>
            <span>{{ store.candidateInfo.company }}</span>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <div class="text-center">
            <div class="text-2xl font-bold text-green-600">{{ store.candidateInfo.matchScore }}%</div>
            <div class="text-sm text-gray-600">AI Match Score</div>
          </div>
          <div class="flex gap-2">
            <button class="bg-green-600 text-white px-4 py-2 rounded-lg">Move Forward</button>
            <button class="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">Schedule Interview</button>
          </div>
        </div>
      </div>
      
      <!-- AI Insight -->
      <div class="mt-4 bg-blue-50 p-4 rounded-lg flex items-start gap-3">
        <span class="text-blue-600 text-xl">💡</span>
        <p class="text-blue-800">{{ store.candidateInfo.aiInsight }}</p>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="flex gap-6 border-b mb-6">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        @click="currentTab = tab.id"
        :class="[
          'pb-4 px-2',
          currentTab === tab.id ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-600'
        ]"
      >
        {{ tab.name }}
      </button>
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-3 gap-6">
      <!-- Left Column -->
      <div class="col-span-2 space-y-6">
        <!-- Skills Match -->
        <div class="bg-white rounded-lg shadow p-6">
          <div class="grid grid-cols-2 mb-6">
            <h2 class="text-base font-medium text-gray-800">Candidate Summary</h2>
            <h3 class="text-base font-medium text-gray-800">Key Highlights</h3>
          </div>
          <div class="grid grid-cols-2 gap-8">
            <!-- Skills Match Section -->
            <div class="space-y-6">
              <div class="space-y-4">
                <div v-for="(skill, key) in store.skillsMatch" :key="key">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600">{{ skill.label }}</span>
                    <span class="text-sm text-gray-600">{{ skill.score }}%</span>
                  </div>
                  <div class="mt-1 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      class="h-full bg-blue-500 rounded-full"
                      :style="{ width: `${skill.score}%` }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Key Highlights Section -->
            <div class="space-y-3">
              <div v-for="(highlight, index) in store.keyHighlights" :key="index" class="flex items-start gap-2">
                <span class="text-sm">✓</span>
                <span class="text-sm text-gray-600">{{ highlight }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- AI Recommendations -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold mb-4">AI Recommendations</h2>
          <div class="space-y-3">
            <div 
              v-for="(recommendation, index) in store.aiRecommendations" 
              :key="index"
              class="flex items-start gap-3 text-gray-700"
            >
              <span class="text-purple-600">⭐</span>
              <span>{{ recommendation }}</span>
            </div>
          </div>
        </div>

        <!-- Skill Gaps -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold mb-4">Skill Gaps Analysis</h2>
          <div class="space-y-4">
            <div 
              v-for="gap in store.skillGaps" 
              :key="gap.skill"
              class="flex items-start gap-3"
            >
              <span class="text-yellow-600">⚠</span>
              <div>
                <div class="font-medium">{{ gap.skill }}</div>
                <div class="text-sm text-gray-600">
                  Current Level: {{ gap.currentLevel }} • Importance: {{ gap.importance }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="space-y-6">
        <!-- AI Insights -->
        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="p-2 bg-blue-100 rounded-lg">
              <span class="text-xl">🤖</span>
            </div>
            <div>
              <div class="font-medium">{{ store.aiInsights.analyst.name }}</div>
              <div class="text-sm text-gray-600">{{ store.aiInsights.analyst.role }}</div>
            </div>
          </div>
          
          <div class="mb-6">
            <div class="text-sm text-gray-600 mb-1">Match Confidence</div>
            <div class="h-2 bg-gray-200 rounded-full">
              <div 
                class="h-2 bg-green-600 rounded-full"
                :style="{ width: `${store.aiInsights.analyst.matchConfidence}%` }"
              ></div>
            </div>
          </div>

          <div class="space-y-4">
            <div>
              <h3 class="font-medium mb-2">Key Strengths</h3>
              <div class="space-y-2">
                <div 
                  v-for="(strength, index) in store.aiInsights.keyStrengths" 
                  :key="index"
                  class="flex items-start gap-2 text-sm"
                >
                  <span class="text-green-600">✓</span>
                  <span>{{ strength }}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-medium mb-2">Areas to Explore</h3>
              <div class="space-y-2">
                <div 
                  v-for="(area, index) in store.aiInsights.areasToExplore" 
                  :key="index"
                  class="flex items-start gap-2 text-sm"
                >
                  <span class="text-yellow-600">⚠</span>
                  <span>{{ area }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold mb-4">Quick Actions</h2>
          <div class="space-y-3">
            <button
              v-for="action in store.quickActions"
              :key="action.id"
              class="w-full flex items-center gap-3 p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <component 
                :is="iconComponents[action.icon]" 
                class="w-5 h-5 text-gray-500"
                aria-hidden="true"
              />
              <span>{{ action.label }}</span>
            </button>
          </div>
        </div>

        <!-- Timeline -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold mb-4">Application Timeline</h2>
          <div class="space-y-4">
            <div 
              v-for="(event, index) in store.applicationTimeline" 
              :key="index"
              class="flex items-start gap-3"
            >
              <div class="flex flex-col items-center">
                <div 
                  :class="[
                    'w-3 h-3 rounded-full',
                    event.status === 'current' ? 'bg-blue-600' : 'bg-green-600'
                  ]"
                ></div>
                <div v-if="index < store.applicationTimeline.length - 1" class="w-0.5 h-full bg-gray-200"></div>
              </div>
              <div>
                <div class="font-medium">{{ event.stage }}</div>
                <div class="text-sm text-gray-600">{{ event.timeAgo }}</div>
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
import { CalendarIcon, ChatBubbleLeftRightIcon, DocumentIcon } from '@heroicons/vue/24/outline'
import { useViewCandidateStore } from '../stores/viewCandidate'

const store = useViewCandidateStore()
const currentTab = ref('overview')

const iconComponents = {
  Calendar: CalendarIcon,
  ChatBubble: ChatBubbleLeftRightIcon,
  Document: DocumentIcon
}

const tabs = [
  { id: 'overview', name: 'Overview' },
  { id: 'resume', name: 'Resume & Experience' },
  { id: 'technical', name: 'Technical Assessment' },
  { id: 'video', name: 'Video Interview' },
  { id: 'feedback', name: 'Team Feedback' },
  { id: 'insights', name: 'AI Insights' }
]
</script>