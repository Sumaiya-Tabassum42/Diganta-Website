/**
 * ============================================================================
 *  DIGANTA AI — PRODUCT CONFIGURATION
 * ============================================================================
 *
 *  >>> THIS IS THE ONLY FILE YOU NEED TO EDIT TO WIRE UP YOUR PRODUCTS. <<<
 *
 *  For each product below, set the `url` field to the live website / app URL
 *  (or API endpoint) of that existing project. When a visitor clicks the
 *  product card, they will be taken to this URL (opens in a new tab).
 *
 *  Example:
 *    url: "https://zentix.mysoftheaven.com"
 *
 *  You can also edit the name, tagline, description, category, and status.
 *  Leave `url` as "#" to mark a product as "coming soon" (card stays inert).
 * ============================================================================
 */

export type ProductStatus = "live" | "coming-soon"

export interface Product {
  /** Unique key (used internally, keep lowercase, no spaces) */
  id: string
  /** URL-friendly slug for the product page */
  slug: string
  /** Display name shown on the card */
  name: string
  /** Short one-line tagline */
  tagline: string
  /** Longer supporting description */
  description: string
  /** Category / domain label shown as an eyebrow */
  category: string
  /** Banner image shown at the top of the card */
  image: string
  /**
   * ▶▶▶ EDIT THIS: the external URL of the live product website / app.
   * Set to "#" to keep it as a placeholder (renders "Coming soon").
   */
  externalUrl: string
  /** Highlight capabilities shown as chips */
  features: string[]
  /** Availability status */
  status: ProductStatus
  /** Path to the short introductory video for the product page */
  introVideo: string
  /** Short list of steps for "how to use" section */
  howToUse: string[]
  /** Screenshots and captions for the detailed UI walkthrough */
  walkthrough: {
    image: string
    caption:string
  }[]
}

export const products: Product[] = [
  {
    id: "zentix",
    name: "Zentix",
    tagline: "AI content ecosystem for news & content creation",
    slug: "zentix",
    description:
      "An end-to-end platform for creating, verifying, and publishing digital content — pairing full pipeline automation with human editorial control across a News Automation Platform and a News Editor Studio.",
    category: "Content Intelligence",
    image: "/products/zentix.png",
    // ▶▶▶ EDIT THIS URL — where clicking Zentix should take the user:
    externalUrl: "https://zentix.baherdesh.com/",
    features: ["Automated News Pipeline", "Fact-Checking Studio", "Bengali Generation", "Multi-Platform Publishing"],
    status: "live",
    introVideo: "https://res.cloudinary.com/dtppvn1sq/video/upload/v1786535024/for_this_product_generate__endihq.mp4",
    howToUse: ["Connect your sources", "Verify and edit content in the Studio", "Publish to multiple platforms", "Analyze audience engagement"],
    walkthrough: [
      { image: "/walkthroughs/zentix/step-1.png", caption: "Step 1: The dashboard gives you a complete overview of your content pipeline." },
      { image: "/walkthroughs/zentix/step-2.png", caption: "Step 2: Automated fact-checking assists editors in the verification process." },
      { image: "/walkthroughs/zentix/step-3.png", caption: "Step 3: Publish verified stories directly to your website or social media." },
    ]
  },
  {
    id: "progga",
    name: "Progga",
    tagline: "Unified AI service platform for enterprise & government",
    slug: "progga",
    description:
      "A centrally governed AI portal that unifies text, document (.docx), presentation (.pptx), image, UI/design, and data-analysis services behind a single secure login, with granular admin controls and usage transparency.",
    category: "Enterprise AI Platform",
    image: "/products/progga.png",
    // ▶▶▶ EDIT THIS URL — where clicking Progga should take the user:
    externalUrl: "https://all-ai.baherdesh.com/",
    features: ["Multi-Service AI Suite", "Governance & Quotas", "Ready-to-Use Files", "Usage Analytics"],
    status: "live",
    introVideo: "/videos/progga-intro.mp4",
    howToUse: ["Log in with your enterprise credentials", "Select a service (e.g., 'Generate Presentation')", "Provide your input or prompt", "Download the generated file"],
    walkthrough: [
      { image: "/walkthroughs/progga/step-1.png", caption: "Step 1: The central portal provides access to all available AI services." },
      { image: "/walkthroughs/progga/step-2.png", caption: "Step 2: Administrators can set usage quotas and access controls per user or group." },
      { image: "/walkthroughs/progga/step-3.png", caption: "Step 3: Users can generate various assets, from documents to images, on demand." },
    ]
  },
  {
    id: "docnexus",
    name: "DocNexus",
    tagline: "Secure on-premise document intelligence platform",
    slug: "docnexus",
    description:
      "An enterprise-grade platform that digitizes and truly understands complex, bilingual (Bengali/English) documents — with all processing, inference, and storage kept entirely within the organization's own infrastructure.",
    category: "Document Intelligence",
    image: "/products/docnexus.png",
    // ▶▶▶ EDIT THIS URL — where clicking DocNexus should take the user:
    externalUrl: "#",
    features: ["Bilingual OCR", "On-Premise Deployment", "Semantic Search", "Validation Workspace"],
    status: "coming-soon",
    introVideo: "/videos/docnexus-intro.mp4",
    howToUse: ["Upload your scanned documents", "The system automatically performs OCR and data extraction", "Use the validation workspace to review and correct data", "Search your document archive using natural language"],
    walkthrough: [
      { image: "/walkthroughs/docnexus/step-1.png", caption: "Step 1: Securely upload sensitive documents for on-premise processing." },
      { image: "/walkthroughs/docnexus/step-2.png", caption: "Step 2: The validation workspace allows for human-in-the-loop verification." },
      { image: "/walkthroughs/docnexus/step-3.png", caption: "Step 3: Perform semantic searches across your entire digitized document library." },
    ]
  },
]

/**
 * Company / brand configuration.
 * Edit these to update the parent-company links shown in the header & footer.
 */
export const company = {
  name: "Diganta AI",
  parentName: "Mysoftheaven (BD) Ltd.",
  parentUrl: "https://mysoftheaven.com/artificial-intelligence-development-company",
  tagline: "The home for our Artificial Intelligence products",
  description:
    "Diganta AI is the unified platform where Mysoftheaven's AI products live. Explore our suite of intelligent solutions built to solve real business problems.",
  contactEmail: "info@mysoftheaven.com",
}
