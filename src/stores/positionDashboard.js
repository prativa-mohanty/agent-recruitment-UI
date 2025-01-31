import { defineStore } from 'pinia'

export const usePositionStore = defineStore('positionDashboard', {
  state: () => ({
    uiContent: {
      buttons: {
        share: {
          text: "Alex",
          type: "secondary",
          icon: "SparklesIcon" 
        },
        addCandidate: {
          text: "Add Candidate",
          type: "primary",
          icon: "PlusIcon"
        }
      },
      tabs: [
        { id: 'candidates', label: 'Candidates', isActive: true },
        { id: 'jobDescription', label: 'Job Description', isActive: false },
        { id: 'aiInsights', label: 'AI Insights', isActive: false }
      ],
      searchBar: {
        placeholder: "Search candidates...",
        sortOptions: [
          { value: 'latestActivity', label: 'Latest Activity' },
          { value: 'name', label: 'Name' },
          { value: 'status', label: 'Status' }
        ]
      },
      sections: {
        recruitmentStages: {
          title: "Recruitment Stages",
          icon: "UsersIcon"
        },
        sourcingChannels: {
          title: "Sourcing Channels",
          icon: "Square3Stack3DIcon"
        }
      }
    },
    positionDetails: {
      title: 'Senior Frontend Developer',
      status: {
        text: 'Active',
        type: 'success'
      },
      department: 'Engineering',
      location: 'San Francisco, CA',
      openings: 3,
      stats: [
       
        {
          label: 'Time',
          value: '45 days',
          icon: 'ClockIcon',
          tooltip: 'Time since position opened'
        },
        {
          label: 'Interview Scheduled',
          value: 28,
          icon: 'CalendarIcon',
          tooltip: 'Number of scheduled interviews'
        },
        {
          label: 'Qualified Rate',
          value: '68%',
          icon: 'CheckCircleIcon',
          tooltip: 'Percentage of qualified candidates'
        },
        {
          label: 'Browse Rate',
          value: '15%',
          icon: 'EyeIcon',
          tooltip: 'Profile view rate'
        }
      ],
      stages: [
        {
          id: 'allCandidates',
          name: 'All Candidates',
          count: 108,
          icon: 'UsersIcon'
        },
        {
          id: 'newApplications',
          name: 'New Applications',
          count: 45,
          icon: 'InboxArrowDownIcon'
        },
        {
          id: 'screening',
          name: 'Screening',
          count: 28,
          icon: 'FunnelIcon'
        },
        {
          id: 'interviewing',
          name: 'Interviewing',
          count: 21,
          icon: 'VideoCameraIcon'
        },
        {
          id: 'offerStage',
          name: 'Offer Stage',
          count: 8,
          icon: 'EnvelopeIcon'
        }
      ],
      sourcingChannels: [
        {
          id: 'linkedin',
          name: 'LinkedIn',
          icon: 'LinkIcon',
          count: 42
        },
        {
          id: 'referral',
          name: 'Referral',
          icon: 'UserPlusIcon',
          count: 25
        },
        {
          id: 'github',
          name: 'GitHub',
          icon: 'CodeBracketIcon',
          count: 18
        },
        {
          id: 'website',
          name: 'Website',
          icon: 'GlobeAltIcon',
          count: 23
        }
      ],
      aiUpdates: [
        {
          id: 1,
          type: 'update',
          message: 'New high potential candidate identified',
          timestamp: '2024-01-30T10:00:00Z'
        }
      ]
    }
  }),
  
  getters: {
    getActiveTab: (state) => {
      return state.uiContent.tabs.find(tab => tab.isActive)?.id
    },
    
    getStageById: (state) => (id) => {
      return state.positionDetails.stages.find(stage => stage.id === id)
    },
    
    getTotalCandidates: (state) => {
      return state.positionDetails.stages[0]?.count || 0
    }
  },
  
  actions: {
    setActiveTab(tabId) {
      this.uiContent.tabs = this.uiContent.tabs.map(tab => ({
        ...tab,
        isActive: tab.id === tabId
      }))
    },
    
    updateStageCount(stageId, newCount) {
      const stage = this.positionDetails.stages.find(s => s.id === stageId)
      if (stage) {
        stage.count = newCount
      }
    }
  }
})