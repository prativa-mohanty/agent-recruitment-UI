// stores/resume.js
import { defineStore } from 'pinia'

export const useResumeStore = defineStore('resume', {
  state: () => ({
    headings: {
      main: {
        title: "Senior Frontend Developer",
        subtitle: "8 years experience"
      },
      sections: {
        skills: "Key Skills",
        experience: "Professional Experience",
        education: "Education",
        keyStrengths: "Key Strengths",
        development: "Areas for Development",
        certifications: "Certifications"
      }
    },
    candidateInfo: {
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      matchScore: 94
    },
    matchScores: {
      technical: {
        label: "Technical Match",
        score: 95
      },
      leadership: {
        label: "Leadership Match",
        score: 88
      },
      cultural: {
        label: "Cultural Match",
        score: 92
      }
    },
    keySkills: [
      { name: "React", type: "technical" },
      { name: "Vue.js", type: "technical" },
      { name: "TypeScript", type: "technical" },
      { name: "System Design", type: "technical" },
      { name: "Team Leadership", type: "soft" }
    ],
    professionalExperience: [
      {
        role: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        period: "2020 - Present",
        location: "San Francisco, CA",
        achievements: [
          "Led frontend architecture for 3 major products",
          "Managed team of 5 developers",
          "Reduced load time by 45%",
          "Implemented CI/CD pipeline"
        ],
        highlights: [
          "Demonstrated technical leadership",
          "Strong impact on performance",
          "Team management experience"
        ],
        tags: ["React", "TypeScript", "GraphQL"]
      },
      {
        role: "Frontend Developer",
        company: "StartupXYZ",
        period: "2018 - 2020",
        location: "Remote",
        achievements: [
          "Built responsive web applications",
          "Led migration to Next.js",
          "Mentored junior developers"
        ],
        highlights: [
            "Demonstrated technical leadership",
            "Strong impact on performance",
            "Team management experience"
          ],
        tags: ["Vue.js", "JavaScript", "REST APIs"]
      }
    ],
    education: {
      degree: "M.S. Computer Science",
      institution: "Stanford University",
      year: "2018",
      focus: "Machine Learning",
      gpa: "4.0 GPA"
    },
    keyStrengths: [
      "Strong technical leadership experience",
      "Proven track record in frontend architecture",
      "Experience with high-scale applications",
      "Clear progression in responsibilities"
    ],
    areasForDevelopment: [
      {
        area: "Limited cloud infrastructure experience",
        priority: "medium"
      },
      {
        area: "Could strengthen DevOps expertise",
        priority: "low"
      }
    ],
    certifications: [
      {
        name: "AWS Certified Developer",
        link: "#"
      },
      {
        name: "Google Cloud Professional",
        link: "#"
      },
      {
        name: "React Advanced Certification",
        link: "#"
      }
    ],
    icons: {
      download: "ArrowDownTrayIcon",
      external: "ArrowTopRightOnSquareIcon",
      strength: "CheckCircleIcon",
      development: "ExclamationTriangleIcon"
    }
  })
})