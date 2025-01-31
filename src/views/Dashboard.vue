<template>
    <div class="dashboard-container">
      
      
      <!-- Dynamic Component Rendering -->
      <component 
        :is="currentComponent"
        @viewDetails="showPositionDashboard"
        @viewCandidate="showViewCandidate"
      />
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  import RecruitmentDashboard from '../components/RecruitmentDashboard.vue'
  import PositionDashboard from '../components/PositionDashboard.vue'
  import ViewCandidate from '../components/ViewCandidate.vue'
  
  export default {
    name: 'Dashboard',
    components: {
      RecruitmentDashboard,
      PositionDashboard,
      ViewCandidate
    },
    setup() {
      const currentView = ref('recruitment')
  
      const views = [
        { id: 'recruitment', name: 'Recruitment Dashboard' },
        { id: 'position', name: 'Position Dashboard' },
        { id: 'candidate', name: 'Candidate View' }
      ]
  
      const currentComponent = computed(() => {
        switch (currentView.value) {
          case 'recruitment':
            return 'RecruitmentDashboard'
          case 'position':
            return 'PositionDashboard'
          case 'candidate':
            return 'ViewCandidate'
          default:
            return 'RecruitmentDashboard'
        }
      })
  
      const showPositionDashboard = () => {
        currentView.value = 'position'
      }
  
      const showViewCandidate = () => {
        currentView.value = 'candidate'
      }
  
      return {
        currentView,
        views,
        currentComponent,
        showPositionDashboard,
        showViewCandidate
      }
    }
  }
  </script>