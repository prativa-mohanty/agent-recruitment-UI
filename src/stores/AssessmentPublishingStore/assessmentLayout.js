// src/stores/AssessmentPublishingStore/assessmentLayout.js
import { defineStore } from 'pinia'
import { 
  DocumentTextIcon, 
  LightBulbIcon, 
  PlusIcon,
  ClockIcon,
  Cog6ToothIcon,
  ChevronUpIcon,
  QuestionMarkCircleIcon
} from '@heroicons/vue/24/outline'

export const useAssessmentLayoutStore = defineStore('assessmentLayout', {
  state: () => ({
    uiContent: {
      header: {
        icon: DocumentTextIcon,
        title: 'Assessment Publishing Agent',
        subtitle: 'Ready to assist with assessment creation'
      },
      jobDescription: {
        title: 'Job Description',
        placeholder: 'Paste job description here...',
      },
      aiInstructions: {
        title: 'AI Instructions',
        subtitle: 'Add specific instructions for AI...',
        helpText: ['Focus on practical tasks', 'Include system design', 'Add coding challenges'],
        icon: LightBulbIcon
      },
      roundConfig: {
        title: 'Round Configuration',
        addRoundButton: {
          text: 'Add Round',
          icon: PlusIcon
        },
        round: {
          title: 'Round 1: Aptitude Assessment',
          icon: Cog6ToothIcon,
          helpIcon: QuestionMarkCircleIcon,
          timeLimit: {
            label: 'Time Limit',
            value: 60,
            unit: 'minutes',
            icon: ClockIcon
          },
          tasks: {
            title: 'Tasks',
            addTaskButton: {
              text: 'Add Task',
              icon: PlusIcon
            },
            items: [
              {
                title: 'Logical Reasoning',
                expandIcon: ChevronUpIcon
              }
            ]
          }
        }
      },
      preview: {
        title: 'Preview',
        round: {
          title: 'Round 1: Aptitude Assessment',
          items: [
            {
              title: 'Logical Reasoning',
              points: 50,
              description: 'Evaluates candidate\'s analytical thinking'
            }
          ]
        }
      },
      actions: {
        saveDraft: {
          text: 'Save Draft'
        },
        generateAssessment: {
          text: 'Generate Assessment'
        }
      }
    },
    formData: {
      jobDescription: '',
      aiInstructions: '',
      rounds: []
    }
  }),

  actions: {
    updateJobDescription(text) {
      this.formData.jobDescription = text
    },
    updateAIInstructions(text) {
      this.formData.aiInstructions = text
    },
    addRound() {
      // Implement add round logic
      console.log('Adding new round')
    },
    addTask(roundIndex) {
      // Implement add task logic
      console.log('Adding new task to round:', roundIndex)
    },
    saveDraft() {
      console.log('Saving draft:', this.formData)
    },
    generateAssessment() {
      console.log('Generating assessment')
    }
  }
})