<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Header -->
      <div class="p-6">
        <div class="flex justify-between items-center mb-6">
          <div>
            <div class="flex items-center gap-2">
              <h1 class="text-xl font-semibold text-gray-900">{{ store.positionDetails.title }}</h1>
              <span 
                class="px-2 py-1 text-xs rounded"
                :class="getStatusClasses(store.positionDetails.status.type)">
                {{ store.positionDetails.status.text }}
              </span>
            </div>
            <p class="text-sm text-gray-500 mt-1">
              {{ store.positionDetails.department }} • {{ store.positionDetails.location }}
            </p>
          </div>
          <div class="flex items-center gap-4">
            <button 
              v-for="(btn, key) in store.uiContent.buttons" 
              :key="key"
              :class="getButtonClasses(btn.type)"
              class="flex items-center px-4 py-1.5 rounded">
              <component 
                :is="getIcon(btn.icon)" 
                class="w-4 h-4 mr-2"
                v-if="btn.icon"
              />
              {{ btn.text }}
            </button>
          </div>
        </div>
  
        <!-- Stats Bar -->
        <div class="grid grid-cols-6 gap-4 mb-8">
          <div 
            v-for="stat in store.positionDetails.stats" 
            :key="stat.label"
            class="flex items-center bg-white rounded-lg p-3 shadow-sm"
            :title="stat.tooltip">
            <div class="flex flex-col">
              <div class="flex items-center gap-2 text-xs text-gray-500">
                <component 
                  :is="getIcon(stat.icon)" 
                  class="w-4 h-4"
                />
                <span>{{ stat.label }}</span>
              </div>
              <span class="text-sm font-medium mt-1">{{ stat.value }}</span>
            </div>
          </div>
        </div>
  
        <!-- Navigation Tabs -->
        <div class="flex gap-6 border-b">
          <button 
            v-for="tab in store.uiContent.tabs" 
            :key="tab.id"
            class="px-4 py-2 border-b-2 text-sm"
            :class="[
              tab.isActive 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-gray-600'
            ]"
            @click="store.setActiveTab(tab.id)">
            {{ tab.label }}
          </button>
        </div>
      </div>
  
      <!-- Main Content -->
      <div class="flex">
        <!-- Left Sidebar -->
        <div class="w-64 border-r bg-white">
          <div class="p-4">
            <!-- Recruitment Stages -->
            <div class="mb-6">
              <h3 class="text-sm font-medium text-gray-700 mb-3">
                {{ store.uiContent.sections.recruitmentStages.title }}
              </h3>
              <div class="space-y-3">
                <div 
                  v-for="stage in store.positionDetails.stages" 
                  :key="stage.id"
                  class="flex items-center justify-between text-sm hover:bg-gray-50 p-2 rounded cursor-pointer">
                  <div class="flex items-center gap-2">
                    <component 
                      :is="getIcon(stage.icon)" 
                      class="w-4 h-4 text-gray-400"
                    />
                    <span class="text-gray-600">{{ stage.name }}</span>
                  </div>
                  <span class="text-gray-900">{{ stage.count }}</span>
                </div>
              </div>
            </div>
  
            <!-- Sourcing Channels -->
            <div>
              <h3 class="text-sm font-medium text-gray-700 mb-3">
                {{ store.uiContent.sections.sourcingChannels.title }}
              </h3>
              <div class="space-y-3">
                <div 
                  v-for="channel in store.positionDetails.sourcingChannels" 
                  :key="channel.id"
                  class="flex items-center justify-between text-sm hover:bg-gray-50 p-2 rounded cursor-pointer">
                  <div class="flex items-center gap-2">
                    <component 
                      :is="getIcon(channel.icon)" 
                      class="w-4 h-4 text-gray-400"
                    />
                    <span class="text-gray-600">{{ channel.name }}</span>
                  </div>
                  <span class="text-gray-900">{{ channel.count }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Main Content Area -->
        <div class="flex-1 p-6">
          <!-- AI Assistant Update -->
          <div v-if="store.positionDetails.aiUpdates.length" class="bg-blue-50 p-4 rounded-lg mb-6">
            <div class="flex items-center gap-2 text-blue-700">
              <component :is="getIcon('robot')" class="w-4 h-4" />
              <span class="font-medium">AI Assistant Update</span>
            </div>
            <p class="text-blue-600 mt-1">
              {{ store.positionDetails.aiUpdates[0].message }}
            </p>
          </div>
  
          <!-- Search Bar -->
          <div class="mb-6">
            <div class="flex justify-between items-center">
              <div class="relative w-96">
                <input 
                  type="text" 
                  :placeholder="store.uiContent.searchBar.placeholder"
                  class="w-full px-4 py-2 border rounded-lg pl-10"
                >
                <component 
                  :is="getIcon('search')" 
                  class="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                />
              </div>
              <div class="flex items-center gap-2">
                <span class="text-gray-600">Sort by:</span>
                <select class="border rounded px-2 py-1">
                  <option 
                    v-for="option in store.uiContent.searchBar.sortOptions" 
                    :key="option.value"
                    :value="option.value">
                    {{ option.label }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { usePositionStore } from '../stores/positionDashboard'
import * as Icons from '@heroicons/vue/24/outline'

const store = usePositionStore()

const getStatusClasses = (type) => {
  const classes = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800'
  }
  return classes[type] || classes.success
}

const getButtonClasses = (type) => {
  const classes = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100'  // Updated styling for secondary
  }
  return classes[type] || classes.secondary
}

const getIcon = (name) => {
  if (!name) return null
  // Now the icon names already include the 'Icon' suffix
  return Icons[name] || null
}
</script>