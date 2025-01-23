<template>
  <div class="text-center">
    <!-- Header -->
    <div class="flex items-center mb-2">
      <h2 class="text-md font-semibold">{{ stepContent.title }}</h2>
    </div>

    <p class=" text-left text-gray-600 mb-10">{{ stepContent.subtitle }}</p>

    <!-- Completion Section -->
    <div class="mb-2">
      <svg 
        class="w-8 h-8 mx-auto text-green-500 mb-2" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor"
      >
        <path 
          d="M5 13l4 4L19 7" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
        />
      </svg>
      <h2 class="text-xl font-semibold mb-2">{{ stepContent.completion.title }}</h2>
      <p class="text-gray-600">{{ stepContent.completion.subtitle }}</p>
    </div>

    <button
      @click="submitAssessment"
      class="px-4 py-2 mb-6 bg-green-500 text-white rounded-md font-medium"
    >
      {{ stepContent.completion.buttonText }}
    </button>
  </div>
</template>
  
  <script setup>
  import { computed } from 'vue'
  import { useAssessmentStore } from '../stores/assessment'
  import { useAssessmentContentStore } from '../stores/assessmentContent'
  
  const store = useAssessmentStore()
  const contentStore = useAssessmentContentStore()
  
  const content = contentStore.appContent
  const stepContent = computed(() => contentStore.getStepContent(3))
  
  // const submitAssessment = () => {
  //   console.log('Submitting assessment:', store.formData)
  //   // Add your submission logic here
  // }

  const submitAssessment = () => {
  // Change the view to status
  store.setCurrentView('status')
}
  </script>