import ghealeadAdminAnalytics from "../assets/projects/ghealead/ghealead-admin-analytics.png";
import ghealeadClientDashboard from "../assets/projects/ghealead/ghealead-client-dashboard.png";
import ghealeadTherapistDashboard from "../assets/projects/ghealead/ghealead-therapist-dashboard.png";
import iwacumoAdminOverview from "../assets/projects/iwacumo/iwacumo-admin-overview.png";
import iwacumoPublisherDashboard from "../assets/projects/iwacumo/iwacumo-publisher-dashboard.png";
import iwacumoStorefront from "../assets/projects/iwacumo/iwacumo-storefront.png";
import prymagentChatDashboard from "../assets/projects/prymagent/prymagent-chat-dashboard.png";
import prymagentFeatureList from "../assets/projects/prymagent/prymagent-feature-list.png";
import prepadiAdmin from "../assets/projects/prepadi/prepadi-admin.png";
import prepadiHomepage from "../assets/projects/prepadi/prepadi-homepage.png";
import workieTechieHomepage from "../assets/projects/workietechie/workietechie-homepage.png";
import workieTechieAdmin from "../assets/projects/workietechie/workie-techie-admin.png";
import type {
  ProjectCaseStudy,
  TechStackGroup,
  WorkflowTool,
} from "./types";

export const siteTitle = "Israel Philips";

export const heroMetrics = [
  "6+ years building across product, platform, and AI delivery",
  "Products launched for startups, operators, and global-facing teams",
  "Practical AI systems designed to save time and reduce operational drag",
];

export const techStackGroups: TechStackGroup[] = [
  {
    title: "Front-End Development",
    items: [
      "JavaScript",
      "Reactjs",
      "Nextjs",
      "TypeScript",
      "React Native",
      "Tailwind CSS",
      "Shadcn",
    ],
  },
  {
    title: "Backend Development",
    items: ["Python", "Django", "Nextjs + Prisma", "PostgreSQL", "AWS", "GCP"],
  },
  {
    title: "AI Specialization",
    items: ["Python", "RAG (Retrieval Augmented generation)", "AI Automation"],
  },
];

export const workflowTools: WorkflowTool[] = [
  {
    name: "Codex",
    use: "Accelerates architecture setup, implementation speed, and production-ready refinement without losing code quality.",
  },
  {
    name: "Claude Code",
    use: "Supports deep reasoning, structured problem solving, and sharper review loops on large or fast-moving builds.",
  },
  {
    name: "AntiGravity",
    use: "Helps with AI-native experimentation, rapid workflow iteration, and practical agentic product exploration.",
  },
];

export const projects: ProjectCaseStudy[] = [
  {
    slug: "prymagent",
    name: "PrymAgent",
    eyebrow: "AI finance workflow",
    summary:
      "A WhatsApp-native AI bookkeeper and financial assistant for business owners and professionals.",
    intro:
      "PrymAgent turns everyday chat into useful business operations. Users can create invoices, log transactions, generate payment links, and request reports directly from WhatsApp without opening a new dashboard.",
    role:
      "I led the product engineering direction around conversational finance UX, delivery flow, and the full-stack product experience needed to make AI useful in a familiar channel.",
    outcome:
      "A lightweight but powerful finance assistant built around user behavior people already have: chatting on WhatsApp.",
    challenge:
      "The product had to feel simple enough for non-technical business owners while still supporting structured financial actions with confidence and speed.",
    approach:
      "I focused on clean operational flows, reliable action states, and a product language that keeps finance tasks calm, conversational, and easy to complete.",
    stack: ["React", "TypeScript", "Django", "AI Workflows", "Payments"],
    tags: ["Conversational AI", "Fintech UX", "Operations Automation"],
    highlights: [
      "Invoice generation through chat with payment links",
      "Transaction logging that reduces spreadsheet dependence",
      "Monthly reporting flow designed for fast decision-making",
      "AI-first experience built around a channel users already trust",
    ],
    metrics: [
      "Built for faster day-to-day money tracking",
      "Removed the need for separate finance tooling in simple workflows",
      "Designed to reduce friction for small business operators",
    ],
    liveUrlEnvKey: "VITE_PROJECT_PRYMAGENT_URL",
    gallery: [
      {
        src: prymagentChatDashboard,
        alt: "PrymAgent chat-based dashboard preview",
        note: "The live assistant experience is centered on direct task execution inside chat.",
      },
      {
        src: prymagentFeatureList,
        alt: "PrymAgent feature list and product flow preview",
        note: "The supporting product view reinforces how invoicing, logging, and reporting stay simple inside one AI-native workflow.",
      },
    ],
  },
  {
    slug: "iwacumo",
    name: "Iwacumo",
    eyebrow: "Multi-tenant publishing platform",
    summary:
      "A multi-tenant publishing and book commerce platform with white-label storefronts and role-based operations.",
    intro:
      "Iwacumo helps publishers, authors, admins, and readers operate within one platform while preserving the structure each tenant needs to run its own business.",
    role:
      "I worked on the product experience and platform logic that made white-label publishing, commerce flows, and tenant-aware dashboards feel cohesive and scalable.",
    outcome:
      "A platform that supports publisher independence while keeping the product organized, secure, and usable at scale.",
    challenge:
      "The system had to support multiple user types, isolated tenant workflows, storefront ownership, and payment-heavy journeys without becoming confusing.",
    approach:
      "I focused on role clarity, tenant-aware UX, and dependable product flows so each audience could manage its work confidently inside the same product ecosystem.",
    stack: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Payments"],
    tags: ["Multi-tenant SaaS", "Publishing Tech", "White-label Commerce"],
    highlights: [
      "Strict tenant isolation with multi-role access control",
      "White-label publisher storefront model",
      "Commerce workflows for books, payouts, and internal payment processing",
      "Dashboards that separate platform control from tenant operations",
    ],
    metrics: [
      "Supports multiple business layers inside one platform",
      "Designed for growth without sacrificing tenant boundaries",
      "Keeps publisher operations readable and manageable",
    ],
    liveUrlEnvKey: "VITE_PROJECT_IWACUMO_URL",
    gallery: [
      {
        src: iwacumoStorefront,
        alt: "Iwacumo storefront preview",
        note: "A customer-facing storefront that presents books in a clean, modern commerce experience.",
      },
      {
        src: iwacumoPublisherDashboard,
        alt: "Iwacumo publisher dashboard preview",
        note: "Publisher workflows stay organized around ownership, inventory, and operational visibility.",
      },
      {
        src: iwacumoAdminOverview,
        alt: "Iwacumo admin overview preview",
        note: "Administrative control is separated cleanly from tenant-facing actions.",
      },
    ],
  },
  {
    slug: "prepadi",
    name: "Prepadi",
    eyebrow: "Edtech exam system",
    summary:
      "A multi-tenant exam simulator and LMS that brings structured CBT sessions, school operations, and AI-assisted grading together.",
    intro:
      "Prepadi was built for schools, organizations, and students who need an exam platform that feels modern, dependable, and ready for large-scale learning operations.",
    role:
      "I helped shape the product delivery around role-based dashboards, exam-session reliability, and AI-supported workflows for educational teams.",
    outcome:
      "A system that balances performance, structure, and usability across high-focus student experiences and institution-level management.",
    challenge:
      "Exam platforms have no room for ambiguity. Timing, navigation, access control, and grading workflows all need to feel stable under pressure.",
    approach:
      "I prioritized clarity, system consistency, and dependable user state handling so both schools and students could use the product with confidence.",
    stack: ["Next.js", "Prisma", "TypeScript", "Tailwind CSS", "AI Grading"],
    tags: ["Edtech", "Role-based SaaS", "AI Enablement"],
    highlights: [
      "Role-based dashboards for admins, organizations, and students",
      "Real-time CBT session handling with timers, navigation, and submissions",
      "Question bank workflows with cloning and custom exam creation",
      "AI-assisted theory grading and content ingestion features",
    ],
    metrics: [
      "Designed for high-focus exam reliability",
      "Supports school operations and student performance workflows",
      "Structured for growth across multiple organizations",
    ],
    liveUrlEnvKey: "VITE_PROJECT_PREPADI_URL",
    gallery: [
      {
        src: prepadiHomepage,
        alt: "Prepadi homepage and product overview preview",
        note: "The front-facing experience introduces the platform with clarity for schools, organizations, and learners.",
      },
      {
        src: prepadiAdmin,
        alt: "Prepadi admin dashboard preview",
        note: "The administrative view keeps exams, users, and school operations organized in one structured workspace.",
      },
    ],
  },
  {
    slug: "workietechie",
    name: "WorkieTechie",
    eyebrow: "Talent marketplace",
    summary:
      "A trust-first platform connecting vetted Nigerian professionals with international clients through structured approval and assignment workflows.",
    intro:
      "WorkieTechie is designed to create calm, dependable matching between skilled professionals and global clients by keeping communication, review, and approvals clear on both sides.",
    role:
      "I built the frontend experience and helped shape the marketplace flow around credibility, expectations, and admin-managed quality control.",
    outcome:
      "A service marketplace that feels more intentional, transparent, and confidence-building than a typical listing board.",
    challenge:
      "The product needed to make both clients and professionals feel protected. That meant reducing ambiguity, setting expectations early, and making progress visible throughout the journey.",
    approach:
      "I used a clean interface structure, trust-oriented messaging, and straightforward action design to support approvals, matching, and assignment management.",
    stack: ["Vite", "React", "TypeScript", "Django", "Marketplace Ops"],
    tags: ["Marketplace", "Trust Systems", "Client Experience"],
    highlights: [
      "Admin-managed vetting and assignment system",
      "Clearer expectation-setting for clients and professionals",
      "Structured progress visibility throughout delivery",
      "Built around trust before, during, and after project execution",
    ],
    metrics: [
      "Designed to reduce marketplace friction",
      "Improves confidence on both sides of the hiring flow",
      "Built to support dependable talent matching at scale",
    ],
    liveUrlEnvKey: "VITE_PROJECT_WORKIETECHIE_URL",
    gallery: [
      {
        src: workieTechieHomepage,
        alt: "WorkieTechie homepage preview",
        note: "The marketplace experience introduces trust and clarity from the very first screen.",
      },
      {
        src: workieTechieAdmin,
        alt: "WorkieTechie admin workflow preview",
        note: "Operational control stays visible through a clearer admin view for approvals, assignments, and marketplace oversight.",
      },
    ],
  },
  {
    slug: "ghealead",
    name: "Ghealead",
    eyebrow: "Therapy booking platform",
    summary:
      "A faith-based therapy booking platform that supports clients, therapists, and admins with structured care workflows.",
    intro:
      "Ghealead combines booking, therapist assignment, documented care sessions, and internal payments inside one product designed to feel responsible and easy to navigate.",
    role:
      "I co-developed the platform experience across the client, therapist, and administrative sides of the product.",
    outcome:
      "A clearer path from intake to assignment, session tracking, and follow-through for users who need trust and care-centered structure.",
    challenge:
      "Sensitive care journeys demand clarity and emotional safety. The system needed to support multiple roles without making any part of the experience feel heavy or confusing.",
    approach:
      "I focused on role-specific dashboards, consistent interaction patterns, and calm visual structure so users could move through each step with confidence.",
    stack: ["React", "TypeScript", "Full-stack Platform Logic", "Payments"],
    tags: ["Healthtech", "Care Workflows", "Role-based Dashboards"],
    highlights: [
      "Therapy booking and pre-assessment intake flow",
      "Therapist assignment and documented session support",
      "Separate dashboard experiences for admins, therapists, and clients",
      "Integrated payment handling inside the product journey",
    ],
    metrics: [
      "Supports multi-role care delivery inside one platform",
      "Keeps sensitive workflows structured and readable",
      "Built to reinforce trust across every user journey",
    ],
    liveUrlEnvKey: "VITE_PROJECT_GHEALEAD_URL",
    gallery: [
      {
        src: ghealeadClientDashboard,
        alt: "Ghealead client dashboard preview",
        note: "Clients get a guided experience that feels steady and easy to understand.",
      },
      {
        src: ghealeadTherapistDashboard,
        alt: "Ghealead therapist dashboard preview",
        note: "Therapist tools keep sessions, notes, and assigned care workflows organized.",
      },
      {
        src: ghealeadAdminAnalytics,
        alt: "Ghealead admin analytics preview",
        note: "Admins can monitor the platform with visibility across operations and user activity.",
      },
    ],
  },
];

export const softwareSeoDescription =
  "Software engineering portfolio for Israel Philips, highlighting AI-powered product delivery, polished frontend systems, and scalable full-stack work.";
