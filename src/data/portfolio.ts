export interface Project {
  id: string
  title: string
  year: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

export interface Skill {
  category: string
  items: string[]
}

export const profile = {
  name: 'Mounika',
  role: 'Data & Analytics Lead',
  tagline:
    'I build the financial models and AI tooling that let enterprise marketing teams trust their own numbers.',
  bio: "I work across delivery, stakeholder communication, and hands-on build — turning messy contract math and campaign data into models and agents that people actually use to make decisions.",
  email: 'hello@example.com',
  location: 'Hyderabad, India',
}

export const projects: Project[] = [
  {
    id: 'sow-modeling',
    title: 'Contract Financial Modeling Engine',
    year: '2026',
    description:
      'A calculation engine that turns multi-year statement-of-work contracts into auditable, scenario-ready financial models — replacing a manual spreadsheet process prone to version drift.',
    tags: ['Financial Modeling', 'Python', 'Excel Automation'],
  },
  {
    id: 'rca-agent',
    title: 'AI Root-Cause Analysis Agent',
    year: '2026',
    description:
      'An AI agent that investigates drops in lead quality across marketing campaigns, tracing the drop back to specific channels and segments instead of leaving analysts to dig manually.',
    tags: ['AI Agents', 'Marketing Analytics', 'LLM Tooling'],
  },
  {
    id: 'engagement-scorecard',
    title: 'Client Engagement Scorecard',
    year: '2025',
    description:
      'A measurement framework and dashboard that gives stakeholders one shared view of program health, replacing three conflicting spreadsheets with a single source of truth.',
    tags: ['Dashboards', 'Stakeholder Reporting', 'Data Viz'],
  },
]

export const skills: Skill[] = [
  { category: 'Analysis', items: ['Financial Modeling', 'Root-Cause Analysis', 'Forecasting'] },
  { category: 'Build', items: ['Python', 'SQL', 'React', 'AI Agent Tooling'] },
  { category: 'Delivery', items: ['Stakeholder Communication', 'Program Management'] },
]
