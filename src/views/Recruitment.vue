<template>
    <div class="min-h-screen bg-gray-50 py-4">
      <div class="max-w-3xl mx-auto">
        <!-- Intro View -->
        <template v-if="store.currentView === 'intro'">
          <AssessmentIntro />
        </template>
        
        <!-- Guidelines View -->
        <template v-if="store.currentView === 'guidelines'">
          <AssessmentGuidelines />
        </template>
        
        <!-- Assessment Status View -->
        <template v-if="store.currentView === 'status'">
          <AssessmentStatus />
        </template>
        
        <!-- Assessment Steps View -->
        <template v-if="store.currentView === 'assessment'">
          <h1 class="text-2xl font-bold text-center mb-2">{{ content.title }}</h1>
          <div class="text-sm text-gray-600 text-center mb-2">{{ content.subtitle }}</div>
          
          <!-- Progress Steps -->
          <div class="flex justify-between mb-4 relative">
            <div class="absolute top-1/2 h-1 w-full bg-gray-200 -z-10"></div>
            <template v-for="step in 3" :key="step">
              <div 
                class="w-8 h-8 rounded-full flex items-center justify-center"
                :class="[
                  store.currentStep >= step ? 'bg-blue-500 text-white' : 'bg-gray-200',
                ]"
              >
                {{ step }}
              </div>
            </template>
          </div>
  
          <!-- Step Content -->
          <div class="bg-white rounded-lg shadow-sm p-4 mb-4">
            <component :is="currentComponent" />
          </div>
  
          <!-- Navigation Buttons -->
          <div class="flex justify-between mt-4 px-2">
            <button 
              @click="previousStep"
              class="px-4 py-2 bg-gray-200 rounded-md"
              :disabled="store.currentStep === 1"
              :class="{'opacity-50 cursor-not-allowed': store.currentStep === 1}"
            >
              {{ content.navigation.previous }}
            </button>
            <button 
              @click="nextStep"
              class="px-4 py-2 bg-blue-500 text-white rounded-md"
              :disabled="store.currentStep === 3"
              :class="{'opacity-50 cursor-not-allowed': store.currentStep === 3}"
            >
              {{ content.navigation.next }}
            </button>
          </div>
        </template>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useAssessmentStore } from '../stores/assessment'
  import { useAssessmentContentStore } from '../stores/assessmentContent'
  import AssessmentIntro from '../components/AssessmentIntro.vue'
  import AssessmentGuidelines from '../components/AssessmentGuidelines.vue'
  import AssessmentStatus from '../components/AssessmentStatus.vue'
  import Step1Form from '../components/Step1Form.vue'
  import Step2Form from '../components/Step2Form.vue'
  import Step3Form from '../components/Step3Form.vue'
  
  const store = useAssessmentStore()
  const contentStore = useAssessmentContentStore()
  const content = contentStore.appContent
  
  const currentComponent = computed(() => {
    switch (store.currentStep) {
      case 1: return Step1Form
      case 2: return Step2Form
      case 3: return Step3Form
      default: return Step1Form
    }
  })
  
  const nextStep = () => {
    if (store.currentStep < 3) {
      store.setCurrentStep(store.currentStep + 1)
    }
  }
  
  const previousStep = () => {
    if (store.currentStep > 1) {
      store.setCurrentStep(store.currentStep - 1)
    }
  }
  </script>