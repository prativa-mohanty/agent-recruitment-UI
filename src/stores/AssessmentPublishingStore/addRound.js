// src/stores/AssessmentPublishingStore/addRound.js
import { defineStore } from 'pinia'
import { 
  PlusIcon, 
  AdjustmentsHorizontalIcon,
  CheckCircleIcon,
  DocumentDuplicateIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'

export const useAddRoundStore = defineStore('addRound', {
  state: () => ({
    uiContent: {
      taskEditor: {
        title: 'Task Editor',
        algorithmSection: {
          title: 'Algorithm Implementation',
          placeholder: 'Implement a sorting algorithm'
        },
        difficultyLevels: ['Easy', 'Medium', 'Hard'],
        actions: {
          copy: {
            icon: DocumentDuplicateIcon
          },
          close: {
            icon: XMarkIcon
          }
        }
      },
      variation: {
        title: 'Variation 1',
        actions: {
          addVariation: {
            text: 'Add Variation',
            icon: PlusIcon
          },
          generateSimilar: {
            text: 'Generate Similar',
            icon: AdjustmentsHorizontalIcon
          }
        }
      },
      generationStatus: {
        title: 'AI Generation Status',
        status: 'Generation Complete',
        message: 'Content generated successfully',
        icon: CheckCircleIcon
      },
      roundSettings: {
        title: 'Round Settings',
        scoringStrategy: {
          label: 'Scoring Strategy',
          options: ['Sum of all tasks']
        },
        passCriteria: {
          label: 'Pass Criteria',
          value: 70,
          options: ['All tasks required']
        }
      },
      taskSelection: {
        title: 'Task Selection',
        options: [
          {
            id: 'randomize',
            label: 'Randomize task order',
            checked: true
          },
          {
            id: 'variations',
            label: 'Use task variations',
            checked: true
          }
        ]
      }
    },
    formData: {
      taskDescription: '',
      difficultyLevel: 'Medium',
      points: 0,
      variations: []
    }
  }),

  actions: {
    updateTaskDescription(text) {
      this.formData.taskDescription = text
    },
    updateDifficultyLevel(level) {
      this.formData.difficultyLevel = level
    },
    updatePoints(points) {
      this.formData.points = points
    },
    addVariation() {
      // Add variation logic
      console.log('Adding variation')
    },
    generateSimilar() {
      // Generate similar task logic
      console.log('Generating similar task')
    }
  }
})