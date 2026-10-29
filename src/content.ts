// Single source of truth for all candidate content. Verified resume details only.

export const profile = {
  name: "Abdullah A S M",
  location: "Bangalore, India",
  email: "abdullahasm27@gmail.com",
  phone: "+91 9442563873",
  phoneHref: "+919442563873",
  /** Leave empty to keep the LinkedIn link hidden. */
  linkedinUrl: "",
  /** Drop the real PDF into /public with this exact name to enable download CTAs. */
  resumePath: "/Abdullah_ASM_Resume.pdf",
  resumeFileName: "Abdullah_ASM_Resume.pdf",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "expertise", label: "Expertise" },
  { id: "case-studies", label: "Case Studies" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const highlights = [
  { value: "02+", label: "Years of Experience", note: "Telecom voice operations" },
  { value: "15+", label: "Advisors Led", note: "Across four support queues" },
  { value: "02", label: "Leadership Awards", note: "Month and Quarter" },
  { value: "MCA", label: "Postgraduate Qualification", note: "Anna University, 2024" },
];

export const queues = [
  { id: "L1", name: "L1", text: "The first line of contact. Understand the issue, resolve what can be resolved, record it accurately in the CRM, and escalate what needs deeper attention." },
  { id: "L2", name: "L2", text: "The next level of the queue structure, where more complex cases arrive after first-line handling and need further review and ownership." },
  { id: "RET", name: "Retention", text: "A queue centred on customer retention: listening to why a customer is considering leaving and handling the conversation with care." },
  { id: "SRD", name: "SRD", text: "The fourth queue in the team structure, led alongside L1, L2 and Retention. The acronym is kept exactly as used in the operation." },
];

export const roles = [
  {
    title: "Team Leader – Customer Support (Voice Operations)",
    company: "Altruist Technologies Pvt. Ltd.",
    period: "May 2025 – July 2026",
    tags: ["L1", "L2", "RETENTION", "SRD"],
    points: [
      "Led 15+ advisors across support queues.",
      "Monitored SLA, CSAT, NPS, quality, and productivity.",
      "Managed high-priority escalations from senior leadership channels, social media, and email.",
      "Conducted coaching and performance reviews.",
      "Used Excel to review performance and identify gaps.",
      "Coordinated cross-functional follow-up and issue resolution.",
    ],
  },
  {
    title: "Level 1 Advisor – Customer Support (Voice Process)",
    company: "Altruist Technologies Pvt. Ltd.",
    period: "May 2024 – May 2025",
    tags: [],
    points: [
      "Inbound Airtel customer support.",
      "First-level complaint resolution.",
      "Escalation of complex cases.",
      "CRM documentation.",
      "Individual service, quality, and productivity targets.",
    ],
  },
];

export const modules = [
  { id: "people", n: "01", name: "People", blurb: "Building a team that can carry the queue.", skills: ["Team leadership", "Coaching and mentoring", "Performance reviews", "Employee engagement"] },
  { id: "service", n: "02", name: "Service", blurb: "Keeping the operation steady and measurable.", skills: ["SLA management", "Quality monitoring", "Productivity management", "Workforce coordination"] },
  { id: "customer", n: "03", name: "Customer", blurb: "Staying with the issue until it is resolved.", skills: ["Escalation management", "Complaint resolution", "Customer experience", "Customer retention"] },
  { id: "insight", n: "04", name: "Insight", blurb: "Turning numbers into the next action.", skills: ["CSAT", "NPS", "Excel reporting", "Root cause analysis", "Performance gap analysis"] },
];

export const directionModules = [
  { id: "A", name: "Investigate", points: ["Clarify the reported issue.", "Understand expected versus actual behavior.", "Gather relevant context.", "Identify the appropriate next action."] },
  { id: "B", name: "Document", points: ["Record the facts.", "Maintain accurate notes.", "Organize information.", "Support clear handovers."] },
  { id: "C", name: "Follow Through", points: ["Coordinate with relevant teams.", "Track pending issues.", "Communicate updates.", "Confirm closure where appropriate."] },
];

export const interests = ["Product Support", "Technical Support", "Application Support", "Support Analyst", "Service Desk"];

export const resolutionSteps = [
  { name: "Listen", text: "Hear the whole story before reaching for an answer." },
  { name: "Investigate", text: "Establish the facts, history and context." },
  { name: "Coordinate", text: "Bring in the right people with the right information." },
  { name: "Resolve", text: "Agree the next action and carry it through." },
  { name: "Follow Up", text: "Communicate progress and confirm closure." },
];

export const caseStudies = [
  {
    n: "01",
    kind: "hub" as const,
    title: "High-Priority Escalation Coordination",
    scenario: "A customer issue requires attention from several stakeholders and needs clear communication.",
    steps: ["Understand the complaint and history.", "Review available CRM records.", "Identify the responsible team.", "Coordinate the next action.", "Follow up and communicate progress."],
    skills: ["Escalation Management", "CRM Documentation", "Communication", "Ownership"],
    outcome: "Intended operational benefit: one accountable owner, a clear record in the CRM, and a customer who knows what happens next.",
  },
  {
    n: "02",
    kind: "bars" as const,
    title: "Operational Performance Visibility",
    scenario: "A team leader needs a structured view of performance across multiple queues.",
    steps: ["Organize available KPI data.", "Review SLA, CSAT, NPS, quality, and productivity.", "Identify gaps or recurring patterns.", "Prioritize coaching and follow-up.", "Review subsequent performance."],
    skills: ["Excel", "KPI Monitoring", "Root Cause Analysis", "Coaching"],
    outcome: "Intended operational benefit: gaps and patterns become visible early, so coaching time goes where it matters most.",
  },
  {
    n: "03",
    kind: "flow" as const,
    title: "A Structured Product Support Investigation",
    scenario: "A hypothetical software customer reports a problem and needs a clear response.",
    steps: ["Clarify the expected and actual behavior.", "Collect reproduction steps and relevant context.", "Document the issue.", "Review available documentation.", "Escalate with useful evidence when necessary.", "Provide a clear customer update."],
    skills: ["Structured Investigation", "Documentation", "Communication", "Follow-through"],
    outcome: "Intended operational benefit: the receiving team gets a reproducible, well-documented issue, and the customer gets a clear update.",
  },
];

export const skillGroups = [
  { name: "Leadership", icon: "users", note: "Guiding people and performance.", items: ["Team Management", "Coaching and Mentoring", "Performance Management", "Performance Reviews", "Employee Engagement"] },
  { name: "Customer Experience", icon: "headset", note: "Staying with the customer.", items: ["Customer Service", "Customer Experience", "Escalation Management", "Complaint Resolution", "Customer Retention", "Voice Process Operations"] },
  { name: "Operations", icon: "gauge", note: "Keeping the queue steady.", items: ["SLA Management", "KPI Monitoring", "Workforce Coordination", "Productivity Management", "Quality Assurance", "Operational Reporting"] },
  { name: "Analytics", icon: "chart", note: "Finding the next action in the data.", items: ["CSAT", "NPS", "Root Cause Analysis", "Performance Gap Analysis", "Continuous Improvement", "Microsoft Excel"] },
  { name: "Tools", icon: "wrench", note: "Systems used day to day.", items: ["Airtel CRM", "Cisco", "Avaya", "Microsoft Office"] },
];

export const awards = [
  { kind: "quarter" as const, title: "Best Team Leader of the Quarter", text: "Recognition for team leadership across a full quarter." },
  { kind: "month" as const, title: "Best Team Leader of the Month", text: "Recognition for team leadership within a single month." },
];

export const education = [
  { degree: "Master of Computer Applications (MCA)", school: "Kongu Engineering College, Erode", university: "Anna University", year: "2024" },
  { degree: "BSc in Computer Technology", school: "Erode Arts and Science College", university: "Bharathiar University", year: "2021" },
];

export const certification = "Microsoft Excel";
