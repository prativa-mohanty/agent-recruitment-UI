// src/stores/assessment.js
import { defineStore } from 'pinia'

export const useAssessmentStore = defineStore('assessment', {
  state: () => ({
    currentView: 'intro', // Add this to track the current view
    currentStep: 1,
    formData: {
      yearsExperience: '',
      frameworks: [],
      agentTypes: '',
      tasks: [
        {
          id: 1,
          code: '',
          language: 'JavaScript',
          timeLimit: 45,
          title: 'AI Agent Implementation',
          description: 'Implement a basic AI agent that can process natural language commands and perform simple tasks.'
        },
        {
          id: 2,
          code: '',
          language: 'Python',
          timeLimit: 30,
          title: 'Agent Communication Protocol',
          description: 'Design and implement a communication protocol between two AI agents.'
        }
      ]
    }
  }),
  actions: {
    setCurrentView(view) {
      this.currentView = view
    },
    setCurrentStep(step) {
      this.currentStep = step
    },
    updateFormData(field, value) {
      this.formData[field] = value
    },
    updateTaskCode(taskId, code) {
      const task = this.formData.tasks.find(t => t.id === taskId)
      if (task) task.code = code
    }
  }
})