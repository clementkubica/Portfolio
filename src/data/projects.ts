export type Project = {
  title: string
  description: string
  href?: string
  img?: string
  tags?: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: "Kavu — Post-Harvest Loss Dashboard",
    description:
      "Minimal React dashboard that predicts post-harvest loss and gives actionables. Chatbot provides storage/sale guidance, financial insights (revenue estimates using past market prices), and generates sell-by dates.",
    tags: [
      "React", "TypeScript", "Vite", "LLM",
      "Gemini (image health)", "Inventory", "Financial Insights"
    ],
    href: "https://github.com/clementkubica/Kavu",
    featured: true,
  },
  {
    title: "Exploding Kittens (TDD/BVA)",
    description:
      "Java/Gradle implementation of the card game with strict TDD. Implemented card behaviors (incl. AlterTheFuture, Catomic Bomb) and Deck helpers. Clean architecture, console UI in /ui, static analysis & high coverage.",
    tags: ["Java", "Gradle", "TDD", "BVA", "JUnit", "Mocking", "Checkstyle", "JaCoCo"],
    href: "https://github.com/clementkubica/Exploding-Kittens",
    featured: true,
  },
  {
    title: "Benford's Law Analyzer",
    description:
      "Python client + AWS Lambda for statistical forensics. API Gateway + NMR integration, automated anomaly detection.",
    tags: ["Python", "AWS Lambda", "API Gateway", "Data Analysis"],
    href: "https://github.com/clementkubica/Exploding-Kittens",
  },
  {
    title: "FurnitureFlow",
    description:
      "Full-stack marketplace for Northwestern students (real-time listings, messaging). Maps + Auth + Firestore.",
    tags: ["React", "Vite", "Firebase Auth", "Firestore", "Google Maps API", "Material UI"],
    href: "https://github.com/clementkubica/FurnitureFlow",
  },
  {
    title: "Juno — AI Marketing Assistant",
    description:
      "Generates localized campaigns/flyers with Gemini LLM + event data; CI/CD via GitHub Actions.",
    tags: ["React", "Firebase", "Gemini API", "Google Maps API", "GitHub Actions"],
    href: "https://github.com/clementkubica/Juno",
  },
  {
    title: "F1 Podium Prediction",
    description:
      "End-to-end ML pipeline on 20+ years of F1 data. Used tree models & TensorFlow with domain-engineered features.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
    href: "https://github.com/clementkubica/F1-prediction-project",
    featured: true,
  },
]