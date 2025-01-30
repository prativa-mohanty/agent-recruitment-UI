<template>
    <div class="p-6 bg-gray-50 min-h-screen">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">{{ store.uiContent.header.title }}</h1>
          <p class="text-sm text-gray-600">{{ store.uiContent.header.subtitle }}</p>
        </div>
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <span class="text-lg">{{ store.uiContent.header.createButton.icon }}</span>
          {{ store.uiContent.header.createButton.text }}
        </button>
      </div>
  
      <!-- Summary Stats -->
      <div class="grid grid-cols-5 gap-4 mb-8">
        <div v-for="(value, key) in store.summaryStats" 
             :key="key" 
             class="bg-white p-4 rounded-lg shadow">
          <div class="text-sm text-gray-600 capitalize">
            {{ formatLabel(key) }}
          </div>
          <div class="text-2xl font-semibold mt-1">
            {{ formatValue(key, value) }}
          </div>
        </div>
      </div>
  
      <!-- Search and Filter -->
      <div class="flex justify-between items-center mb-6">
        <div class="relative flex-1 max-w-5xl">
          <input 
            type="text" 
            :placeholder="store.uiContent.searchFilter.searchPlaceholder" 
            class="w-full pl-10 pr-4 py-2 border rounded-lg"
          >
          <span class="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>
        <div class="flex gap-4">
          <select class="border rounded-lg px-4 py-2">
            <option v-for="option in store.uiContent.searchFilter.departmentDropdown.options" 
                    :key="option">
              {{ option }}
            </option>
          </select>
          <button class="border rounded-lg p-2">
  <span class="text-gray-600" v-html="store.uiContent.searchFilter.filterButton.icon"></span>
</button>
        </div>
      </div>
  
      <!-- Positions List -->
      <div class="space-y-4">
        <div v-for="position in store.positions" 
             :key="position.id"
             class="bg-white rounded-lg shadow p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <div class="flex items-center gap-3">
                <h3 class="text-lg font-semibold">{{ position.title }}</h3>
                <span :class="[
                  'px-2 py-1 rounded text-xs',
                  position.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                ]">
                  {{ position.priority }} Priority
                </span>
                <span v-if="position.alerts" class="text-yellow-600">
                  ⚠ {{ position.alerts }} alerts
                </span>
              </div>
              <div class="flex items-center gap-4 mt-2 text-sm text-gray-600">
                <span>{{ position.department }}</span>
                <span>•</span>
                <span>{{ position.location }}</span>
                <span>•</span>
                <span>{{ position.openings }} openings</span>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="text-sm text-gray-600 text-right">
                <div>{{ position.daysOpen }} days open</div>
                <div>{{ position.candidates }} candidates</div>
              </div>
              <div class="flex items-center gap-2">
                <img 
                  :src="position.assignedTo.avatar" 
                  alt="Profile" 
                  class="w-8 h-8 rounded-full"
                >
                <div class="text-sm">
                  <div class="font-medium">{{ position.assignedTo.name }}</div>
                  <div class="text-gray-500">Last active {{ position.assignedTo.lastActive }}</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Tags -->
          <div class="flex gap-2 mb-4">
            <span v-for="tag in position.tags" 
                  :key="tag"
                  class="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
              {{ tag }}
            </span>
          </div>
  
          <!-- Progress Bar -->
          <div class="relative pt-1">
            <div class="flex mb-2 items-center justify-between">
              <div class="text-sm text-gray-600">Recruitment Progress</div>
              <div class="text-sm text-gray-600">{{ position.progress }}%</div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
              <div :style="{ width: position.progress + '%' }"
                   class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500">
              </div>
            </div>
          </div>
  
          <!-- Action Buttons -->
          <div class="flex gap-4 mt-4">
            <button class="text-blue-600 hover:underline">
              {{ store.uiContent.positionActions.viewCandidates }}
            </button>
            <button class="text-blue-600 hover:underline">
              {{ store.uiContent.positionActions.scheduleInterviews }}
            </button>
            <button class="text-blue-600 hover:underline">
              {{ store.uiContent.positionActions.viewPipeline }}
            </button>
            <div class="flex-1 text-right">
              <button class="text-gray-600 hover:text-gray-900">
                {{ store.uiContent.positionActions.viewDetails }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRecruitmentStore } from '../stores/recruitmentDashboard'
  
  const store = useRecruitmentStore()
  
  const formatLabel = (key) => {
    return key.replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .replace('Avg', 'Avg.')
  }
  
  const formatValue = (key, value) => {
    if (key === 'avgTimeToHire') return `${value} days`
    return value
  }
  </script>