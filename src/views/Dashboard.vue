<!-- Dashboard.vue -->
<template>
    <div class="dashboard-container">
      <!-- You can add any wrapper content, headers, etc. here -->
      <RecruitmentDashboard />
    </div>
  </template>
  
  <script>
  import RecruitmentDashboard from '../components/RecruitmentDashboard.vue'
  
  export default {
    name: 'Dashboard',
    components: {
      RecruitmentDashboard
    }
  }
  </script>