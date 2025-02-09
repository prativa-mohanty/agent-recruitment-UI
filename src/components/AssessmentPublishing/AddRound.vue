<template>
    <div class="min-h-screen bg-gray-50 p-6">
      <div class="grid grid-cols-7 gap-6">
        <!-- Left Section (4 columns) -->
        <div class="col-span-4">
          <!-- Task Editor Card -->
          <div class="bg-white rounded-lg shadow border border-gray-100">
            <!-- Header -->
            <div class="flex justify-between items-center px-5 py-3 border-b border-gray-100">
              <h2 class="text-sm font-medium text-gray-900">Task Editor</h2>
              <div class="flex space-x-1">
                <button class="p-1 text-gray-400 hover:text-gray-600 rounded-sm hover:bg-gray-50">
                  <DocumentDuplicateIcon class="w-4 h-4" />
                </button>
                <button class="p-1 text-gray-400 hover:text-gray-600 rounded-sm hover:bg-gray-50">
                  <XMarkIcon class="w-4 h-4" />
                </button>
              </div>
            </div>
  
            <!-- Algorithm Implementation Section -->
            <div class="p-5">
              <h3 class="text-sm font-medium text-gray-900 mb-3">Algorithm Implementation</h3>
              
              <!-- Main Task Area -->
              <div class="space-y-4 mb-4">
                <textarea
                  v-model="formData.taskDescription"
                  class="w-full h-28 p-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm"
                  placeholder="Implement a sorting algorithm"
                ></textarea>
  
                <!-- Settings Row -->
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs text-gray-600 mb-1.5">Difficulty Level</label>
                    <select 
                      v-model="formData.difficultyLevel"
                      class="w-full px-3 py-1.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    >
                      <option>Medium</option>
                      <option>Easy</option>
                      <option>Hard</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-xs text-gray-600 mb-1.5">Points</label>
                    <input
                      type="number"
                      v-model="formData.points"
                      class="w-full px-3 py-1.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>
              </div>
  
              <!-- Variation Section -->
              <div class="mt-6">
                <div class="flex items-start justify-between">
                  <div class="flex items-center space-x-2">
                    <h3 class="text-sm font-medium text-gray-900">Variation 1</h3>
                    <button class="p-1">
                      <XMarkIcon class="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                  <div class="flex items-center space-x-3">
                    <button class="flex items-center text-blue-600 hover:text-blue-700 text-xs font-medium">
                      <PlusIcon class="w-3.5 h-3.5 mr-1" />
                      Add Variation
                    </button>
                    <button class="flex items-center text-blue-600 hover:text-blue-700 text-xs font-medium">
                      <AdjustmentsHorizontalIcon class="w-3.5 h-3.5 mr-1" />
                      Generate Similar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Right Section (3 columns) -->
        <div class="col-span-3 space-y-4">
          <!-- AI Generation Status -->
          <div class="bg-green-50 rounded-lg px-4 py-3">
            <div class="flex">
              <CheckCircleIcon class="w-4 h-4 text-green-500 mt-0.5" />
              <div class="ml-3">
                <h3 class="text-sm font-medium text-green-800">AI Generation Status</h3>
                <p class="text-xs text-green-600 mt-0.5">Generation Complete</p>
                <p class="text-xs text-green-600">Content generated successfully</p>
              </div>
            </div>
          </div>
  
          <!-- Round Settings -->
          <div class="bg-white rounded-lg shadow border border-gray-100 p-4">
            <h3 class="text-sm font-medium text-gray-900 mb-4">Round Settings</h3>
            
            <!-- Scoring Strategy -->
            <div class="mb-4">
              <label class="block text-xs text-gray-600 mb-1.5">Scoring Strategy</label>
              <select class="w-full px-3 py-1.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm">
                <option>Sum of all tasks</option>
              </select>
            </div>
  
            <!-- Pass Criteria -->
            <div>
              <label class="block text-xs text-gray-600 mb-1.5">Pass Criteria</label>
              <div class="flex items-center space-x-2">
                <input
                  type="number"
                  value="70"
                  class="w-16 px-3 py-1.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
                <select class="flex-1 px-3 py-1.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm">
                  <option>All tasks required</option>
                </select>
              </div>
            </div>
          </div>
  
          <!-- Task Selection -->
          <div class="bg-white rounded-lg shadow border border-gray-100 p-4">
            <h3 class="text-sm font-medium text-gray-900 mb-3">Task Selection</h3>
            
            <div class="space-y-2">
              <label class="flex items-center">
                <input
                  type="checkbox"
                  checked
                  class="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-offset-0 focus:ring-1 focus:ring-blue-500"
                />
                <span class="ml-2 text-sm text-gray-600">Randomize task order</span>
              </label>
              <label class="flex items-center">
                <input
                  type="checkbox"
                  checked
                  class="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-offset-0 focus:ring-1 focus:ring-blue-500"
                />
                <span class="ml-2 text-sm text-gray-600">Use task variations</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  import { 
    PlusIcon, 
    AdjustmentsHorizontalIcon,
    CheckCircleIcon,
    DocumentDuplicateIcon,
    XMarkIcon
  } from '@heroicons/vue/24/outline'
  
  const formData = reactive({
    taskDescription: '',
    difficultyLevel: 'Medium',
    points: 0
  })
  </script>