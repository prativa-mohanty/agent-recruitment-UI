// src/stores/AssessmentPublishingStore/assessmentBuilder.js
import { defineStore } from 'pinia'
import { 
  ClockIcon, 
  ChatBubbleLeftIcon,
  UserGroupIcon,
  PlusCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  EyeIcon,
  ArrowDownTrayIcon
} from '@heroicons/vue/24/outline'

export const useAssessmentBuilderStore = defineStore('assessmentBuilder', {
  state: () => ({
    uiContent: {
      header: {
        title: 'Assessment Builder',
        subtitle: 'Configure and create assessment rounds'
      },
      validation: {
        title: 'Validation Status',
        status: 'All validations passed',
        icon: CheckCircleIcon
      },
      helpTips: {
        title: 'Help & Tips',
        subtitle: 'Current Step: Round Configuration',
        icon: InformationCircleIcon,
        tips: [
          'Configure each round with specific tasks',
          'Set appropriate time limits',
          'Add detailed task descriptions'
        ]
      },
      rounds: {
        title: 'Assessment Rounds',
        subtitle: 'Configure multiple rounds and manage collaborators',
        addRoundButton: {
          text: 'Add Round',
          icon: PlusCircleIcon
        },
        manageCollabButton: {
          text: 'Manage Collaborators',
          icon: UserGroupIcon
        },
        items: [
          {
            id: 1,
            title: 'Round 1: Aptitude Test',
            duration: '60 mins',
            reviewers: '2 reviewers',
            comments: '1 comments',
            durationIcon: ClockIcon,
            reviewIcon: UserGroupIcon,
            commentIcon: ChatBubbleLeftIcon,
            status: 'Draft'
          },
          {
            id: 2,
            title: 'Round 2: Technical Coding',
            duration: '90 mins',
            reviewers: '3 reviewers',
            comments: '2 comments',
            durationIcon: ClockIcon,
            reviewIcon: UserGroupIcon,
            commentIcon: ChatBubbleLeftIcon,
            status: 'Draft'
          }
        ]
      },
      actions: {
        back: {
          text: 'Back'
        },
        nextStep: {
          text: 'Next Step'
        },
        preview: {
          text: 'Preview',
          icon: EyeIcon
        },
        saveDraft: {
          text: 'Save Draft',
          icon: ArrowDownTrayIcon
        },
        publish: {
          text: 'Publish'
        }
      }
    }
  }),
  actions: {
    addRound() {
      // Add new round logic
    },
    saveRound(roundData) {
      // Save round data
    }
  }
})