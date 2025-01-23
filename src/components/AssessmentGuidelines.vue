<!-- src/components/AssessmentGuidelines.vue -->
<template>
    <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <svg class="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h1 class="text-xl font-bold">{{ content.guidelines.title }}</h1>
      </div>
  
      <div class="space-y-6 mb-8">
        <div>
          <h2 class="font-medium mb-3">{{ content.guidelines.beforeBegin.title }}</h2>
          <ul class="space-y-2">
            <li 
              v-for="(item, index) in content.guidelines.beforeBegin.items" 
              :key="index"
              class="flex items-center gap-2"
              :class="{'text-green-600': item.type === 'success'}"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ item.text }}
            </li>
          </ul>
        </div>
  
        <div>
          <h2 class="font-medium mb-3">{{ content.guidelines.duringAssessment.title }}</h2>
          <ul class="space-y-2">
            <li 
              v-for="(item, index) in content.guidelines.duringAssessment.items" 
              :key="index"
              class="flex items-center gap-2"
              :class="{'text-yellow-600': item.type === 'warning'}"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ item.text }}
            </li>
          </ul>
        </div>
      </div>
  
      <div class="flex justify-center gap-3">
  <button 
    @click="goBack"
    class="bg-gray-100 text-gray-700 py-1 px-3 text-sm rounded-md hover:bg-gray-200 transition-colors"
  >
    {{ content.guidelines.buttons.back }}
  </button>
  <button 
    @click="beginAssessment"
    class="bg-blue-500 text-white py-1 px-3 text-sm rounded-md hover:bg-blue-600 transition-colors"
  >
    {{ content.guidelines.buttons.begin }}
  </button>
</div>

    </div>
  </template>
  
  <script setup>
import { useAssessmentStore } from '../stores/assessment'
import { useAssessmentContentStore } from '../stores/assessmentContent'

const store = useAssessmentStore()
const contentStore = useAssessmentContentStore()
const content = contentStore.appContent

const goBack = () => {
  store.setCurrentView('intro')
}

const beginAssessment = () => {
  store.setCurrentView('assessment')
}
</script>