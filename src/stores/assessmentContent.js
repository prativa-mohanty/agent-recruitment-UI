// src/stores/assessmentContent.js
import { defineStore } from 'pinia'

export const useAssessmentContentStore = defineStore('assessmentContent', {
  state: () => ({
    appContent: {
      title: "AI Agent Developer Assessment",
      subtitle: "Technical Screening Platform",
      intro: {
        title: "Prativa'S Assessment",
        position: "Senior AI Agent Developer",
        overview: {
          title: "Assessment Overview",
          items: [
            { text: "Duration: 90 minutes", type: "info" },
            { text: "AI Agent Architecture", type: "info" },
            { text: "Natural Language Processing", type: "info" },
            { text: "Multi-Agent Systems", type: "info" },
            { text: "API Integration", type: "info" }
          ]
        },
        requirements: {
          title: "Requirements",
          items: [
            { text: "Stable internet connection", type: "requirement" },
            { text: "Python 3.8+ installed", type: "requirement" },
            { text: "Webcam for identity verification", type: "requirement" },
            { text: "Quiet environment", type: "requirement" }
          ]
        },
        buttons: {
          start: "Start Assessment"
        }
      },
      guidelines: {
        title: "Assessment Guidelines",
        beforeBegin: {
          title: "Before You Begin:",
          items: [
            { text: "Verify your development environment meets all requirements", type: "success" },
            { text: "Complete the identity verification process (2-3 minutes)", type: "success" },
            { text: "Review the assessment structure and scoring criteria", type: "success" }
          ]
        },
        duringAssessment: {
          title: "During the Assessment:",
          items: [
            { text: "Your progress is automatically saved every 30 seconds", type: "warning" },
            { text: "You can pause once for up to 5 minutes if needed", type: "warning" },
            { text: "Use only approved external resources (documentation, API references)", type: "warning" }
          ]
        },
        buttons: {
          back: "Back",
          begin: "Begin Assessment"
        }
      },
      steps: [
        {
          id: 1,
          title: "AI Assessment Platform",
          subtitle: "Complete the following tasks to showcase your AI agent development skills",
          fields: [
            {
              type: "number",
              id: "yearsExperience",
              label: "Years of experience in AI development*",
              required: true,
              placeholder: "Enter number of years"
            },
            {
              type: "number",
              id: "Name",
              label: "name of the Agent*",
              required: true,
              placeholder: "Enter The Name"
            },
            {
              type: "multiSelect",
              id: "frameworks",
              label: "Primary AI frameworks*",
              options: ["TensorFlow", "PyTorch", "Langchain", "AutoGPT", "OpenAI API"],
              required: true
            },
            {
              type: "text",
              id: "agentTypes",
              label: "Type of AI agents developed*",
              placeholder: "e.g., Conversational, Task-specific, Multi-agent systems",
              required: true
            }
          ]
        },
        {
          id: 2,
          title: "AI Assessment Platform",
          subtitle: "Complete the following tasks to showcase your AI agent development skills",
          tasks: [
            {
              id: 1,
              title: "Task 1: AI Agent Implementation",
              description: "Implement a basic AI agent that can process natural language commands and perform simple tasks.",
              timeLimit: 45,
              language: "JavaScript",
              uploadText: "Drag and drop your code file or click to upload"
            },
            {
              id: 2,
              title: "Task 2: Agent Communication Protocol",
              description: "Design and implement a communication protocol between two AI agents.",
              timeLimit: 30,
              language: "Python",
              uploadText: "Drag and drop your code file or click to upload"
            }
          ]
        },
        {
          id: 3,
          title: "AI Assessment Platform",
          subtitle: "Complete the following tasks to showcase your AI agent development skills",
          completion: {
            title: "Ready to Submit?",
            subtitle: "Please review your submission before finalizing",
            buttonText: "Submit Assessment"
          }
        }
      ],
      statusContent: {
        title: "Assessment Status",
        submissionId: "AS-2025-0120-1422",
        lastUpdated: "1/21/2025 9:15:00 AM",
        status: "In Progress",
        stages: [
          {
            id: 1,
            title: "Assessment Submitted",
            description: "Code submission received successfully",
            status: "completed",
            timestamp: "1/20/2025 2:32:00 PM",
            icon: "check"
          },
          {
            id: 2,
            title: "AI Analysis",
            description: "Automated code review and analysis",
            status: "completed",
            timestamp: "1/20/2025 4:45:00 PM",
            icon: "check"
          },
          {
            id: 3,
            title: "Technical Team Review",
            description: "Manual review by senior developers",
            status: "in-progress",
            timestamp: "1/21/2025 9:15:00 AM",
            icon: "loading"
          },
          {
            id: 4,
            title: "Feedback Preparation",
            description: "Comprehensive feedback compilation",
            status: "pending",
            timestamp: "",
            icon: "clock"
          },
          {
            id: 5,
            title: "Results Ready",
            description: "Final assessment results",
            status: "pending",
            timestamp: "",
            icon: "clock"
          }
        ],
        timeline: {
          title: "Expected Timeline",
          expectedDate: "1/22/2025 5:00:00 PM"
        },
        notifications: {
          title: "Notification Preferences",
          options: [
            {
              type: "email",
              label: "Email Notifications",
              status: "Enabled",
              icon: "message",
            },
            {
              type: "browser",
              label: "Browser Notifications",
              status: "Enable",
              icon: "browser",
            }
          ]
        },
        latestNotification: {
          message: "Our team is currently reviewing your Submission. you will receive a notification when your feedback is ready. For any urgent queries please contact our support team",
        },
      },
      navigation: {
        previous: "Previous",
        next: "Next"
      }
    }
  }),

  getters: {
    getStepContent: (state) => (step) => {
      return state.appContent.steps.find(s => s.id === step)
    },

    getStatusContent: (state) => {
      return state.appContent.statusContent
    }
  },

  actions: {
    updateStageStatus(stageId, newStatus, timestamp) {
      const stage = this.appContent.statusContent.stages.find(s => s.id === stageId)
      if (stage) {
        stage.status = newStatus
        stage.timestamp = timestamp
        this.appContent.statusContent.lastUpdated = new Date().toLocaleString() // Update the lastUpdated timestamp
      }
    }
  }
})
