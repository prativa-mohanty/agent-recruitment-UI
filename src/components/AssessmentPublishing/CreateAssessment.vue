<template>
    <div class="min-h-screen bg-gray-50 p-6">
      <!-- Navigation Steps -->
      <div class="flex justify-between mb-8 relative">
        <!-- Progress bar background -->
        <div class="absolute top-4 left-0 h-0.5 w-full bg-gray-200"></div>
        <!-- Active progress bar -->
        <div 
          class="absolute top-4 left-0 h-0.5 bg-blue-600 transition-all duration-300"
          :style="{ width: progressWidth + '%' }"
        ></div>
  
        <template v-for="(step, index) in store.uiContent.navigation.steps" :key="step.id">
          <div class="flex flex-col items-center relative z-10" 
               :class="{ 'text-blue-600': step.isActive || isStepComplete(index), 'text-gray-400': !step.isActive && !isStepComplete(index) }">
            <div class="w-8 h-8 rounded-full flex items-center justify-center bg-white border-2 transition-colors duration-200" 
                 :class="{ 
                   'border-blue-600 bg-blue-600': step.isActive || isStepComplete(index), 
                   'border-gray-300': !step.isActive && !isStepComplete(index)
                 }">
              <component 
                :is="step.icon" 
                class="w-4 h-4"
                :class="{
                  'text-white': step.isActive || isStepComplete(index),
                  'text-gray-400': !step.isActive && !isStepComplete(index)
                }"
              />
            </div>
            <span class="mt-2 text-sm font-medium">{{ step.title }}</span>
          </div>
        </template>
      </div>
  
      <!-- AI Assistant Tip -->
      <div class="bg-blue-50 rounded-lg p-4 mb-6">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <component 
              :is="store.uiContent.assistantTip.icon"
              class="w-6 h-6 text-blue-600"
            />
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-blue-800">{{ store.uiContent.assistantTip.title }}</h3>
            <p class="mt-1 text-sm text-blue-600">{{ store.uiContent.assistantTip.description }}</p>
          </div>
        </div>
      </div>
  
      <!-- Main Content Area -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div class="mb-4">
          <h2 class="text-lg font-medium text-gray-900">Define Template</h2>
          <p class="text-sm text-gray-500">Set requirements and assessment parameters</p>
        </div>
        <!-- <textarea
          v-model="store.formData.template.description"
          class="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          placeholder="Enter template description..."
        ></textarea> -->
      </div>
  
      <!-- Action Buttons -->
      <div class="flex justify-between items-center">
        <button
          @click="handlePreviousStep"
          class="flex items-center px-4 py-2 text-gray-700 hover:text-gray-900"
        >
          <component 
            :is="store.uiContent.actions.back.icon"
            class="w-5 h-5 mr-2"
          />
          {{ store.uiContent.actions.back.text }}
        </button>
        <div class="flex space-x-4">
          <button
            @click="handleSaveDraft"
            class="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            <component 
              :is="store.uiContent.actions.saveDraft.icon"
              class="w-5 h-5 mr-2"
            />
            {{ store.uiContent.actions.saveDraft.text }}
          </button>
          <button
    @click="handleNextStep"
    class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
  >
    {{ store.uiContent.actions.next.text }}
    <component 
      :is="store.uiContent.actions.next.icon"
      class="w-5 h-5 ml-2"
    />
  </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, computed } from 'vue'
import { useCreateAssessmentStore } from '../../stores/AssessmentPublishingStore/createAssessment'

const emit = defineEmits(['next-step'])
const store = useCreateAssessmentStore()

// Compute progress width for progress bar
const progressWidth = computed(() => {
  const totalSteps = store.uiContent.navigation.steps.length
  const activeIndex = store.uiContent.navigation.steps.findIndex(step => step.isActive)
  return ((activeIndex + 1) / totalSteps) * 100
})

// Check if step is complete
const isStepComplete = (index) => {
  const currentStepIndex = store.uiContent.navigation.steps.findIndex(step => step.isActive)
  return index < currentStepIndex
}

const handleNextStep = () => {
  console.log('Next button clicked')
  
  // Update store state
  store.nextStep()
  
  // Get current active step
  const currentStepIndex = store.uiContent.navigation.steps.findIndex(step => step.isActive)
  console.log('Current step index:', currentStepIndex)
  
  // Emit the event immediately
  console.log('Emitting next-step event')
  emit('next-step')
}

const handlePreviousStep = () => {
  store.previousStep()
}

const handleSaveDraft = () => {
  if (store.formData.template.description) {
    console.log('Saving draft...', store.formData.template.description)
  }
}
</script>