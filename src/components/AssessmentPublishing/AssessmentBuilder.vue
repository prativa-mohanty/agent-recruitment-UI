<template>
    <div class="min-h-screen bg-gray-50 p-6">
      <!-- Header -->
      <div class="flex justify-between items-start mb-8">
        <div>
          <h1 class="text-xl font-semibold text-gray-900">{{ store.uiContent.header.title }}</h1>
          <p class="text-sm text-gray-600">{{ store.uiContent.header.subtitle }}</p>
        </div>
        <div class="flex space-x-4">
          <button class="flex items-center text-gray-600 hover:text-gray-900">
            <EyeIcon class="w-5 h-5 mr-2" />
            Preview
          </button>
          <button class="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowDownTrayIcon class="w-5 h-5 mr-2" />
            Save Draft
          </button>
        </div>
      </div>
  
      <!-- Right Side Content -->
      <div class="grid grid-cols-3 gap-6">
        <!-- Main Content Area (2 columns) -->
        <div class="col-span-2">
          <!-- AI Assistant Section -->
          <div v-if="!showRounds" class="bg-blue-50 rounded-lg p-4 mb-6">
            <div class="flex items-center space-x-3 text-blue-700">
              <span class="text-sm font-medium">AI Assistant</span>
            </div>
          </div>
        </div>
  
        <!-- Right Sidebar -->
        <div class="space-y-6">
          <!-- Validation Status -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 class="text-base font-medium text-gray-900 mb-2">{{ store.uiContent.validation.title }}</h3>
            <div class="flex items-center text-green-600">
              <CheckCircleIcon class="w-5 h-5 mr-2" />
              <span class="text-sm">{{ store.uiContent.validation.status }}</span>
            </div>
          </div>
  
          <!-- Help & Tips -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 class="text-base font-medium text-gray-900 mb-2">{{ store.uiContent.helpTips.title }}</h3>
            <div class="flex items-start mb-3">
              <InformationCircleIcon class="w-5 h-5 text-blue-600 mr-2" />
              <span class="text-sm text-gray-600">{{ store.uiContent.helpTips.subtitle }}</span>
            </div>
            <ul class="space-y-2">
              <li v-for="(tip, index) in store.uiContent.helpTips.tips" :key="index" 
                  class="text-sm text-gray-600 pl-4 relative before:content-['•'] before:absolute before:left-0">
                {{ tip }}
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      <!-- Action Buttons Section - Two rows -->
      <div class="flex flex-col items-end space-y-4 mt-6 mb-4">
        <!-- Navigation Buttons Row -->
        <div class="flex justify-end items-center space-x-4">
          <button class="text-gray-600 hover:text-gray-900" @click="handleBack">
            Back
          </button>
          <button 
            @click="handleNextStep"
            class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Next Step
          </button>
        </div>
  
        <!-- Publish Section Row - Only show when rounds are visible -->
        <div v-if="showRounds" class="flex items-center space-x-4">
          <button class="p-2 text-gray-600 hover:text-gray-900">
            <ArrowDownIcon class="w-5 h-5" />
          </button>
          <button class="p-2 text-gray-600 hover:text-gray-900">
            <PrinterIcon class="w-5 h-5" />
          </button>
          <button class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Publish
          </button>
        </div>
      </div>
  
      <!-- Assessment Rounds Section -->
      <div v-if="showRounds" class="mt-4">
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <!-- Rounds header -->
          <div class="flex justify-between items-center mb-6">
            <div>
              <div class="flex items-center space-x-3">
                <h2 class="text-lg font-medium text-gray-900">{{ store.uiContent.rounds.title }}</h2>
                <span class="text-xs text-gray-500">Last edited 2 minutes ago</span>
              </div>
              <p class="text-sm text-gray-500">{{ store.uiContent.rounds.subtitle }}</p>
            </div>
            <div class="flex space-x-4">
              <button class="flex items-center px-4 py-2 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md">
                <UserGroupIcon class="w-5 h-5 mr-2" />
                Manage Collaborators
              </button>
              <button 
  @click="$emit('add-round')" 
  class="flex items-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
>
  <PlusCircleIcon class="w-5 h-5 mr-2" />
  Add Round
</button>
            </div>
          </div>
  
          <!-- Round Cards -->
          <div class="space-y-4">
            <div v-for="round in store.uiContent.rounds.items" :key="round.id"
                 class="border border-gray-200 rounded-lg p-4 hover:border-gray-300">
              <div class="flex justify-between items-center">
                <h3 class="text-base font-medium text-gray-900">{{ round.title }}</h3>
                <div class="flex items-center space-x-4">
                  <span class="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-full">{{ round.status }}</span>
                  <button class="text-gray-400 hover:text-gray-600">
                    <EyeIcon class="w-5 h-5" />
                  </button>
                  <button class="text-gray-400 hover:text-gray-600">
                    <ArrowDownTrayIcon class="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div class="flex items-center space-x-6 mt-3">
                <div class="flex items-center text-gray-500">
                  <ClockIcon class="w-4 h-4 mr-1" />
                  <span class="text-sm">{{ round.duration }}</span>
                </div>
                <div class="flex items-center text-gray-500">
                  <UserGroupIcon class="w-4 h-4 mr-1" />
                  <span class="text-sm">{{ round.reviewers }}</span>
                </div>
                <div class="flex items-center text-gray-500">
                  <ChatBubbleLeftIcon class="w-4 h-4 mr-1" />
                  <span class="text-sm">{{ round.comments }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useAssessmentBuilderStore } from '../../stores/AssessmentPublishingStore/assessmentBuilder'
  import { 
    EyeIcon, 
    ArrowDownTrayIcon,
    CheckCircleIcon,
    InformationCircleIcon,
    UserGroupIcon,
    PlusCircleIcon,
    ClockIcon,
    ChatBubbleLeftIcon,
    ArrowDownIcon,
    PrinterIcon
  } from '@heroicons/vue/24/outline'
  
  const store = useAssessmentBuilderStore()
  const showRounds = ref(false)

  const emit = defineEmits(['add-round'])
  
  const handleNextStep = () => {
    showRounds.value = true
  }
  
  const handleBack = () => {
    if (showRounds.value) {
      showRounds.value = false
    }
  }
  
  const handleAddRound = () => {
    store.addRound()
  }
  </script>