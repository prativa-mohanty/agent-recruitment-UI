# components/Resume.vue
<template>
  <div class="min-h-screen bg-gray-50 p-6">
    
    <!-- Header -->
<div class="flex justify-between items-start mb-6">
  <div>
    <div class="flex items-center gap-3">
      <h1 class="text-2xl font-bold">{{ store.headings.main.title }}</h1>
      <div class="flex items-center gap-2 text-gray-500">
        <span>{{ store.candidateInfo.company }}</span>
        <span>•</span>
        <span>{{ store.candidateInfo.location }}</span>
        <span>•</span>
        <span>{{ store.headings.main.subtitle }}</span>
      </div>
    </div>
  </div>
  <button class="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
    <ArrowDownTrayIcon class="w-5 h-5" />
    Download Resume
  </button>
</div>

    <!-- Content Grid -->
    <div class="grid grid-cols-3 gap-6">
      <!-- Left Content -->
      <div class="col-span-2 space-y-6">
        <!-- Key Skills -->
        <div class="space-y-3">
          <h2 class="text-lg font-semibold">{{ store.headings.sections.skills }}</h2>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="skill in store.keySkills" 
              :key="skill.name"
              class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {{ skill.name }}
            </span>
          </div>
        </div>

        <!-- Professional Experience -->
        <div class="space-y-6">
          <h2 class="text-lg font-semibold">{{ store.headings.sections.experience }}</h2>
          
          <div 
            v-for="(experience, index) in store.professionalExperience" 
            :key="index"
            class="bg-white rounded-lg p-6 shadow space-y-4"
          >
            <!-- Role Header -->
            <div class="flex justify-between">
              <div>
                <h3 class="font-medium">{{ experience.role }}</h3>
                <div class="text-gray-600">
                  {{ experience.company }} • {{ experience.location }}
                </div>
              </div>
              <div class="text-gray-600">{{ experience.period }}</div>
            </div>

            <!-- Achievements -->
            <ul class="space-y-2">
              <li 
                v-for="(achievement, i) in experience.achievements" 
                :key="i"
                class="flex items-start gap-2"
              >
                <span class="text-green-600">✓</span>
                <span>{{ achievement }}</span>
              </li>
            </ul>

            <!-- Highlights -->
            <div v-if="experience.highlights" class="bg-blue-50 p-4 rounded-lg">
              <div 
                v-for="(highlight, i) in experience.highlights" 
                :key="i"
                class="text-blue-800"
              >
                {{ highlight }}
              </div>
            </div>

            <!-- Tags -->
            <div class="flex gap-2">
              <span 
                v-for="tag in experience.tags" 
                :key="tag"
                class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div class="bg-white rounded-lg p-6 shadow">
          <h2 class="text-lg font-semibold mb-4">{{ store.headings.sections.education }}</h2>
          <div class="space-y-2">
            <div class="font-medium">{{ store.education.degree }}</div>
            <div class="text-gray-600">{{ store.education.institution }}</div>
            <div class="text-gray-600">{{ store.education.year }}</div>
            <div class="text-gray-600">{{ store.education.focus }}</div>
            <div class="font-medium text-green-600">{{ store.education.gpa }}</div>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="space-y-6">
        <!-- AI Match Score -->
        <div class="bg-white rounded-lg p-6 shadow">
          <div class="text-center mb-6">
            <div class="text-3xl font-bold text-blue-600">{{ store.candidateInfo.matchScore }}%</div>
            <div class="text-gray-600">AI Match Score</div>
          </div>

          <div class="space-y-4">
            <div v-for="(match, key) in store.matchScores" :key="key">
              <div class="flex justify-between text-sm mb-1">
                <span>{{ match.label }}</span>
                <span>{{ match.score }}%</span>
              </div>
              <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  class="h-full bg-blue-600 rounded-full"
                  :style="{ width: `${match.score}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Strengths -->
        <div class="bg-white rounded-lg p-6 shadow">
          <h2 class="text-lg font-semibold mb-4">{{ store.headings.sections.keyStrengths }}</h2>
          <div class="space-y-3">
            <div 
              v-for="(strength, index) in store.keyStrengths" 
              :key="index"
              class="flex items-start gap-2"
            >
              <CheckCircleIcon class="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>{{ strength }}</span>
            </div>
          </div>
        </div>

        <!-- Areas for Development -->
        <div class="bg-white rounded-lg p-6 shadow">
          <h2 class="text-lg font-semibold mb-4">{{ store.headings.sections.development }}</h2>
          <div class="space-y-3">
            <div 
              v-for="(area, index) in store.areasForDevelopment" 
              :key="index"
              class="flex items-start gap-2"
            >
              <ExclamationTriangleIcon class="w-5 h-5 text-yellow-600 flex-shrink-0" />
              <span>{{ area.area }}</span>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="bg-white rounded-lg p-6 shadow">
          <h2 class="text-lg font-semibold mb-4">{{ store.headings.sections.certifications }}</h2>
          <div class="space-y-3">
            <div 
              v-for="cert in store.certifications" 
              :key="cert.name"
              class="flex items-center justify-between"
            >
              <span>{{ cert.name }}</span>
              <ArrowTopRightOnSquareIcon class="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useResumeStore } from '../stores/resume'
import { 
  ArrowDownTrayIcon, 
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/vue/24/outline'

const store = useResumeStore()
</script>