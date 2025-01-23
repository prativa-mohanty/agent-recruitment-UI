<template>
    <div class="max-w-3xl mx-auto space-y-6">
      <!-- Content 1: Assessment Status -->
      <div class="bg-white rounded-lg shadow-sm p-6">
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-xl font-semibold">{{ store.appContent.statusContent.title }}</h2>
            <p class="text-sm text-gray-600">Submission ID: {{ store.appContent.statusContent.submissionId }}</p>
          </div>
          <div class="text-right">
            <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {{ store.appContent.statusContent.status }}
            </span>
            <p class="text-sm text-gray-600 mt-1">Last updated: {{ store.appContent.statusContent.lastUpdated }}</p>
          </div>
        </div>
      </div>
  
      <!-- Content 2: Assessment Progress -->
      <div class="bg-white rounded-lg shadow-sm p-6">
        <h3 class="text-lg font-medium mb-6">{{ store.appContent.statusContent.title }}</h3>
  <div class="space-y-6">
    <div v-for="stage in store.appContent.statusContent.stages" :key="stage.id" class="flex items-start">
      <!-- Status Icon -->
      <div class="flex-shrink-0 w-8 h-8 flex items-center justify-center" v-html="getIconSVG(stage.icon)">
      </div>
      
      <!-- Status Content -->
      <div class="ml-4 flex-grow">
        <div class="flex justify-between items-start">
          <div>
            <h3 class="text-md font-medium">{{ stage.title }}</h3>
            <p class="text-sm text-gray-600">{{ stage.description }}</p>
          </div>
          <p v-if="stage.timestamp" class="text-sm text-gray-500 ml-4">
            {{ stage.timestamp }}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


  
      <!-- Content 3: Expected Timeline -->
      <div class="bg-white rounded-lg shadow-sm p-6">
        <h3 class="text-lg font-medium mb-4">{{ store.appContent.statusContent.timeline.title }}</h3>
        <div class="bg-gray-100 rounded-lg p-4">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Expected Feedback Date</span>
            <span class="text-sm font-medium">{{ store.appContent.statusContent.timeline.expectedDate }}</span>
          </div>
          <div class="mt-2 h-2 bg-blue-200 rounded-full">
            <div class="h-full w-1/5 bg-blue-500 rounded-full"></div>
          </div>
          <p class="text-sm text-gray-500 mt-2">Estimated time remaining: 4-5 business days</p>
        </div>
      </div>
  
      <!-- Content 4: Notification Preferences -->
      <div class="bg-white rounded-lg shadow-sm p-2">
        <h3 class="text-lg font-medium mb-4">{{ store.appContent.statusContent.notifications.title }}</h3>
        <div class="space-y-2">
          <div v-for="option in store.appContent.statusContent.notifications.options" 
               :key="option.type"
               class="flex justify-between items-center">
            <div class="flex items-center space-x-2">
              <div v-html="getIconSVG(option.icon)" class="w-5 h-5"></div>
              <span class="text-sm">{{ option.label }}</span>
            </div>
            <button 
              class="px-3 py-1 text-sm rounded-full"
              :class="option.status === 'Enabled' ? 
                'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'"
            >
              {{ option.status }}
            </button>
          </div>
        </div>
      </div>

      <!-- Content 5: Notification Update -->
      <div class="bg-blue-100 rounded-lg shadow-sm p-2">
       
        <p class="text-sm text-gray-600">{{ store.appContent.statusContent.latestNotification.message }}</p>
      </div>
    </div>
  </template>

<script setup>
import { useAssessmentContentStore } from '../stores/assessmentContent'

const store = useAssessmentContentStore()

const getIconSVG = (icon) => {
  switch (icon) {
    case "check":
      return `
        <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      `;
    case "loading":
      return `
        <svg class="w-6 h-6 text-blue-500 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
      `;
    case "clock":
      return `
        <svg class="w-6 h-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `;
    case "message":
      return `
       <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                class="h-6 w-6"
              >
                <path
                  stroke-width="1"
                  d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                />
              </svg>

     `;
    case "browser":
      return `
        <svg class="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z" />
</svg>

      `;
    default:
      return '';
  }
};
</script>

