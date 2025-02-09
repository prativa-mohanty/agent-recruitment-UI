<template>
    <div class="min-h-screen bg-gray-50 p-6">
      <!-- Header -->
      <div class="flex items-center mb-6">
        <component :is="store.uiContent.header.icon" class="w-6 h-6 text-blue-600 mr-3" />
        <div>
          <h1 class="text-lg font-semibold text-gray-900">{{ store.uiContent.header.title }}</h1>
          <p class="text-sm text-gray-600">{{ store.uiContent.header.subtitle }}</p>
        </div>
      </div>
  
      <div class="grid grid-cols-3 gap-6">
        <!-- Left Column -->
        <div class="col-span-1">
          <!-- Job Description -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
            <h2 class="text-base font-medium text-gray-900 mb-2">{{ store.uiContent.jobDescription.title }}</h2>
            <textarea
              v-model="jobDescriptionText"
              class="w-full h-40 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm"
              :placeholder="store.uiContent.jobDescription.placeholder"
            ></textarea>
          </div>
  
          <!-- AI Instructions -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div class="flex items-start">
              <component :is="store.uiContent.aiInstructions.icon" class="w-5 h-5 text-blue-600 mr-2" />
              <div>
                <h2 class="text-base font-medium text-gray-900">{{ store.uiContent.aiInstructions.title }}</h2>
                <p class="text-sm text-gray-500 mb-3">{{ store.uiContent.aiInstructions.subtitle }}</p>
              </div>
            </div>
            <textarea
              v-model="aiInstructionsText"
              class="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm mb-3"
            ></textarea>
            <div class="space-y-2">
              <div v-for="(text, index) in store.uiContent.aiInstructions.helpText" :key="index"
                   class="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                {{ text }}
              </div>
            </div>
          </div>
        </div>
  
        <!-- Middle Column - Round Configuration -->
        <div class="col-span-1">
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-base font-medium text-gray-900">{{ store.uiContent.roundConfig.title }}</h2>
              <button @click="handleAddRound" class="flex items-center text-blue-600 hover:text-blue-700 text-sm">
                <component :is="store.uiContent.roundConfig.addRoundButton.icon" class="w-4 h-4 mr-1" />
                {{ store.uiContent.roundConfig.addRoundButton.text }}
              </button>
            </div>
  
            <!-- Round Card -->
            <div class="border border-gray-200 rounded-lg p-4">
              <div class="flex justify-between items-start mb-4">
                <div class="flex items-center">
                  <component :is="store.uiContent.roundConfig.round.icon" class="w-5 h-5 text-gray-500 mr-2" />
                  <h3 class="text-sm font-medium text-gray-900">{{ store.uiContent.roundConfig.round.title }}</h3>
                </div>
                <component :is="store.uiContent.roundConfig.round.helpIcon" class="w-5 h-5 text-gray-400" />
              </div>
  
              <!-- Time Limit -->
              <div class="flex items-center mb-4">
                <component :is="store.uiContent.roundConfig.round.timeLimit.icon" class="w-4 h-4 text-gray-400 mr-2" />
                <span class="text-sm text-gray-600 mr-2">{{ store.uiContent.roundConfig.round.timeLimit.label }}:</span>
                <span class="text-sm font-medium">{{ store.uiContent.roundConfig.round.timeLimit.value }} {{ store.uiContent.roundConfig.round.timeLimit.unit }}</span>
              </div>
  
              <!-- Tasks -->
              <div>
                <h4 class="text-sm font-medium text-gray-900 mb-2">{{ store.uiContent.roundConfig.round.tasks.title }}</h4>
                <div class="border border-gray-200 rounded-lg p-3 mb-3">
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-900">{{ store.uiContent.roundConfig.round.tasks.items[0].title }}</span>
                    <component :is="store.uiContent.roundConfig.round.tasks.items[0].expandIcon" class="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <button @click="handleAddTask" class="flex items-center text-blue-600 hover:text-blue-700 text-sm">
                  <component :is="store.uiContent.roundConfig.round.tasks.addTaskButton.icon" class="w-4 h-4 mr-1" />
                  {{ store.uiContent.roundConfig.round.tasks.addTaskButton.text }}
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Right Column - Preview -->
        <div class="col-span-1">
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h2 class="text-base font-medium text-gray-900 mb-4">{{ store.uiContent.preview.title }}</h2>
            <div class="border border-gray-200 rounded-lg p-4">
              <h3 class="text-sm font-medium text-gray-900 mb-3">{{ store.uiContent.preview.round.title }}</h3>
              <div v-for="item in store.uiContent.preview.round.items" :key="item.title" class="mb-2">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-900">{{ item.title }}</span>
                  <span class="text-sm text-gray-500">{{ item.points }} points</span>
                </div>
                <p class="text-xs text-gray-500">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Bottom Actions -->
      <div class="flex justify-end space-x-4 mt-6">
        <button class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
          {{ store.uiContent.actions.saveDraft.text }}
        </button>
        <button 
         @click="handleGenerateAssessment"
       class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
       {{ store.uiContent.actions.generateAssessment.text }}
       </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import { useAssessmentLayoutStore } from '../../stores/AssessmentPublishingStore/assessmentLayout'
  
  const store = useAssessmentLayoutStore()
  
  const emit = defineEmits(['generate-assessment'])
  const handleGenerateAssessment = () => {
  store.generateAssessment()  // Store action
  emit('generate-assessment') // Emit event to switch components
}
  const jobDescriptionText = ref('')
  const aiInstructionsText = ref('')
  
  watch(jobDescriptionText, (newValue) => {
    store.updateJobDescription(newValue)
  })
  
  watch(aiInstructionsText, (newValue) => {
    store.updateAIInstructions(newValue)
  })
  
  const handleAddRound = () => {
    store.addRound()
  }
  
  const handleAddTask = () => {
    store.addTask(0)
  }
  </script>