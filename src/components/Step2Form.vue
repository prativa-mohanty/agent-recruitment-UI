<template>
  <div>
    <!-- Header -->
    <div class="flex items-center mb-2">
      <h2 class="text-lg font-semibold">{{ stepContent.title }}</h2>
    </div>

    <p class="text-gray-600 mb-2">{{ stepContent.subtitle }}</p>

    <div class="space-y-2">
      <!-- Dynamic Tasks -->
      <div 
        v-for="task in stepContent.tasks" 
        :key="task.id"
        class="border rounded-lg p-4"
      >
        <h3 class="text-sm font-medium mb-2">{{ task.title }}</h3>
        <p class="text-gray-600 text-sm mb-2">
          {{ task.description }}
        </p>
        <div class="text-xs text-gray-500 mb-2">
          Time Limit: {{ task.timeLimit }} minutes | Type: {{ task.language }}
        </div>
        <div 
          class="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer"
          @click="triggerFileInput(task.id)"
        >
          <input
            type="file"
            :ref="el => setFileInputRef(task.id, el)"
            class="hidden"
            @change="handleFileUpload($event, task.id)"
          />
          <div class="text-gray-500">
            {{ task.uploadText }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useAssessmentStore } from '../stores/assessment'
  import { useAssessmentContentStore } from '../stores/assessmentContent'
  
  const store = useAssessmentStore()
  const contentStore = useAssessmentContentStore()
  
  const content = contentStore.appContent
  const stepContent = computed(() => contentStore.getStepContent(2))
  
  const fileInputRefs = ref({})
  
  const setFileInputRef = (taskId, el) => {
    if (el) {
      fileInputRefs.value[taskId] = el
    }
  }
  
  const triggerFileInput = (taskId) => {
    const inputRef = fileInputRefs.value[taskId]
    if (inputRef) {
      inputRef.click()
    }
  }
  
  const handleFileUpload = async (event, taskId) => {
    const file = event.target.files[0]
    if (file) {
      const code = await file.text()
      store.updateTaskCode(taskId, code)
    }
  }
  </script>