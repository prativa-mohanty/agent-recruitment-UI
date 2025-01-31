// stores/videoInterview.js
import { defineStore } from 'pinia'

export const useVideoInterviewStore = defineStore('videoInterview', {
  state: () => ({
    headings: {
      status: {
        title: "Technical Interview Round",
        subTitle: "Interview in progress",
        subHeadings: {
          timeline: "Interview Timeline",
          insights: "AI Assistant Insights",
          comments: "Comments"
        }
      },
      sections: {
        timeline: "Timeline",
        transcript: "Transcript",
        comments: "Comments"
      }
    },
    buttons: {
      primary: {
        moveForward: {
          text: "Move To Next Round",
          class: "bg-green-500 text-white"
        },
        schedule: {
          text: "Schedule Follow-up",
          class: "bg-blue-500 text-white"
        },
        reject: {
          text: "Reject",
          class: "bg-purple-500 text-white"
        },
        flag: {
          text: "Flag for Discussion",
          class: "bg-yellow-500 text-white"
        }
      }
    },
    statusBadges: {
      technical: {
        text: "Technical Interview Round",
        class: "bg-green-100 text-green-800"
      },
      inProgress: {
        text: "Interview in progress",
        class: "bg-gray-100 text-gray-800"
      }
    },
    candidate: {
      name: "David Kim",
      role: "Engineering Manager",
      skills: [
        {
          name: "K8s Admin",
          class: "bg-blue-100 text-blue-800"
        },
        {
          name: "DevOps",
          class: "bg-orange-100 text-orange-800"
        },
        {
          name: "AWS",
          class: "bg-yellow-100 text-yellow-800"
        }
      ]
    },
    aiInsights: {
      icon: "🤖",
      text: "Strong technical background demonstrated. Candidate shows excellent problem-solving approach and clear communication. Recommend focusing next question on system scalability experience."
    },
    interview: {
      duration: "15:30",
      progress: "45/60",
      videoUrl: "/interview-recording.mp4"
    },
    tabs: [
      {
        id: "transcript",
        label: "Transcript"
      },
      {
        id: "comments",
        label: "Comments"
      }
    ]
  })
})