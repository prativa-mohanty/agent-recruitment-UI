import { defineStore } from 'pinia'

export const useRecruitmentStore = defineStore('recruitment', {
  state: () => ({
    uiContent: {
      header: {
        title: "Open Positions",
        subtitle: "Overview of all active recruitment campaigns",
        createButton: {
          text: "Create New Position",
          icon: "+"
        }
      },
      searchFilter: {
        searchPlaceholder: "Search positions...",
        departmentDropdown: {
          label: "All Departments",
          options: ["All Departments", "Engineering", "Product"]
        },
        filterButton: {
          text: "Filter",
           icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>`
        }
      },
      positionActions: {
        viewCandidates: "View Candidates",
        scheduleInterviews: "Schedule Interviews",
        viewPipeline: "View Pipeline",
        viewDetails: "View Details"
      }
    },
    summaryStats: {
      openPositions: 24,
      activeRecruitments: 18,
      totalCandidates: 892,
      avgTimeToHire: 35,
      upcomingInterviews: 45
    },
    positions: [
      {
        id: 1,
        title: 'Senior Frontend Developer',
        department: 'Engineering',
        location: 'San Francisco, CA',
        openings: 3,
        priority: 'high',
        alerts: 2,
        tags: ['Technical', 'Remote-Friendly'],
        daysOpen: 45,
        candidates: 128,
        progress: 68,
        assignedTo: {
          name: 'Alex',
          lastActive: '2h ago',
          avatar: 'https://placehold.co/32x32'
        }
      },
      {
        id: 2,
        title: 'Product Manager',
        department: 'Product',
        location: 'New York, NY',
        openings: 1,
        priority: 'medium',
        tags: ['Management', 'Senior-Level'],
        daysOpen: 30,
        candidates: 85,
        progress: 45,
        assignedTo: {
          name: 'Sarah',
          lastActive: '1h ago',
          avatar: 'https://placehold.co/32x32'
        }
      },
      {
        id: 3,
        title: 'DevOps Engineer',
        department: 'Engineering',
        location: 'Remote',
        openings: 2,
        priority: 'high',
        alerts: 1,
        tags: ['Technical', 'Remote'],
        daysOpen: 20,
        candidates: 64,
        progress: 32,
        assignedTo: {
          name: 'Alex',
          lastActive: '25m ago',
          avatar: 'https://placehold.co/32x32'
        }
      }
    ]
  }),

  getters: {
    getPositionsByDepartment: (state) => (department) => {
      return department === state.uiContent.searchFilter.departmentDropdown.label
        ? state.positions 
        : state.positions.filter(pos => pos.department === department)
    },
    
    getTotalOpenings: (state) => {
      return state.positions.reduce((sum, pos) => sum + pos.openings, 0)
    }
  },
  
  actions: {
    async fetchDashboardData() {
      // Implement API call here when backend is ready
    },
    
    updatePosition(positionId, updates) {
      const position = this.positions.find(p => p.id === positionId)
      if (position) {
        Object.assign(position, updates)
      }
    }
  }
})