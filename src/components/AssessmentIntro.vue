<!-- src/components/AssessmentIntro.vue -->
<template>
    <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          <svg class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div>
          <h1 class="text-2xl font-bold">{{ content.intro.title }}</h1>
          <p class="text-gray-600">Position: {{ content.intro.position }}</p>
        </div>
      </div>
  
      <div class="space-y-6 mb-8">
        <div>
          <h2 class="text-lg font-semibold mb-3">{{ content.intro.overview.title }}</h2>
          <ul class="space-y-2">
            <li 
              v-for="(item, index) in content.intro.overview.items" 
              :key="index"
              class="flex items-center gap-2"
            >
              <span class="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
              </span>
              {{ item.text }}
            </li>
          </ul>
        </div>
  
        <div>
          <h2 class="text-lg font-semibold mb-3">{{ content.intro.requirements.title }}</h2>
          <ul class="space-y-2">
            <li 
              v-for="(item, index) in content.intro.requirements.items" 
              :key="index"
              class="flex items-center gap-2"
            >
              <span class="w-4 h-4 bg-gray-100 rounded-full flex items-center justify-center">
                <span class="w-2 h-2 bg-gray-400 rounded-full"></span>
              </span>
              {{ item.text }}
            </li>
          </ul>
        </div>
      </div>
  
      <div class="flex justify-center">
  <button 
    @click="startAssessment"
    class="bg-blue-500 text-white py-1 px-3 text-sm rounded-md hover:bg-blue-600 transition-colors"
  >
    {{ content.intro.buttons.start }}
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

const startAssessment = () => {
  store.setCurrentView('guidelines')
}
</script>