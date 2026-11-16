import iwacumoAdminOverview from "../assets/projects/iwacumo/iwacumo-admin-overview.png";
import iwacumoLibrary from "../assets/projects/iwacumo/iwacumo-library.png";
import iwacumoPlatformLedger from "../assets/projects/iwacumo/iwacumo-platform-ledger.png";
import iwacumoPublisherDashboard from "../assets/projects/iwacumo/iwacumo-publisher-dashboard.png";
import iwacumoPublishersPortal from "../assets/projects/iwacumo/iwacumo-publishers-portal.png";
import iwacumoReaderPortal from "../assets/projects/iwacumo/iwacumo-reader-portal.png";
import iwacumoStorefront from "../assets/projects/iwacumo/iwacumo-storefront.png";
import iwacumoSystemSettings from "../assets/projects/iwacumo/iwacumo-system-settings.png";
import prymagentBillingDashboard from "../assets/projects/prymagent/prymagent-billing-dashboard-june-2026.png";
import prymagentHomepage from "../assets/projects/prymagent/prymagent-homepage-june-2026.png";
import gazelyLanding from "../assets/projects/gazely/gazely-landing.png";
import gazelyWorkflow from "../assets/projects/gazely/gazely-workflow.png";
import gazelyDesktop from "../assets/projects/gazely/gazely-desktop.png";
import recruitOs00 from "../assets/projects/recruitos/recruit00.png";
import recruitOs01 from "../assets/projects/recruitos/recruit01.png";
import recruitOs02 from "../assets/projects/recruitos/recruit02.png";
import recruitOs03 from "../assets/projects/recruitos/recruit03.png";
import recruitOs04 from "../assets/projects/recruitos/recruit04.png";
import prepadiAdmin from "../assets/projects/prepadi/prepadi-admin.png";
import prepadiExamSession from "../assets/projects/prepadi/prepadi-exam-session.png";
import prepadiHomepage from "../assets/projects/prepadi/prepadi-homepage.png";
import prepadiOrgExam from "../assets/projects/prepadi/prepadi-org-exam.png";
import workieClientDashboard from "../assets/projects/workietechie/workie-client-dashboard.png";
import workieProfessionalPortfolio from "../assets/projects/workietechie/workie-prof-portfolio.png";
import workieTechieHomepage from "../assets/projects/workietechie/workietechie-homepage-june-2026.png";
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
    use: "Implementation support",
  },
  {
    name: "Claude Code",
    use: "Review depth",
  },
  {
    name: "AntiGravity",
    use: "Controlled experiments",
  },
];

export const projects: ProjectCaseStudy[] = [
  {
    slug: "prymagent",
    name: "PrymAgent",
    eyebrow: "AI billing workflow",
    summary:
      "An AI-assisted billing workflow for service providers and teams, built around WhatsApp and a lightweight web layer.",
    intro:
      "PrymAgent helps service providers and business teams create quotes, invoices, receipts, track payments, and keep billing records organized from WhatsApp, with a simple web view for broader visibility and workflow control.",
    role:
      "I worked across the product experience that turns natural billing requests into structured business documents, payment records, and cleaner operational workflows.",
    outcome:
      "A faster, cleaner billing experience that reduces admin drag for independent professionals while staying extensible for team workflows.",
    challenge:
      "Billing workflows are repetitive, detail-sensitive, and easy to break inside chat. The product had to stay simple on WhatsApp while still producing professional outputs and reliable records.",
    approach:
      "I focused on a dual-channel product flow: quick task execution through chat for day-to-day actions, plus a clear web layer for billing visibility, client records, and broader workflow management.",
    stack: ["React", "TypeScript", "Django", "WhatsApp Workflows", "Payments"],
    tags: ["Billing Workflows", "WhatsApp AI", "Service Operations"],
    highlights: [
      "Generate quotes, invoices, and receipts from natural requests",
      "Track invoices as paid, unpaid, part-paid, or overdue",
      "Keep cleaner client records, payment history, and earnings summaries",
      "Support both solo service-provider workflows and team billing flows",
    ],
    metrics: [
      "Cuts manual billing admin for service providers and operators",
      "Keeps quotes, invoices, receipts, and payment records more structured",
      "Extends from everyday WhatsApp usage into broader team-ready billing workflows",
    ],
    liveUrlEnvKey: "VITE_PROJECT_PRYMAGENT_URL",
    gallery: [
      {
        src: prymagentHomepage,
        alt: "PrymAgent homepage preview",
        note: "The product introduces AI-assisted billing around WhatsApp-first execution and cleaner service-provider workflows.",
      },
      {
        src: prymagentBillingDashboard,
        alt: "PrymAgent billing dashboard preview",
        note: "The dashboard view gives teams and service providers a clearer way to monitor invoices, clients, credits, and billing records.",
      },
    ],
  },
  {
    slug: "gazely",
    name: "Gazely",
    eyebrow: "AI scripture companion",
    summary:
      "An AI companion that catches spoken Bible references and prepares scripture in the presentation software churches use.",
    intro:
      "Gazely helps church media teams follow the service while it listens for scripture references, finds likely passages, and prepares them for presentation. Teams can use automatic mode or stay hands-on with manual review and control.",
    role:
      "I designed and built the end-to-end experience, from live speech processing and passage retrieval to automatic and operator-controlled presentation workflows.",
    outcome:
      "A live-service workflow that turns spoken references into scripture passages and prepares them for church presentation software, with automatic and manual operating modes.",
    challenge:
      "Media teams must catch scripture references in natural speech, find the right passage and translation, and prepare it while the service continues.",
    approach:
      "The React interface and C# desktop app connect a Python ASR worker to church presentation software, starting with EasyWorship 7. NVIDIA Nemotron, Parakeet Realtime EOU, and Whisper convert service audio into text, with fallback between engines. A semi-RAG pipeline combines scripture-reference parsing with semantic retrieval over a local Bible index to rank likely passages using transcript context. Automatic mode handles eligible matches; manual mode gives the operator direct review and control.",
    stack: [
      "React · C#/.NET · Python",
      "ASR: NVIDIA Nemotron · Parakeet Realtime EOU · Whisper",
      "Semi-RAG scripture retrieval · Church presentation integration",
    ],
    tags: ["Church Technology", "AI-assisted Presentation", "Live Service Workflow"],
    highlights: [
      "Transcribes live service audio with a multi-model ASR pipeline",
      "Combines scripture parsing and semantic retrieval to surface context-aware passage matches",
      "Searches a local Bible index for offline passage retrieval",
      "Supports automatic operation alongside manual review and presentation control",
      "Provides a compact Mini overlay for live monitoring",
    ],
    metrics: [
      "Moves from spoken reference to ranked scripture candidates in one workflow",
      "Reduces manual passage lookup during live services",
      "Supports offline operation with local scripture data and speech runtimes",
    ],
    liveUrlEnvKey: "VITE_PROJECT_GAZELY_URL",
    gallery: [
      {
        src: gazelyLanding,
        alt: "Gazely landing page showing its church presentation companion",
        note: "The landing page introduces Gazely and shows how it prepares scripture during a church presentation.",
      },
      {
        src: gazelyWorkflow,
        alt: "Gazely before and after workflow for finding and presenting scripture",
        note: "The workflow illustrates the shift from manual lookup to reviewed scripture prepared in the presentation.",
      },
      {
        src: gazelyDesktop,
        alt: "Gazely desktop live workspace showing transcript, scripture detections, and selected passage",
        note: "The live workspace brings the transcript, detected passages, and selected scripture together for the operator.",
      },
    ],
  },
  {
    slug: "recruit-os",
    name: "Recruit-OS",
    eyebrow: "AI-assisted recruitment review",
    summary:
      "Turns application forms and CVs into evidence-linked review packets, helping recruiters find relevant experience and prepare follow-up while keeping decisions in human hands.",
    intro:
      "Recruit-OS brings applications and uploaded CVs into one recruiter workflow. It organizes job-related evidence, shows where information comes from, and helps teams review candidates and prepare follow-up without handing hiring decisions to AI.",
    role:
      "I owned the product direction, problem framing, architecture, technology choices, and evaluation criteria. I also set how the system should handle evidence and recruiter oversight, and reviewed AI-assisted implementation work before deciding what to adopt.",
    outcome:
      "A working application connects to Google Forms, retrieves uploaded CVs, and prepares structured candidate reviews. One synthetic full-workflow evaluation passed all 12 cases, with 39 of 39 saved citations grounded in extracted CV text. This reflects that tested workflow, not proven production accuracy.",
    challenge:
      "Recruiters handling many applications move between form responses, CVs, job requirements, and follow-up. Finding relevant evidence and tracking what still needs review can be difficult. Uncertain or missing information also needs to stay visible, and an AI score must not make the hiring decision.",
    approach:
      "I built an intake and review flow around evidence linked to its source. CV findings are checked against extracted text, and a consistent job-fit summary compares documented evidence with role criteria. Recruiters can inspect and correct findings, then review and approve an email before it is sent. Form-response reconciliation is available; reliable event delivery and watch renewal have not yet been verified end to end.",
    stack: ["Next.js", "TypeScript", "Supabase", "Google Forms and Drive", "Google OAuth and Gmail"],
    tags: ["Recruitment Operations", "Applied AI", "Human-in-the-Loop"],
    highlights: [
      "Finds Google Forms, maps application fields, and retrieves uploaded CVs",
      "Shows criterion-level evidence, source excerpts, and gaps for recruiter review",
      "Summarizes required and preferred criteria to support consistent initial review",
      "Prepares editable applicant emails that require recruiter approval before sending",
    ],
    metrics: [
      "Brings form responses and CVs into a structured recruiter review workflow",
      "Makes candidate findings easier to inspect and correct against their sources",
      "Passed 12 of 12 cases in one synthetic full-workflow evaluation, with 39 of 39 saved citations grounded in extracted CV text",
    ],
    liveUrlEnvKey: "VITE_PROJECT_RECRUITOS_URL",
    sourceUrl: "https://github.com/IsraelPhilips/recruit-os",
    gallery: [
      { src: recruitOs00, alt: "Recruit-OS application overview", note: "Recruit-OS brings candidate intake and review into a focused recruiter workspace." },
      { src: recruitOs01, alt: "Recruit-OS candidate review", note: "Candidate information is organized to support a clear, consistent review." },
      { src: recruitOs02, alt: "Recruit-OS evidence review", note: "Recruiters can inspect evidence and its source while reviewing a candidate." },
      { src: recruitOs03, alt: "Recruit-OS application workflow", note: "The workflow helps recruiters move from incoming applications to structured review." },
      { src: recruitOs04, alt: "Recruit-OS recruiter follow-up", note: "Applicant follow-up remains editable and under recruiter approval." },
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
      {
        src: iwacumoLibrary,
        alt: "Iwacumo library preview",
        note: "The reading and discovery experience keeps book browsing structured and easy to navigate.",
      },
      {
        src: iwacumoPlatformLedger,
        alt: "Iwacumo platform ledger preview",
        note: "Platform-wide financial visibility supports internal payment and payout operations.",
      },
      {
        src: iwacumoPublishersPortal,
        alt: "Iwacumo publishers portal preview",
        note: "Publisher operations stay organized around books, authors, and storefront ownership.",
      },
      {
        src: iwacumoReaderPortal,
        alt: "Iwacumo reader portal preview",
        note: "Reader-facing journeys remain clear across discovery, access, and engagement.",
      },
      {
        src: iwacumoSystemSettings,
        alt: "Iwacumo system settings preview",
        note: "System configuration is managed through a controlled administrative layer.",
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
      {
        src: prepadiExamSession,
        alt: "Prepadi exam session preview",
        note: "The CBT experience is built to feel focused, stable, and dependable under timed conditions.",
      },
      {
        src: prepadiOrgExam,
        alt: "Prepadi organization exam preview",
        note: "Institution-facing exam flows keep setup and management readable for teams.",
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
        note: "The client-facing homepage frames the product around vetted matching, trust, and clear request workflows.",
      },
      {
        src: workieTechieAdmin,
        alt: "WorkieTechie admin workflow preview",
        note: "Operational control stays visible through a clearer admin view for approvals, assignments, and marketplace oversight.",
      },
      {
        src: workieClientDashboard,
        alt: "WorkieTechie client dashboard preview",
        note: "Client-side visibility helps projects feel more structured from discovery through delivery.",
      },
      {
        src: workieProfessionalPortfolio,
        alt: "WorkieTechie professional portfolio preview",
        note: "Professional profiles are presented in a way that supports trust, fit, and better matching.",
      },
    ],
  },
];

export const softwareSeoDescription =
  "Software engineering portfolio for Israel Philips, highlighting AI-powered product delivery, polished frontend systems, and scalable full-stack work.";
