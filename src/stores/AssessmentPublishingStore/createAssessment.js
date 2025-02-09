// src/stores/AssessmentPublishingStore/createAssessment.js
import { defineStore } from 'pinia'
import { 
  DocumentTextIcon, 
  ClipboardDocumentCheckIcon, 
  PencilSquareIcon, 
  CheckCircleIcon,
  LightBulbIcon,
  ArrowLeftIcon,
  BookmarkIcon,
  ArrowRightIcon
} from '@heroicons/vue/24/outline'

export const useCreateAssessmentStore = defineStore('createAssessment', {
  state: () => ({
    uiContent: {
      navigation: {
        steps: [
          {
            id: 1,
            title: 'Define Template',
            icon: DocumentTextIcon,
            isActive: true
          },
          {
            id: 2,
            title: 'Review Template',
            icon: ClipboardDocumentCheckIcon,
            isActive: false
          },
          {
            id: 3,
            title: 'Generate Assessment',
            icon: PencilSquareIcon,
            isActive: false
          },
          {
            id: 4,
            title: 'Review Assessment',
            icon: CheckCircleIcon,
            isActive: false
          },
          {
            id: 5,
            title: 'Publish',
            icon: DocumentTextIcon,
            isActive: false
          },
        ]

      },
      assistantTip: {
        icon: LightBulbIcon,
        title: 'AI Assistant Tips',
        description: 'Start by providing a detailed job description. I will help analyze requirements and suggest appropriate assessment parameters.'
      },
      actions: {
        back: {
          text: 'Back',
          icon: ArrowLeftIcon
        },
        saveDraft: {
          text: 'Save Draft',
          icon: BookmarkIcon
        },
        next: {
          text: 'Next',
          icon: ArrowRightIcon
        }
      }
    },
    formData: {
      template: {
        description: ''
      }
    }
  }),
  actions: {
    updateTemplate(data) {
      this.formData.template = { ...this.formData.template, ...data }
    },
    nextStep() {
      const currentStepIndex = this.uiContent.navigation.steps.findIndex(step => step.isActive)
      if (currentStepIndex < this.uiContent.navigation.steps.length - 1) {
        this.uiContent.navigation.steps[currentStepIndex].isActive = false
        this.uiContent.navigation.steps[currentStepIndex + 1].isActive = true
      }
    },
    previousStep() {
      const currentStepIndex = this.uiContent.navigation.steps.findIndex(step => step.isActive)
      if (currentStepIndex > 0) {
        this.uiContent.navigation.steps[currentStepIndex].isActive = false
        this.uiContent.navigation.steps[currentStepIndex - 1].isActive = true
      }
    }
  }
})