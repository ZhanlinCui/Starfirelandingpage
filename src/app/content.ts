import type { Locale } from "./i18n";

// ── Site Links (real, verifiable URLs) ──────────────────────
export const siteLinks = {
  github: "https://github.com/Starfire-AI/agent-team",
  architecture:
    "https://github.com/Starfire-AI/agent-team/tree/main/docs/architecture",
  readme: "https://github.com/Starfire-AI/agent-team#readme",
  docs: "https://github.com/Starfire-AI/agent-team/tree/main/docs",
} as const;

// ── Fonts ───────────────────────────────────────────────────
export const fonts = {
  display: "'Space Grotesk', system-ui, sans-serif",
  body: "'Manrope', system-ui, sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const;

// ── Section IDs (single source for nav + anchors) ──────────
export const sectionIds = {
  whyNow: "why-now",
  useCases: "use-cases",
  memory: "memory",
  platform: "platform",
} as const;

// ═══════════════════════════════════════════════════════════
//  HEADER
// ═══════════════════════════════════════════════════════════
export type HeaderContent = {
  nav: Array<{ label: string; href: string }>;
  github: string;
  cta: string;
  language: { en: string; zh: string };
};

export const headerContent: Record<Locale, HeaderContent> = {
  en: {
    nav: [
      { label: "Why Now", href: `#${sectionIds.whyNow}` },
      { label: "Use Cases", href: `#${sectionIds.useCases}` },
      { label: "Memory", href: `#${sectionIds.memory}` },
      { label: "Platform", href: `#${sectionIds.platform}` },
    ],
    github: "GitHub",
    cta: "View on GitHub",
    language: { en: "EN", zh: "中文" },
  },
  zh: {
    nav: [
      { label: "为什么是现在", href: `#${sectionIds.whyNow}` },
      { label: "应用场景", href: `#${sectionIds.useCases}` },
      { label: "记忆架构", href: `#${sectionIds.memory}` },
      { label: "平台能力", href: `#${sectionIds.platform}` },
    ],
    github: "GitHub",
    cta: "查看 GitHub",
    language: { en: "EN", zh: "中文" },
  },
};

// ═══════════════════════════════════════════════════════════
//  HERO
// ═══════════════════════════════════════════════════════════
export type HeroContent = {
  badge: string;
  titleLine1: string;
  titleHighlight: string;
  primaryCta: string;
  secondaryCta: string;
  description: string;
};

export const heroContent: Record<Locale, HeroContent> = {
  en: {
    badge: "Open source · shipping on main",
    titleLine1: "The org-native control plane",
    titleHighlight: "for heterogeneous AI agent teams.",
    primaryCta: "Explore Architecture",
    secondaryCta: "View on GitHub",
    description:
      "A workspace is a role. The org chart is the topology. Six runtime adapters run side-by-side. Memory follows hierarchy. Starfire is how you govern AI teams in production.",
  },
  zh: {
    badge: "开源项目 · 持续交付中",
    titleLine1: "面向异构 AI Agent 团队的",
    titleHighlight: "组织原生控制平面。",
    primaryCta: "探索架构",
    secondaryCta: "查看 GitHub",
    description:
      "工作空间即角色，组织图即拓扑。六种运行时适配器并行运行，记忆沿层级流动。Starfire 让你在生产环境中治理 AI 团队。",
  },
};

// ═══════════════════════════════════════════════════════════
//  HERO VISUAL
// ═══════════════════════════════════════════════════════════
export type HeroVisualContent = {
  topologyTitle: string;
  tenant: string;
  live: string;
  rootTitle: string;
  rootMeta: string;
  badges: { trace: string; rbac: string; agents: string };
  engineering: {
    label: string;
    role: string;
    adapter: string;
    count: string;
    escalation: string;
    subAgents: Array<{
      label: string;
      model: string;
      runtime: string;
      status: "active" | "idle" | "escalated";
    }>;
  };
  research: {
    label: string;
    role: string;
    adapter: string;
    overlay: string;
  };
  operations: {
    label: string;
    role: string;
    adapter: string;
    overlay: string;
  };
  telemetry: Array<{ label: string; value: string; dot: string }>;
};

export const heroVisualContent: Record<Locale, HeroVisualContent> = {
  en: {
    topologyTitle: "Control Plane / Production",
    tenant: "starfire-org",
    live: "LIVE",
    rootTitle: "Organization Root",
    rootMeta: "root-workspace · claude-sonnet-4-6 orchestrator",
    badges: {
      trace: "langfuse",
      rbac: "HMA",
      agents: "12 workspaces",
    },
    engineering: {
      label: "Engineering",
      role: "team-workspace",
      adapter: "langgraph",
      count: "4",
      escalation: "Escalation → Team Lead: deploy approval pending",
      subAgents: [
        {
          label: "Frontend Agent",
          model: "claude-sonnet-4-6",
          runtime: "claude-code",
          status: "active",
        },
        {
          label: "Backend Agent",
          model: "claude-sonnet-4-6",
          runtime: "langgraph",
          status: "active",
        },
        {
          label: "Infra Agent",
          model: "gpt-4o",
          runtime: "openclaw",
          status: "idle",
        },
        {
          label: "QA Agent",
          model: "gpt-4o-mini",
          runtime: "crewai",
          status: "escalated",
        },
      ],
    },
    research: {
      label: "Research",
      role: "team-workspace",
      adapter: "deepagents",
      overlay: "memory: LOCAL scope",
    },
    operations: {
      label: "Operations",
      role: "team-workspace",
      adapter: "autogen",
      overlay: "tier: T2 standard",
    },
    telemetry: [
      { label: "comms", value: "A2A hierarchy-routed", dot: "bg-sky-400/40" },
      { label: "memory", value: "HMA 3-scope", dot: "bg-violet-400/40" },
      { label: "trace", value: "langfuse + otel", dot: "bg-emerald-400/40" },
      {
        label: "runtime",
        value: "6 adapters · T1–T4",
        dot: "bg-amber-400/40",
      },
    ],
  },
  zh: {
    topologyTitle: "控制平面 / 生产环境",
    tenant: "starfire-org",
    live: "在线",
    rootTitle: "组织根节点",
    rootMeta: "root-workspace · claude-sonnet-4-6 协调器",
    badges: {
      trace: "langfuse",
      rbac: "HMA",
      agents: "12 个工作空间",
    },
    engineering: {
      label: "工程团队",
      role: "团队工作空间",
      adapter: "langgraph",
      count: "4",
      escalation: "升级事件 → 团队负责人：发布审批待处理",
      subAgents: [
        {
          label: "前端 Agent",
          model: "claude-sonnet-4-6",
          runtime: "claude-code",
          status: "active",
        },
        {
          label: "后端 Agent",
          model: "claude-sonnet-4-6",
          runtime: "langgraph",
          status: "active",
        },
        {
          label: "基础设施 Agent",
          model: "gpt-4o",
          runtime: "openclaw",
          status: "idle",
        },
        {
          label: "测试 Agent",
          model: "gpt-4o-mini",
          runtime: "crewai",
          status: "escalated",
        },
      ],
    },
    research: {
      label: "研究团队",
      role: "团队工作空间",
      adapter: "deepagents",
      overlay: "记忆: LOCAL 作用域",
    },
    operations: {
      label: "运营团队",
      role: "团队工作空间",
      adapter: "autogen",
      overlay: "层级: T2 标准",
    },
    telemetry: [
      {
        label: "通信",
        value: "A2A 按层级路由",
        dot: "bg-sky-400/40",
      },
      {
        label: "记忆",
        value: "HMA 三层作用域",
        dot: "bg-violet-400/40",
      },
      {
        label: "追踪",
        value: "langfuse + otel",
        dot: "bg-emerald-400/40",
      },
      {
        label: "运行时",
        value: "6 适配器 · T1–T4",
        dot: "bg-amber-400/40",
      },
    ],
  },
};

// ═══════════════════════════════════════════════════════════
//  MARKET MOMENTUM  →  "Why Now"
// ═══════════════════════════════════════════════════════════
export type MarketMomentumContent = {
  eyebrow: string;
  title: string;
  signals: Array<{ title: string; detail: string }>;
};

export const marketMomentumContent: Record<Locale, MarketMomentumContent> = {
  en: {
    eyebrow: "Why Now",
    title: "The Coordination Gap Is the New Bottleneck",
    signals: [
      {
        title: "Single-Agent Demos Hit a Ceiling",
        detail:
          "One agent can answer questions. It cannot run a release pipeline, staff a research pod, or escalate across organizational boundaries. Coordination — not intelligence — is the constraint.",
      },
      {
        title: "Governance Became a Launch Prerequisite",
        detail:
          "Enterprises won't ship agent workloads without scoped authority, audit trails, and human-in-the-loop approval gates. Governance is no longer a phase-two concern.",
      },
      {
        title: "Memory Boundaries Define Platform Value",
        detail:
          "Flat shared context leaks information and breaks at scale. Topology-scoped memory — LOCAL, TEAM, GLOBAL — is becoming the baseline expectation for production agent platforms.",
      },
      {
        title: "Heterogeneous Runtimes Are the Norm",
        detail:
          "Teams pick LangGraph for orchestration, Claude Code for engineering, CrewAI for crews. No single framework wins everywhere. The control plane must be runtime-agnostic.",
      },
    ],
  },
  zh: {
    eyebrow: "为什么是现在",
    title: "协调瓶颈正在取代智能瓶颈",
    signals: [
      {
        title: "单 Agent 演示已触及天花板",
        detail:
          "一个 Agent 能回答问题，但无法运行发布流水线、组建研究小组或跨组织边界升级。协调能力——而非智能——才是真正的瓶颈。",
      },
      {
        title: "治理已成为上线前置条件",
        detail:
          "企业不会在没有权限作用域、审计链路和人工审批门禁的情况下发布 Agent 工作负载。治理不再是「第二阶段」的事。",
      },
      {
        title: "记忆边界决定平台价值",
        detail:
          "扁平共享上下文会泄漏信息并在规模化时失效。拓扑作用域记忆——LOCAL、TEAM、GLOBAL——正在成为生产级 Agent 平台的基线要求。",
      },
      {
        title: "异构运行时已成常态",
        detail:
          "团队用 LangGraph 做编排、Claude Code 做工程、CrewAI 做协作。没有一个框架能通吃所有场景。控制平面必须与运行时无关。",
      },
    ],
  },
};

// ═══════════════════════════════════════════════════════════
//  USE CASES
// ═══════════════════════════════════════════════════════════
export type Scenario = {
  key: string;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  capabilities: string[];
};

export type UseCasesContent = {
  eyebrow: string;
  title: string;
  rotatingTexts: string[];
  description: string;
  scenarios: Scenario[];
};

// Code panels: technical config displays (same for both locales)
export const scenarioCodePanels: Record<string, string> = {
  research: `# workspace: research-coordinator
runtime:  deepagents
model:    claude-sonnet-4-6
memory:   TEAM scope

children:
  analyst-1:  LOCAL │ deepagents
  analyst-2:  LOCAL │ deepagents
  analyst-3:  LOCAL │ langgraph

delegation:
  retry_attempts: 3
  escalate: true`,

  engineering: `# workspace: engineering-lead
runtime: langgraph
tier:    3 (privileged)

children:
  frontend:  claude-code │ T2 │ sonnet-4-6
  backend:   langgraph   │ T2 │ sonnet-4-6
  infra:     openclaw    │ T3 │ gpt-4o
  qa:        crewai      │ T1 │ gpt-4o-mini

hitl:
  channels: [dashboard]
  default_timeout: 300`,

  automation: `# workspace: ops-scheduler
runtime: autogen
tier:    2 (standard)

rbac:
  roles: [operator, admin]

compliance:
  mode: owasp_agentic
  prompt_injection: detect
  max_tool_calls: 50

governance:
  policy_mode: strict
  audit: jsonl`,

  executive: `┌─ Canvas / Operations Panel ──────────┐
│ Chat  Activity  Details  Skills     │
│ Terminal  Config  Files  Memory     │
│ Traces  Events                      │
├──────────────────────────────────────┤
│ [engineering]  ● active   4 agents  │
│ [research]     ● active   3 agents  │
│ [operations]   ◐ idle     2 agents  │
├──────────────────────────────────────┤
│ health: 15s sweep │ heartbeat: 60s  │
│ traces: langfuse + opentelemetry    │
└──────────────────────────────────────┘`,
};

export const useCasesContent: Record<Locale, UseCasesContent> = {
  en: {
    eyebrow: "What You Can Build",
    title: "AI agent teams for",
    rotatingTexts: [
      "Research Organizations",
      "Engineering Delivery",
      "Operations Automation",
      "Executive Control",
    ],
    description:
      "Each scenario maps to capabilities shipping on main today. No mockups — these are real organizational patterns you can deploy with Starfire now.",
    scenarios: [
      {
        key: "research",
        tag: "Research Orgs",
        title: "Parallel research streams with memory isolation",
        description:
          "Split exploration into sibling research workspaces. Each operates with LOCAL memory scope, preventing cross-contamination. The parent coordinator synthesizes findings through TEAM-scoped memory channels.",
        bullets: [
          "Sibling workspace isolation via HMA LOCAL scope",
          "Parent-only synthesis through TEAM memory",
          "Per-workspace Langfuse trace chains",
          "DeepAgents adapter for plan-first reasoning",
        ],
        capabilities: ["HMA", "DeepAgents", "Langfuse", "A2A"],
      },
      {
        key: "engineering",
        tag: "Engineering",
        title: "Multi-runtime engineering teams that self-coordinate",
        description:
          "Frontend in Claude Code, backend in LangGraph, infra in OpenClaw — all under one team workspace. The coordinator routes tasks through A2A, enforces approval gates, and escalates by hierarchy.",
        bullets: [
          "Claude Code, LangGraph, OpenClaw side-by-side",
          "Coordinator enforces delegation-only routing",
          "HITL approval for deploy and merge actions",
          "Recursive team expansion without breaking upstream",
        ],
        capabilities: ["6 adapters", "A2A", "HITL", "team expansion"],
      },
      {
        key: "automation",
        tag: "Ops Automation",
        title: "Governance-first operational workflows",
        description:
          "Turn recurring operations into managed agent duties. Each workspace runs within RBAC-scoped authority, with approval routing by hierarchy and audit-ready event records streamed via WebSocket.",
        bullets: [
          "RBAC roles: operator, admin, read-only",
          "Approval routing follows org topology",
          "Audit log in JSON Lines format",
          "Global secrets with per-workspace override",
        ],
        capabilities: ["RBAC", "approvals", "audit", "secrets"],
      },
      {
        key: "executive",
        tag: "Executive View",
        title: "Live organizational control from one Canvas",
        description:
          "Monitor every team's health, task state, and escalation path from the Canvas UI. The 10-tab operations panel gives direct access to chat, terminal, config, memory, traces, and files for any workspace.",
        bullets: [
          "WebSocket-first real-time topology updates",
          "10-tab ops panel per workspace",
          "Cross-team observability with health sweep",
          "Pause / resume / restart lifecycle controls",
        ],
        capabilities: ["Canvas", "WebSocket", "health sweep", "lifecycle"],
      },
    ],
  },
  zh: {
    eyebrow: "可落地场景",
    title: "AI Agent 团队可用于",
    rotatingTexts: [
      "研究型组织",
      "工程交付团队",
      "运营自动化",
      "管理层控制台",
    ],
    description:
      "每个场景都映射到当前 main 分支已发布的能力。没有效果图——这些是你现在就能用 Starfire 部署的真实组织模式。",
    scenarios: [
      {
        key: "research",
        tag: "研究组织",
        title: "并行研究流且记忆完全隔离",
        description:
          "将探索任务拆分为同级研究工作空间。每个工作空间在 LOCAL 记忆作用域内运行，防止交叉污染。父级协调器通过 TEAM 作用域记忆通道汇总结论。",
        bullets: [
          "通过 HMA LOCAL 作用域实现同级隔离",
          "仅父级可通过 TEAM 记忆汇总",
          "每个工作空间独立 Langfuse 追踪链",
          "DeepAgents 适配器支持计划优先推理",
        ],
        capabilities: ["HMA", "DeepAgents", "Langfuse", "A2A"],
      },
      {
        key: "engineering",
        tag: "工程团队",
        title: "多运行时工程团队自协调",
        description:
          "前端用 Claude Code，后端用 LangGraph，基础设施用 OpenClaw——全部在一个团队工作空间下。协调器通过 A2A 路由任务，执行审批门禁，按层级升级。",
        bullets: [
          "Claude Code、LangGraph、OpenClaw 并行运行",
          "协调器强制执行委派路由",
          "部署和合并操作需人工审批",
          "递归团队扩展不破坏上游集成",
        ],
        capabilities: ["6 适配器", "A2A", "HITL", "团队扩展"],
      },
      {
        key: "automation",
        tag: "运营自动化",
        title: "治理优先的运营工作流",
        description:
          "将周期性运营转化为受管理的 Agent 职责。每个工作空间在 RBAC 权限作用域内运行，审批按层级路由，审计就绪的事件记录通过 WebSocket 实时推送。",
        bullets: [
          "RBAC 角色: operator、admin、read-only",
          "审批路由遵循组织拓扑",
          "JSON Lines 格式审计日志",
          "全局密钥 + 工作空间级覆盖",
        ],
        capabilities: ["RBAC", "审批", "审计", "密钥管理"],
      },
      {
        key: "executive",
        tag: "管理视角",
        title: "在一个 Canvas 上实时掌控全局",
        description:
          "从 Canvas UI 监控每个团队的健康状态、任务进度与升级路径。10 标签操作面板提供对任意工作空间的聊天、终端、配置、记忆、追踪与文件的直接访问。",
        bullets: [
          "WebSocket 驱动的实时拓扑更新",
          "每个工作空间 10 标签操作面板",
          "跨团队可观测性 + 健康巡检",
          "暂停 / 恢复 / 重启生命周期控制",
        ],
        capabilities: ["Canvas", "WebSocket", "健康巡检", "生命周期"],
      },
    ],
  },
};

// ═══════════════════════════════════════════════════════════
//  MEMORY ARCHITECTURE
// ═══════════════════════════════════════════════════════════
export type MemoryLayer = {
  name: string;
  summary: string;
  detail: string;
  color: string;
};

export type MemoryExtra = {
  label: string;
  detail: string;
};

export type MemoryArchitectureContent = {
  eyebrow: string;
  title: string;
  description: string;
  layers: MemoryLayer[];
  extrasTitle: string;
  extras: MemoryExtra[];
  outcomesTitle: string;
  outcomes: string[];
};

export const memoryArchitectureContent: Record<
  Locale,
  MemoryArchitectureContent
> = {
  en: {
    eyebrow: "Organizational Infrastructure",
    title: "Memory Follows Organizational Boundaries",
    description:
      "Starfire replaces flat global memory with hierarchy-aware isolation. The three-scope model — LOCAL, TEAM, GLOBAL — ensures collaboration stays fast while boundaries stay enforceable across the entire org chart.",
    layers: [
      {
        name: "LOCAL",
        summary: "Private scratchpad per workspace.",
        detail:
          "Isolated context for individual agent roles. Personal reasoning, temporary findings, and working state are invisible to siblings and unrelated teams.",
        color: "from-sky-300/45 to-blue-500/15",
      },
      {
        name: "TEAM",
        summary: "Shared within direct parent-child hierarchy.",
        detail:
          "A coordination layer scoped to the immediate team. Parent and children share handoff context without leaking to sibling teams.",
        color: "from-cyan-300/45 to-cyan-500/15",
      },
      {
        name: "GLOBAL",
        summary: "Organization-wide knowledge from root.",
        detail:
          "Root-managed policies, standards, and institutional knowledge flow down the hierarchy. Read access is organization-wide; write access is restricted to root.",
        color: "from-violet-300/45 to-violet-500/15",
      },
    ],
    extrasTitle: "Beyond Three Scopes",
    extras: [
      {
        label: "Awareness Namespaces",
        detail:
          "Optional production-grade backend with workspace-scoped isolation via AWARENESS_URL + AWARENESS_NAMESPACE.",
      },
      {
        label: "Session Recall",
        detail:
          "Search recent activity and memory rows through the session-search endpoint for contextual recall.",
      },
      {
        label: "Memory → Skill Compounding",
        detail:
          "Successful patterns graduate from agent memory into hot-reloadable skills that persist across sessions.",
      },
    ],
    outcomesTitle: "Why This Wins in Production",
    outcomes: [
      "Sibling workspaces remain isolated by default",
      "Memory sharing follows org chart topology exactly",
      "Approval and escalation paths mirror hierarchy",
      "Audit-ready with JSON Lines event logging",
    ],
  },
  zh: {
    eyebrow: "组织基础设施",
    title: "记忆沿组织边界流动",
    description:
      "Starfire 用层级感知隔离替代扁平全局记忆。LOCAL、TEAM、GLOBAL 三层作用域模型确保协作保持高效，同时整个组织图的边界始终可执行。",
    layers: [
      {
        name: "LOCAL",
        summary: "每个工作空间独享私有记忆区。",
        detail:
          "为单个 Agent 角色隔离的上下文。个人推理、临时结论和工作状态对同级和无关团队不可见。",
        color: "from-sky-300/45 to-blue-500/15",
      },
      {
        name: "TEAM",
        summary: "在直接父子层级内共享。",
        detail:
          "限定在直属团队的协作层。父级工作空间与其子级可以共享交接上下文，不会泄漏到同级团队。",
        color: "from-cyan-300/45 to-cyan-500/15",
      },
      {
        name: "GLOBAL",
        summary: "来自根节点的组织级知识。",
        detail:
          "由 Root 工作空间管理的策略、标准与制度知识沿层级下发。读权限全组织开放，写权限仅限根节点。",
        color: "from-violet-300/45 to-violet-500/15",
      },
    ],
    extrasTitle: "三层之上的扩展",
    extras: [
      {
        label: "Awareness 命名空间",
        detail:
          "可选的生产级后端，通过 AWARENESS_URL + AWARENESS_NAMESPACE 实现工作空间级隔离。",
      },
      {
        label: "会话回溯",
        detail:
          "通过 session-search 端点检索近期活动与记忆行，提供上下文回溯能力。",
      },
      {
        label: "记忆 → 技能复合积累",
        detail:
          "成功的模式从 Agent 记忆毕业为可热重载的技能，跨会话持久化。",
      },
    ],
    outcomesTitle: "为什么它能在生产环境取胜",
    outcomes: [
      "同级工作空间默认隔离",
      "记忆共享严格遵循组织拓扑",
      "审批与升级路径精确映射层级关系",
      "JSON Lines 事件日志满足审计需求",
    ],
  },
};

// ═══════════════════════════════════════════════════════════
//  ENTERPRISE  →  Moats + Product Proof
// ═══════════════════════════════════════════════════════════
export type Moat = {
  title: string;
  description: string;
};

export type ProofItem = {
  metric: string;
  label: string;
  detail: string;
};

export type EnterpriseContent = {
  eyebrow: string;
  title: string;
  description: string;
  moatsTitle: string;
  moats: Moat[];
  proofTitle: string;
  proofs: ProofItem[];
};

export const enterpriseContent: Record<Locale, EnterpriseContent> = {
  en: {
    eyebrow: "Platform Moats",
    title: "Why Starfire Is Defensible",
    description:
      "Four architectural decisions compound into a durable advantage. Each is verifiable in the current codebase.",
    moatsTitle: "Core Architectural Moats",
    moats: [
      {
        title: "The Node Is a Role",
        description:
          "A workspace is not a task or a prompt — it is a durable organizational role. Roles survive model swaps, framework changes, and team restructuring.",
      },
      {
        title: "The Org Chart Is the Topology",
        description:
          "Communication, memory access, escalation, and approval routing all follow the same hierarchy. No manual edge wiring, no drift between design and runtime.",
      },
      {
        title: "Governance Without Runtime Lock-in",
        description:
          "Standardize authority, audit, and compliance across LangGraph, Claude Code, CrewAI, AutoGen, DeepAgents, and OpenClaw — without forcing one framework.",
      },
      {
        title: "Memory as Infrastructure",
        description:
          "HMA is not a feature bolted on top. It is the foundation that makes team expansion, skill compounding, and organizational learning possible at scale.",
      },
    ],
    proofTitle: "Current Product Proof",
    proofs: [
      {
        metric: "6",
        label: "Runtime Adapters",
        detail:
          "LangGraph, DeepAgents, Claude Code, CrewAI, AutoGen, OpenClaw — all shipping on main.",
      },
      {
        metric: "4",
        label: "Security Tiers",
        detail:
          "T1 sandbox → T2 standard → T3 privileged → T4 full-host. Per-workspace isolation by risk profile.",
      },
      {
        metric: "614",
        label: "Tests Across 3 Layers",
        detail:
          "278 Go + 188 Canvas vitest + 148 Python pytest. Race detection and coverage enforcement in CI.",
      },
      {
        metric: "10",
        label: "Canvas Ops Tabs",
        detail:
          "Chat, Activity, Details, Skills, Terminal, Config, Files, Memory, Traces, Events — per workspace.",
      },
      {
        metric: "∞",
        label: "Fractal Team Expansion",
        detail:
          "Any workspace becomes a managed sub-team. Upstream integrations stay intact. Recursion is native.",
      },
      {
        metric: "20+",
        label: "MCP Tools",
        detail:
          "Expose platform operations to Claude Code, Cursor, or Codex via MCP server integration.",
      },
    ],
  },
  zh: {
    eyebrow: "平台护城河",
    title: "为什么 Starfire 具备防御性",
    description:
      "四项架构决策复合形成持久优势。每一项都可以在当前代码库中验证。",
    moatsTitle: "核心架构护城河",
    moats: [
      {
        title: "节点即角色",
        description:
          "工作空间不是任务也不是提示词——它是持久的组织角色。角色在模型更换、框架变更和团队重组中持续存在。",
      },
      {
        title: "组织图即拓扑",
        description:
          "通信、记忆访问、升级和审批路由全部遵循同一层级结构。无需手动连线，设计态与运行态零漂移。",
      },
      {
        title: "治理不锁定运行时",
        description:
          "在 LangGraph、Claude Code、CrewAI、AutoGen、DeepAgents 和 OpenClaw 之间统一权限、审计与合规——而不强制使用单一框架。",
      },
      {
        title: "记忆即基础设施",
        description:
          "HMA 不是后加的功能。它是让团队扩展、技能复合积累与组织学习能在规模化下成为可能的基础层。",
      },
    ],
    proofTitle: "当前产品实证",
    proofs: [
      {
        metric: "6",
        label: "运行时适配器",
        detail:
          "LangGraph、DeepAgents、Claude Code、CrewAI、AutoGen、OpenClaw——全部在 main 分支交付。",
      },
      {
        metric: "4",
        label: "安全隔离层级",
        detail:
          "T1 沙箱 → T2 标准 → T3 特权 → T4 全主机。按风险等级逐工作空间隔离。",
      },
      {
        metric: "614",
        label: "三层测试覆盖",
        detail:
          "278 Go + 188 Canvas vitest + 148 Python pytest。CI 中启用竞态检测与覆盖率强制。",
      },
      {
        metric: "10",
        label: "Canvas 操作标签",
        detail:
          "聊天、活动、详情、技能、终端、配置、文件、记忆、追踪、事件——每个工作空间独立。",
      },
      {
        metric: "∞",
        label: "分形团队扩展",
        detail:
          "任何工作空间可成为受管理的子团队。上游集成保持完整。递归是原生能力。",
      },
      {
        metric: "20+",
        label: "MCP 工具",
        detail:
          "通过 MCP Server 将平台操作暴露给 Claude Code、Cursor 或 Codex。",
      },
    ],
  },
};

// ═══════════════════════════════════════════════════════════
//  FINAL CTA  →  Vision Band + Real Exits
// ═══════════════════════════════════════════════════════════
export type FinalCTAContent = {
  vision: {
    label: string;
    statement: string;
  };
  eyebrow: string;
  titleTop: string;
  titleBottom: string;
  subtitle: string;
  actions: Array<{
    label: string;
    href: string;
    primary: boolean;
  }>;
};

export const finalCtaContent: Record<Locale, FinalCTAContent> = {
  en: {
    vision: {
      label: "Looking Ahead",
      statement:
        "From AI agent teams to autonomous bot teams to self-organizing digital workforces — Starfire is building the infrastructure for what comes after the single-agent era.",
    },
    eyebrow: "Start Building",
    titleTop: "Your AI org chart",
    titleBottom: "starts with one workspace.",
    subtitle:
      "Any workspace can become a team. Any team can become an organization.",
    actions: [
      { label: "Architecture", href: siteLinks.architecture, primary: true },
      { label: "GitHub", href: siteLinks.github, primary: false },
      { label: "README", href: siteLinks.readme, primary: false },
    ],
  },
  zh: {
    vision: {
      label: "未来展望",
      statement:
        "从 AI Agent 团队到自治机器人团队，再到自组织数字劳动力——Starfire 正在构建单 Agent 时代之后的基础设施。",
    },
    eyebrow: "开始构建",
    titleTop: "你的 AI 组织图",
    titleBottom: "从一个工作空间开始。",
    subtitle: "任何工作空间都能成为团队。任何团队都能成长为组织。",
    actions: [
      {
        label: "架构文档",
        href: siteLinks.architecture,
        primary: true,
      },
      { label: "GitHub", href: siteLinks.github, primary: false },
      { label: "README", href: siteLinks.readme, primary: false },
    ],
  },
};

// ═══════════════════════════════════════════════════════════
//  FOOTER
// ═══════════════════════════════════════════════════════════
export type FooterContent = {
  brandDescription: string;
  sections: Array<{
    title: string;
    items: Array<{ label: string; href: string }>;
  }>;
  copyright: string;
  github: string;
};

export const footerContent: Record<Locale, FooterContent> = {
  en: {
    brandDescription:
      "The org-native control plane for heterogeneous AI agent teams.",
    sections: [
      {
        title: "Platform",
        items: [
          { label: "Architecture", href: siteLinks.architecture },
          {
            label: "Runtime Adapters",
            href: `${siteLinks.github}/tree/main/workspace-template/adapters`,
          },
          {
            label: "Memory (HMA)",
            href: `${siteLinks.github}/tree/main/docs/architecture`,
          },
          {
            label: "MCP Server",
            href: `${siteLinks.github}/tree/main/mcp-server`,
          },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "README", href: siteLinks.readme },
          {
            label: "API Protocol",
            href: `${siteLinks.github}/tree/main/docs/api-protocol`,
          },
          {
            label: "Agent Runtime",
            href: `${siteLinks.github}/tree/main/docs/agent-runtime`,
          },
          {
            label: "Development",
            href: `${siteLinks.github}/tree/main/docs/development`,
          },
        ],
      },
      {
        title: "Community",
        items: [
          { label: "GitHub", href: siteLinks.github },
          { label: "Issues", href: `${siteLinks.github}/issues` },
          { label: "Discussions", href: `${siteLinks.github}/discussions` },
        ],
      },
    ],
    copyright: "\u00A9 2026 Starfire Technologies, Inc.",
    github: "GitHub",
  },
  zh: {
    brandDescription: "面向异构 AI Agent 团队的组织原生控制平面。",
    sections: [
      {
        title: "平台",
        items: [
          { label: "架构文档", href: siteLinks.architecture },
          {
            label: "运行时适配器",
            href: `${siteLinks.github}/tree/main/workspace-template/adapters`,
          },
          {
            label: "记忆架构 (HMA)",
            href: `${siteLinks.github}/tree/main/docs/architecture`,
          },
          {
            label: "MCP Server",
            href: `${siteLinks.github}/tree/main/mcp-server`,
          },
        ],
      },
      {
        title: "资源",
        items: [
          { label: "README", href: siteLinks.readme },
          {
            label: "API 协议",
            href: `${siteLinks.github}/tree/main/docs/api-protocol`,
          },
          {
            label: "Agent 运行时",
            href: `${siteLinks.github}/tree/main/docs/agent-runtime`,
          },
          {
            label: "开发指南",
            href: `${siteLinks.github}/tree/main/docs/development`,
          },
        ],
      },
      {
        title: "社区",
        items: [
          { label: "GitHub", href: siteLinks.github },
          { label: "Issues", href: `${siteLinks.github}/issues` },
          { label: "讨论区", href: `${siteLinks.github}/discussions` },
        ],
      },
    ],
    copyright: "\u00A9 2026 Starfire Technologies, Inc.",
    github: "GitHub",
  },
};
