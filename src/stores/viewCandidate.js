// stores/viewCandidate.js
import { defineStore } from 'pinia'

export const useViewCandidateStore = defineStore('viewCandidate', {
  state: () => ({
    headings: {
      main: {
        candidate: {
          title: "Candidate Summary",
          subHeadings: {
            skillsMatch: "Skills Match",
            keyHighlights: "Key Highlights"
          }
        },
        ai: {
          title: "AI Recommendations",
          subHeadings: {
            recommendations: "Recommended Focus Areas",
            insights: "Key Insights"
          }
        },
        skills: {
          title: "Skill Gaps Analysis",
          subHeadings: {
            current: "Current Level",
            importance: "Importance Level"
          }
        },
        insights: {
          title: "AI Insights",
          subHeadings: {
            analyst: "AI Analyst",
            confidence: "Match Confidence",
            strengths: "Key Strengths",
            areas: "Areas to Explore"
          }
        },
        actions: {
          title: "Quick Actions",
          subHeadings: {
            schedule: "Schedule Actions",
            feedback: "Feedback Options"
          }
        },
        timeline: {
          title: "Application Timeline",
          subHeadings: {
            current: "Current Stage",
            completed: "Completed Stages"
          }
        }
      },
      scores: {
        title: "Evaluation Scores",
        subHeadings: {
          match: "AI Match Score",
          technical: "Technical Assessment",
          cultural: "Cultural Fit"
        }
      },
      tabs: {
        overview: "Overview",
        resume: "Resume & Experience",
        technical: "Technical Assessment",
        video: "Video Interview",
        feedback: "Team Feedback",
        insights: "AI Insights"
      }
    },

    candidateInfo: {
      name: 'Jane Smith',
      role: 'Senior Frontend Developer',
      experience: '9 years',
      company: 'TechCorp Inc.',
      matchScore: 92,
      aiInsight: 'Strong match for the role with exceptional frontend expertise. Recommended focus areas: system design capabilities and team leadership experience.'
    },

    skillsMatch: {
      overall: {
        label: 'Overall',
        score: 92
      },
      technical: {
        label: 'Technical',
        score: 90
      },
      culture: {
        label: 'Culture',
        score: 88
      },
      leadership: {
        label: 'Leadership',
        score: 88
      },
      communication: {
        label: 'Communication',
        score: 90
      }
    },

    keyHighlights: [
      'Vue.js Expert',
      'Team Lead Experience',
      'Strong System Design'
    ],

    aiRecommendations: [
      'Focus technical interview on system design',
      'Discuss team leadership experiences',
      'Evaluate mentorship capabilities'
    ],

    skillGaps: [
      {
        skill: 'GraphQL',
        currentLevel: 'Basic',
        importance: 'Medium'
      },
      {
        skill: 'Kubernetes',
        currentLevel: 'None',
        importance: 'Low'
      }
    ],

    aiInsights: {
      analyst: {
        name: 'Alex',
        role: 'Technical Recruitment AI',
        matchConfidence: 94
      },
      keyStrengths: [
        'Exceptional frontend architecture experience',
        'Strong track record in team leadership',
        'Proven experience with large scale applications'
      ],
      areasToExplore: [
        'Limited experience with our specific tech stack',
        'May need onboarding support for our CI/CD practices'
      ]
    },

    quickActions: [
      {
        id: 'schedule',
        label: 'Schedule Interview',
        icon: 'Calendar'
      },
      {
        id: 'feedback',
        label: 'Request Feedback',
        icon: 'ChatBubble'
      },
      {
        id: 'resume',
        label: 'View Resume',
        icon: 'Document'
      }
    ],

    applicationTimeline: [
      {
        stage: 'Technical Interview Scheduled',
        timeAgo: '2h ago',
        status: 'current'
      },
      {
        stage: 'Coding Assessment Completed',
        timeAgo: '1d ago',
        status: 'completed'
      },
      {
        stage: 'Application Received',
        timeAgo: '3d ago',
        status: 'completed'
      }
    ]
  })
})