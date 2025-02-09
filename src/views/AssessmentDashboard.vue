// src/views/AssessmentDashboard.vue
<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Main Content -->
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <CreateAssessment 
            v-if="currentStep === 'create'" 
            @next-step="handleNextStep" 
          />
          <AssessmentLayout 
            v-else-if="currentStep === 'layout'"
            @generate-assessment="handleGenerateAssessment"
          />
          <AssessmentBuilder 
            v-else-if="currentStep === 'builder'"
            @add-round="handleAddRound"
          />
          <AddRound
            v-else-if="currentStep === 'addRound'"
            @back-to-builder="handleBackToBuilder"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CreateAssessment from '../components/AssessmentPublishing/CreateAssessment.vue'
import AssessmentLayout from '../components/AssessmentPublishing/AssessmentLayout.vue'
import AssessmentBuilder from '../components/AssessmentPublishing/AssessmentBuilder.vue'
import AddRound from '../components/AssessmentPublishing/AddRound.vue'

const currentStep = ref('create')

const handleNextStep = () => {
  currentStep.value = 'layout'
}

const handleGenerateAssessment = () => {
  currentStep.value = 'builder'
}

const handleAddRound = () => {
  currentStep.value = 'addRound'
}

const handleBackToBuilder = () => {
  currentStep.value = 'builder'
}
</script>