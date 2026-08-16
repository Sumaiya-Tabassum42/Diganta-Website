export interface Service {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  image: string
  externalUrl?: string
}

export const services: Service[] = [
  {
    id: "ai-consulting",
    slug: "ai-consulting",
    name: "AI Strategy Consulting",
    tagline: "Aligning AI with your business goals.",
    description:
      "We help you identify opportunities, define a roadmap, and build a business case for AI integration, ensuring your investments deliver tangible value.",
    image: "/services/consulting.png", // Assumes image will be added to public/services
  },
  {
    id: "custom-development",
    slug: "custom-development",
    name: "Custom AI Model Development",
    tagline: "Tailor-made intelligence for your unique challenges.",
    description:
      "Our team of data scientists and engineers builds, trains, and deploys custom machine learning models that are specifically designed to solve your unique business problems.",
    image: "/services/development.png", // Assumes image will be added to public/services
  },
  {
    id: "platform-integration",
    slug: "platform-integration",
    name: "AI Platform Integration",
    tagline: "Seamlessly integrate AI into your existing workflows.",
    description:
      "We integrate our AI products like Zentix, Progga, and DocNexus into your existing IT infrastructure, ensuring a smooth transition and maximizing your team's productivity.",
    image: "/services/integration.png", // Assumes image will be added to public/services
  },
]