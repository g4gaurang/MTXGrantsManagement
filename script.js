"use strict";

const lifecycleStages = [
  {
    id: "stage-plan",
    kicker: "Plan & Fund",
    title: "Set the program and funding foundation.",
    description: "Define how a grant program will operate before an opportunity is published. Connect authority, available funding, program rules, calendars, and internal responsibilities.",
    items: ["Program profile and grant type", "Funding sources and appropriations", "Funding availability and award ranges", "Eligibility and program rules", "Grant calendar and approval paths", "Program, fiscal, and leadership roles"],
    label: "PROGRAM SETUP",
    recordTitle: "Community Resilience Grants",
    status: "Draft",
    rows: [
      ["Funding authority", "State appropriation · FY 2027"],
      ["Available funding", "$24,000,000", "Award model", "Competitive"]
    ],
    allocation: "Infrastructure · Planning · Technical assistance",
    footer: "5 configuration sections complete",
    button: "Continue setup →",
    continuity: ["Program", "Funding", "Rules", "Calendar", "Roles"]
  },
  {
    id: "stage-solicit",
    kicker: "Solicit",
    title: "Publish a clear, governed funding opportunity.",
    description: "Build the opportunity from approved program and funding configuration, then manage publication, guidance, changes, questions, and applicant communications.",
    items: ["Notice of Funding Opportunity", "Application package and instructions", "Eligibility and selection criteria", "Funding ranges and key dates", "Questions and published responses", "Opportunity amendments and notices"],
    label: "FUNDING OPPORTUNITY",
    recordTitle: "CRG-2027 Community Resilience",
    status: "Published",
    rows: [
      ["Opportunity window", "Aug 3 – Oct 16, 2026"],
      ["Available funding", "$18,000,000", "Award range", "$250K – $2M"]
    ],
    allocation: "Draft · Internal review · Published",
    footer: "142 organizations following",
    button: "View opportunity →",
    continuity: ["Authority", "Opportunity", "Guidance", "Questions", "Amendments"]
  },
  {
    id: "stage-apply",
    kicker: "Apply",
    title: "Guide applicants from interest to validated submission.",
    description: "Give organizations a program-specific path to prepare narrative, budget, documents, certifications, and organization details with clear status and submission history.",
    items: ["Organization and contact profile", "Guided application sections", "Collaborative preparation", "Budget and supporting documents", "Certifications and attestations", "Validation, submission, and receipt"],
    label: "APPLICATION",
    recordTitle: "Neighborhood Resilience Center",
    status: "In progress",
    rows: [
      ["Applicant", "Community Renewal Network"],
      ["Completion", "74%", "Due date", "Oct 16, 5:00 PM"]
    ],
    allocation: "Narrative · Budget · Documents",
    footer: "Last saved 8 minutes ago",
    button: "Continue application →",
    continuity: ["Organization", "Eligibility", "Narrative", "Budget", "Submission"]
  },
  {
    id: "stage-evaluate",
    kicker: "Evaluate & Award",
    title: "Move from screening to an authorized award decision.",
    description: "Coordinate eligibility screening, individual and panel review, financial assessment, recommendations, approvals, award notices, and agreement preparation.",
    items: ["Eligibility and completeness screening", "Reviewer pools and assignments", "Conflict disclosure and recusal", "Weighted scoring and comments", "Panel review and clarifications", "Recommendations and award approval"],
    label: "EVALUATION ROUND",
    recordTitle: "Community Resilience · Round 1",
    status: "In review",
    rows: [
      ["Applications", "42 eligible · 3 exceptions"],
      ["Review progress", "67%", "Assignments", "118 of 126 accepted"]
    ],
    allocation: "Individual · Panel · Recommendation",
    footer: "Award authority: Program Director",
    button: "Open evaluation →",
    continuity: ["Screen", "Assign", "Score", "Recommend", "Authorize"]
  },
  {
    id: "stage-manage",
    kicker: "Manage & Pay",
    title: "Administer the active award and its financial activity.",
    description: "Connect agreement terms, budgets, amendments, deliverables, requests, program review, fiscal approval, ERP exchange, and payment status.",
    items: ["Award activation and grant agreement", "Budget categories and revisions", "Advances and reimbursements", "Program and fiscal approvals", "ERP or payment-system exchange", "Adjustments, recoveries, and balances"],
    label: "ACTIVE AWARD",
    recordTitle: "GG-27-0142 · Community Health",
    status: "Active",
    rows: [
      ["Award period", "Jan 1 – Dec 31, 2027"],
      ["Award amount", "$1,250,000", "Remaining", "$716,320"]
    ],
    allocation: "Awarded · Paid · Remaining",
    footer: "3 payment requests processed",
    button: "View award →",
    continuity: ["Agreement", "Budget", "Request", "Approve", "Reconcile"]
  },
  {
    id: "stage-monitor",
    kicker: "Monitor",
    title: "Relate risk, compliance, spending, and results.",
    description: "Plan and record oversight based on program and funding-source requirements, then follow findings and corrective actions through resolution.",
    items: ["Programmatic and financial reports", "Performance measures and evidence", "Risk assessment and monitoring plan", "Desk reviews and site visits", "Findings and corrective actions", "Special conditions and follow-up"],
    label: "MONITORING PLAN",
    recordTitle: "GG-27-0142 · FY 2027 Oversight",
    status: "Current",
    rows: [
      ["Risk level", "Moderate · reviewed Jul 30"],
      ["Next activity", "Desk review", "Due", "Sep 30, 2027"]
    ],
    allocation: "Reports · Review · Follow-up",
    footer: "2 open follow-up items",
    button: "Open monitoring →",
    continuity: ["Assess", "Plan", "Review", "Correct", "Resolve"]
  },
  {
    id: "stage-close",
    kicker: "Close Out",
    title: "Complete program and fiscal responsibilities.",
    description: "Coordinate final performance, deliverables, financial reconciliation, remaining obligations, review, record retention, and the authorized closeout action.",
    items: ["Final programmatic report", "Final financial report", "Deliverable completion", "Outstanding obligations and balances", "Program and fiscal review", "Closeout decision and retention"],
    label: "CLOSEOUT",
    recordTitle: "GG-25-0089 · Regional Mobility",
    status: "In progress",
    rows: [
      ["Award end date", "Jun 30, 2026"],
      ["Final paid", "$2,418,300", "Unobligated", "$81,700"]
    ],
    allocation: "Program · Fiscal · Records",
    footer: "6 of 8 closeout checks complete",
    button: "Continue closeout →",
    continuity: ["Final report", "Reconcile", "Review", "Close", "Retain"]
  }
];

const personaContent = {
  manager: {
    label: "GRANT MANAGER WORKSPACE",
    title: "Portfolio overview",
    button: "＋ New funding opportunity",
    profile: "Grant manager",
    metrics: [["Open opportunities", "6", "2 closing this month"], ["Applications received", "186", "23 require screening"], ["Active award value", "$184.2M", "247 active awards"], ["Items needing attention", "18", "Across 6 work queues"]],
    queueTitle: "My action queue",
    queues: [["Eligibility exceptions", "Community Resilience · Due today", "4"], ["Reviewer assignments", "Workforce Pathways · Due Aug 22", "8"], ["Award recommendations", "Rural Health Access · Due Aug 24", "3"], ["Corrective actions overdue", "Across 3 active grants", "3"]]
  },
  grantee: {
    label: "GRANTEE WORKSPACE",
    title: "My grants and applications",
    button: "＋ Find opportunities",
    profile: "Grantee administrator",
    metrics: [["Applications in progress", "2", "Next due Oct 16"], ["Active grants", "4", "$3.8M total award value"], ["Reports due", "3", "Next due Sep 15"], ["Requests in review", "2", "$184K submitted"]],
    queueTitle: "My upcoming work",
    queues: [["Quarterly performance report", "Community Health · Due Sep 15", "1"], ["Reimbursement request", "Documents ready for submission", "1"], ["Agreement amendment", "Awaiting organization acknowledgement", "1"], ["Corrective action update", "Evidence requested · Due Sep 28", "1"]]
  },
  reviewer: {
    label: "REVIEWER WORKSPACE",
    title: "My evaluations",
    button: "View reviewer guidance",
    profile: "Application reviewer",
    metrics: [["Assigned applications", "14", "Across 2 panels"], ["Reviews complete", "9", "64% complete"], ["Due this week", "5", "Next due Aug 24"], ["Clarifications", "2", "Agency response available"]],
    queueTitle: "Assigned reviews",
    queues: [["Application CR-2027-031", "Independent score · Due today", "1"], ["Application CR-2027-044", "Conflict disclosure required", "1"], ["Application WP-2027-018", "Score 6 criteria · Due Aug 23", "1"], ["Panel preparation", "Consensus meeting · Aug 26", "1"]]
  },
  fiscal: {
    label: "FISCAL & MONITORING WORKSPACE",
    title: "Financial and oversight queues",
    button: "Open monitoring calendar",
    profile: "Fiscal and compliance",
    metrics: [["Payment requests", "19", "$2.8M awaiting review"], ["Budget revisions", "7", "3 need program input"], ["High-risk awards", "13", "5 visits scheduled"], ["Open findings", "21", "8 corrective actions due"]],
    queueTitle: "Control review queue",
    queues: [["Reimbursement PR-2027-00418", "$128,450 · Fiscal review", "1"], ["Budget revision BR-2027-0082", "Category transfer · Due today", "1"], ["Desk review follow-up", "Supporting records received", "3"], ["Corrective actions overdue", "Across 3 active awards", "3"]]
  },
  leader: {
    label: "EXECUTIVE PORTFOLIO",
    title: "Funding and outcomes",
    button: "Export briefing",
    profile: "Agency leadership",
    metrics: [["Funding awarded", "$184.2M", "85% of available"], ["Funding paid", "$96.8M", "52.6% of awarded"], ["On-track awards", "82%", "203 of 247 active"], ["Closeouts pending", "12", "$8.4M final review"]],
    queueTitle: "Portfolio signals",
    queues: [["Awards needing attention", "Risk or performance signal", "31"], ["Programs below award plan", "Quarter-to-date variance", "2"], ["Late grantee reports", "Across 5 programs", "14"], ["Open monitoring findings", "8 high-priority items", "21"]]
  }
};

const ecosystemContent = {
  agency: ["Grantor agency", "Program, fiscal, review, monitoring, technology, and leadership teams use role-based workspaces while retaining agency authority."],
  grantees: ["Applicants & grantees", "Organizations find opportunities, prepare applications, accept awards, request payments, report performance, respond to oversight, and complete closeout work."],
  financial: ["ERP & financial management", "Exchange funding, obligation, authorized payment, accounting, and payment-status data while retaining grant workflow and participant context."],
  federal: ["Federal grants services", "Connect to Grants.gov, SAM.gov, or reporting services where applicable to the agency, funding source, and program design."],
  identity: ["Identity & organization services", "Use agency identity, single sign-on, multifactor authentication, organization master, or vendor records according to the selected architecture."],
  documents: ["Documents & electronic signature", "Store or reference supporting records, generate award packages, and connect signature services where authorized."],
  analytics: ["Data warehouse, GIS & analytics", "Publish governed grant, financial, geography, performance, and oversight data to agency reporting platforms."],
  communications: ["Communications & service channels", "Exchange email or text notifications and provide grant context to approved contact-center or relationship-management tools."]
};

const portalPhases = {
  applicant: {
    title: "Find, qualify, prepare, and submit.",
    items: ["Opportunity search and eligibility guidance", "Organization profile and authorized contacts", "Guided narrative, budget, and document entry", "Collaborative preparation with save and resume", "Certifications, validation, submission, and receipt", "Application status and agency communications"]
  },
  grantee: {
    title: "Activate, manage, report, and close.",
    items: ["Award notice, agreement, terms, and conditions", "Grant budget, balance, and amendment requests", "Advance or reimbursement requests and status", "Performance, financial, and deliverable reports", "Monitoring, findings, and corrective-action response", "Final reports, reconciliation, and closeout tasks"]
  }
};

function escapeText(value) {
  const node = document.createElement("span");
  node.textContent = value;
  return node.innerHTML;
}

function setupTabs(selector, onSelect) {
  const tabs = [...document.querySelectorAll(selector)];
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activate(tab));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;
      tabs[nextIndex].focus();
      activate(tabs[nextIndex]);
    });
  });

  function activate(selected) {
    tabs.forEach((tab) => {
      const active = tab === selected;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    onSelect(selected);
  }
}

function renderLifecycle(index) {
  const stage = lifecycleStages[index];
  const panel = document.querySelector("#stage-panel");
  panel.setAttribute("aria-labelledby", stage.id);
  panel.querySelector(".stage-kicker").textContent = stage.kicker;
  panel.querySelector(".stage-copy h3").textContent = stage.title;
  panel.querySelector(".stage-copy > p:not(.stage-kicker)").textContent = stage.description;
  panel.querySelector(".check-list").innerHTML = stage.items.map((item) => `<li>${escapeText(item)}</li>`).join("");
  panel.querySelector(".record-head small").textContent = stage.label;
  panel.querySelector(".record-head strong").textContent = stage.recordTitle;
  panel.querySelector(".draft-pill").textContent = stage.status;

  const rows = panel.querySelectorAll(".record-row, .record-columns");
  rows[0].innerHTML = `<span>${escapeText(stage.rows[0][0])}</span><strong>${escapeText(stage.rows[0][1])}</strong>`;
  rows[1].innerHTML = `<div><span>${escapeText(stage.rows[1][0])}</span><strong>${escapeText(stage.rows[1][1])}</strong></div><div><span>${escapeText(stage.rows[1][2])}</span><strong>${escapeText(stage.rows[1][3])}</strong></div>`;
  rows[2].querySelector("small").textContent = stage.allocation;
  panel.querySelector(".record-footer span").textContent = stage.footer;
  panel.querySelector(".record-footer button").textContent = stage.button;
  panel.querySelector(".continuity-row").innerHTML = `<span>Data carried forward</span>${stage.continuity.map((item, itemIndex) => `${itemIndex ? "<i>→</i>" : ""}<div>${escapeText(item)}</div>`).join("")}`;
}

function renderPersona(key) {
  const content = personaContent[key];
  const panel = document.querySelector("#persona-panel");
  const selected = document.querySelector(`.persona-tabs [data-persona="${key}"]`);
  panel.setAttribute("aria-labelledby", selected.id);
  panel.querySelector(".ws-heading small").textContent = content.label;
  panel.querySelector(".ws-heading h3").textContent = content.title;
  panel.querySelector(".ws-heading button").textContent = content.button;
  panel.querySelector(".ws-profile small").textContent = content.profile;
  panel.querySelector(".ws-card-head strong").textContent = content.queueTitle;

  panel.querySelectorAll(".ws-metrics > div").forEach((metric, index) => {
    const values = content.metrics[index];
    metric.querySelector("small").textContent = values[0];
    metric.querySelector("strong").textContent = values[1];
    metric.querySelector("em").textContent = values[2];
  });
  panel.querySelectorAll(".action-row").forEach((row, index) => {
    const values = content.queues[index];
    row.querySelector("strong").textContent = values[0];
    row.querySelector("small").textContent = values[1];
    row.querySelector("b").textContent = values[2];
  });
}

function renderPortalPhase(key) {
  const content = portalPhases[key];
  const panel = document.querySelector("#portal-panel");
  const selected = document.querySelector(`.phase-switch [data-phase="${key}"]`);
  panel.setAttribute("aria-labelledby", selected.id);
  panel.querySelector("h3").textContent = content.title;
  panel.querySelector("ul").innerHTML = content.items.map((item) => `<li>${escapeText(item)}</li>`).join("");
}

function initialize() {
  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");

  const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 20);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    header.classList.toggle("menu-open", !open);
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    header.classList.remove("menu-open");
  }));

  setupTabs(".lifecycle-tabs [role='tab']", (tab) => renderLifecycle(Number(tab.dataset.stage)));
  setupTabs(".persona-tabs [role='tab']", (tab) => renderPersona(tab.dataset.persona));
  setupTabs(".phase-switch [role='tab']", (tab) => renderPortalPhase(tab.dataset.phase));

  const filters = [...document.querySelectorAll(".capability-filters button")];
  const cards = [...document.querySelectorAll(".capability-card")];
  filters.forEach((filter) => filter.addEventListener("click", () => {
    filters.forEach((button) => {
      const active = button === filter;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    cards.forEach((card) => {
      card.hidden = filter.dataset.filter !== "all" && card.dataset.category !== filter.dataset.filter;
    });
  }));

  document.querySelectorAll(".capability-card .text-button").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".capability-card");
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      button.querySelector("span").textContent = expanded ? "+" : "−";
      card.classList.toggle("expanded", !expanded);
    });
  });

  document.querySelectorAll("[data-eco]").forEach((button) => {
    button.addEventListener("click", () => {
      const content = ecosystemContent[button.dataset.eco];
      document.querySelectorAll(".system-node").forEach((node) => node.classList.toggle("active", node === button));
      const detail = document.querySelector(".eco-detail");
      detail.querySelector("strong").textContent = content[0];
      detail.querySelector("p").textContent = content[1];
    });
  });

  document.querySelectorAll(".workspace-sidebar nav button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".workspace-sidebar nav button").forEach((item) => item.classList.toggle("active", item === button));
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

  document.querySelector("[data-year]").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", initialize);
