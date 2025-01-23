<template>
  <div>
    <!-- Header -->
    <div class="flex items-center mb-4">
      <h2 class="text-lg font-semibold">{{ stepContent.title }}</h2>
    </div>

    <p class="text-gray-600 mb-4">{{ stepContent.subtitle }}</p>
    
    <div class="space-y-4">
      <template v-for="field in stepContent.fields" :key="field.id">
        <div>
          <label class="block text-sm font-medium mb-2">
            {{ field.label }}
          </label>
          
          <!-- Number Input -->
          <input 
            v-if="field.type === 'number'"
            type="number" 
            v-model="formData[field.id]"
            class="w-full px-3 py-2 border rounded-md"
          />

          <!-- Multi-select -->
          <div v-if="field.type === 'multiSelect'" class="flex flex-wrap gap-2">
            <button
              v-for="option in field.options"
              :key="option"
              @click="toggleSelection(field.id, option)"
              class="px-4 py-2 rounded-full text-sm"
              :class="isSelected(field.id, option) ? 
                'bg-blue-100 text-blue-700' : 'bg-gray-100'"
            >
              {{ option }}
            </button>
          </div>

          <!-- Text Input -->
          <input 
            v-if="field.type === 'text'"
            type="text" 
            v-model="formData[field.id]"
            :placeholder="field.placeholder"
            class="w-full px-3 py-2 border rounded-md"
          />
        </div>
      </template>
    </div>
  </div>
</template>
  
  <script setup>
  import { ref, computed, watch } from 'vue'
  import { useAssessmentStore } from '../stores/assessment'
  import { useAssessmentContentStore } from '../stores/assessmentContent'
  
  const store = useAssessmentStore()
  const contentStore = useAssessmentContentStore()
  
  const content = contentStore.appContent
  const stepContent = computed(() => contentStore.getStepContent(1))
  
  const formData = ref({
    yearsExperience: '',
    frameworks: [],
    agentTypes: ''
  })
  
  const toggleSelection = (fieldId, value) => {
    if (!Array.isArray(formData.value[fieldId])) {
      formData.value[fieldId] = []
    }
    const index = formData.value[fieldId].indexOf(value)
    if (index === -1) {
      formData.value[fieldId].push(value)
    } else {
      formData.value[fieldId].splice(index, 1)
    }
  }
  
  const isSelected = (fieldId, value) => {
    return Array.isArray(formData.value[fieldId]) && formData.value[fieldId].includes(value)
  }
  
  // Watch for changes and update the store
  watch(formData, (newData) => {
    Object.entries(newData).forEach(([key, value]) => {
      store.updateFormData(key, value)
    })
  }, { deep: true })
  </script>