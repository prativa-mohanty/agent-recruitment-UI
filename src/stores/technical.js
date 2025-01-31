// stores/technical.js
import { defineStore } from 'pinia'

export const useTechnicalStore = defineStore('technical', {
  state: () => ({
    headings: {
      main: {
        title: "Technical Assessment",
        subtitle: "Coding 92% | System Design 85%"
      },
      sections: {
        implementation: "Code Implementation",
        systemDesign: "System Design",
        analysis: "AI Analysis",
        strengths: "Key Strengths",
        improvements: "Suggested Improvements"
      }
    },
    assessment: {
      tasks: [
        {
          id: "code",
          name: "Code Implementation",
          score: 92,
          status: "completed"
        },
        {
          id: "testScripts",
          name: "Test Scripts",
          score: 88,
          status: "completed"
        },
        {
          id: "systemDesign",
          name: "System Design",
          score: 85,
          status: "completed"
        }
      ]
    },
    codeImplementation: {
      title: "Shopping Cart Implementation",
      code: `function ShoppingCart() {
  const items = [];
  let total = 0;
  
  const addItem = (product) => {
    items.push(product);
    updateTotal(product);
  }

  const updateTotal = (product) => {
    total += product.price;
  }

  return {
    items,
    total,
    addItem
  }
}`,
      language: "javascript"
    },
    aiAnalysis: {
      title: "AI Analysis Available",
      summary: "Strong implementation with excellent code organization and system design thinking",
      keyStrengths: [
        "Excellent code organization and patterns",
        "Strong error handling approach",
        "Efficient state management",
        "Clear system design thinking"
      ],
      suggestedImprovements: [
        {
          point: "Could add more unit tests",
          priority: "medium"
        },
        {
          point: "Consider caching strategy",
          priority: "medium"
        },
        {
          point: "Document edge cases",
          priority: "low"
        }
      ]
    },
    icons: {
      check: "CheckCircleIcon",
      alert: "ExclamationTriangleIcon",
      code: "CodeBracketIcon",
      design: "CubeIcon",
      test: "BeakerIcon"
    },
    badges: {
      completed: {
        text: "Completed",
        class: "bg-green-100 text-green-800"
      },
      inProgress: {
        text: "In Progress",
        class: "bg-blue-100 text-blue-800"
      }
    }
  })
})