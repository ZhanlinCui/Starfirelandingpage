import type { Locale } from "./i18n";

// ── Site Links (real, verifiable URLs) ──────────────────────
export const siteLinks = {
  github: "https://github.com/ZhanlinCui/Starfire-AgentTeam",
  architecture:
    "https://github.com/ZhanlinCui/Starfire-AgentTeam/tree/main/docs/architecture",
  readme: "https://github.com/ZhanlinCui/Starfire-AgentTeam#readme",
  docs: "https://github.com/ZhanlinCui/Starfire-AgentTeam/tree/main/docs",
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
  vision: "vision",
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
      { label: "Vision", href: `#${sectionIds.vision}` },
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
      { label: "愿景", href: `#${sectionIds.vision}` },
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
      "Workspace = role. Org chart = topology. Six runtimes, hierarchy-scoped memory, production governance — out of the box.",
  },
  zh: {
    badge: "开源项目 · 持续交付中",
    titleLine1: "面向异构 AI Agent 团队的",
    titleHighlight: "组织原生控制平面。",
    primaryCta: "探索架构",
    secondaryCta: "查看 GitHub",
    description:
      "工作空间 = 角色，组织图 = 拓扑。六种运行时、层级记忆、生产级治理——开箱即用。",
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
          "One agent answers questions — it can't run a release pipeline or escalate across org boundaries. Coordination is the constraint.",
      },
      {
        title: "Governance Is a Launch Prerequisite",
        detail:
          "No scoped authority, no audit trail, no HITL gates — no production deployment. Governance is day-one, not phase-two.",
      },
      {
        title: "Memory Boundaries Define Platform Value",
        detail:
          "Flat shared context leaks data and breaks at scale. Topology-scoped memory (LOCAL / TEAM / GLOBAL) is the new baseline.",
      },
      {
        title: "Heterogeneous Runtimes Are the Norm",
        detail:
          "LangGraph, Claude Code, CrewAI — no single framework wins everywhere. The control plane must be runtime-agnostic.",
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
          "一个 Agent 能回答问题——但无法运行流水线或跨组织升级。协调才是瓶颈。",
      },
      {
        title: "治理是上线前置条件",
        detail:
          "没有权限作用域、审计链路和人工审批，就没有生产部署。治理是第一天的事。",
      },
      {
        title: "记忆边界决定平台价值",
        detail:
          "扁平共享上下文在规模化时泄漏数据。拓扑作用域记忆（LOCAL / TEAM / GLOBAL）是新基线。",
      },
      {
        title: "异构运行时已成常态",
        detail:
          "LangGraph、Claude Code、CrewAI——没有框架通吃所有场景。控制平面必须与运行时无关。",
      },
    ],
  },
};

// ═══════════════════════════════════════════════════════════
//  SOCIAL PROOF  →  Cloud /云算力 marquee
// ═══════════════════════════════════════════════════════════
export type SocialProofLogoItem = {
  id: string;
  logo: string;
};

export type SocialProofContent = {
  /** Static summary for assistive tech; decorative strips are aria-hidden. */
  summary: string;
  cloudEyebrow: string;
  cloudTitle: string;
  cloudSubtitle: string;
  cloudPartners: SocialProofLogoItem[];
};

export const socialProofContent: Record<Locale, SocialProofContent> = {
  en: {
    summary:
      "Starfire runs on leading cloud and silicon partners: NVIDIA, AWS, Google Cloud, Alibaba Cloud, Tencent Cloud, and Microsoft Azure.",
    cloudEyebrow: "Infrastructure",
    cloudTitle: "Cloud & silicon",
    cloudSubtitle: "Deploy where your data and GPUs already live.",
    cloudPartners: [
      { id: "nvidia", logo: "/partners/nvidia.svg" },
      { id: "aws", logo: "/partners/aws.svg" },
      { id: "google-cloud", logo: "/partners/google-cloud.svg" },
      { id: "alibaba-cloud", logo: "/partners/alibaba-cloud.svg" },
      { id: "tencent-cloud", logo: "/partners/tencent-cloud.svg" },
      { id: "azure", logo: "/partners/azure.svg" },
    ],
  },
  zh: {
    summary:
      "Starfire 支持主流云与算力伙伴：NVIDIA、AWS、Google Cloud、阿里云、腾讯云与 Microsoft Azure。",
    cloudEyebrow: "云算力",
    cloudTitle: "云与算力伙伴",
    cloudSubtitle: "在数据与 GPU 所在之处部署。",
    cloudPartners: [
      { id: "nvidia", logo: "/partners/nvidia.svg" },
      { id: "aws", logo: "/partners/aws.svg" },
      { id: "google-cloud", logo: "/partners/google-cloud.svg" },
      { id: "alibaba-cloud", logo: "/partners/alibaba-cloud.svg" },
      { id: "tencent-cloud", logo: "/partners/tencent-cloud.svg" },
      { id: "azure", logo: "/partners/azure.svg" },
    ],
  },
};

// ═══════════════════════════════════════════════════════════
//  USE CASES
// ═══════════════════════════════════════════════════════════
export type ShowcaseSlide = {
  src: string;
  alt: string;
};

export type Scenario = {
  key: string;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  capabilities: string[];
  /** Image/GIF slides for the album carousel. Empty src = placeholder. */
  slides: ShowcaseSlide[];
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
    description: "",
    scenarios: [
      {
        key: "research",
        tag: "Research Orgs",
        title: "Parallel research with memory isolation",
        description:
          "Sibling workspaces explore independently under LOCAL scope; the parent synthesizes via TEAM memory.",
        bullets: [
          "Sibling isolation via HMA LOCAL scope",
          "Parent synthesis through TEAM memory",
          "Per-workspace Langfuse trace chains",
        ],
        capabilities: ["HMA", "DeepAgents", "Langfuse", "A2A"],
        slides: [
          { src: "/screenshots/starfire-canvas-chat.png", alt: "Canvas: research team topology with 3 sibling analysts" },
          { src: "/screenshots/starfire-memory.png", alt: "Memory panel showing LOCAL scope isolation" },
          { src: "/screenshots/starfire-events.png", alt: "Langfuse trace chain across research workspaces" },
        ],
      },
      {
        key: "engineering",
        tag: "Engineering",
        title: "Multi-runtime teams that self-coordinate",
        description:
          "Claude Code, LangGraph, OpenClaw — side-by-side in one team workspace with A2A routing and HITL gates.",
        bullets: [
          "Six runtime adapters, one workspace",
          "HITL approval for deploy and merge",
          "Recursive team expansion, zero drift",
        ],
        capabilities: ["6 adapters", "A2A", "HITL", "team expansion"],
        slides: [
          { src: "/screenshots/starfire-templates-comms.png", alt: "Canvas: engineering team with 4 heterogeneous runtime agents" },
          { src: "/screenshots/starfire-context-menu.png", alt: "Drag-to-nest team expansion in action" },
          { src: "/screenshots/starfire-canvas-chat.png", alt: "HITL approval dialog for deploy action" },
        ],
      },
      {
        key: "automation",
        tag: "Ops Automation",
        title: "Governance-first operational workflows",
        description:
          "RBAC-scoped authority, hierarchy-routed approvals, and audit-ready event streams — all per workspace.",
        bullets: [
          "RBAC roles: operator, admin, read-only",
          "Approval routing follows org topology",
          "JSON Lines audit + global secrets",
        ],
        capabilities: ["RBAC", "approvals", "audit", "secrets"],
        slides: [
          { src: "/screenshots/starfire-config.png", alt: "Config panel with RBAC roles and compliance settings" },
          { src: "/screenshots/starfire-activity.png", alt: "Activity log stream with approval events" },
          { src: "/screenshots/starfire-files.png", alt: "Secrets management with global inheritance" },
        ],
      },
      {
        key: "executive",
        tag: "Executive View",
        title: "Live control from one Canvas",
        description:
          "Monitor health, tasks, and escalations across every team — with a 10-tab ops panel per workspace.",
        bullets: [
          "Real-time topology via WebSocket",
          "10-tab ops panel per workspace",
          "Pause / resume / restart any agent",
        ],
        capabilities: ["Canvas", "WebSocket", "health sweep", "lifecycle"],
        slides: [
          { src: "/screenshots/starfire-details.png", alt: "Full Canvas overview with multi-team topology" },
          { src: "/screenshots/starfire-terminal.png", alt: "10-tab operations panel: Chat + Activity + Terminal" },
          { src: "/screenshots/starfire-alerts-health.png", alt: "Health sweep dashboard with real-time status" },
        ],
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
    description: "",
    scenarios: [
      {
        key: "research",
        tag: "研究组织",
        title: "并行研究，记忆完全隔离",
        description:
          "同级工作空间在 LOCAL 作用域下独立探索，父级通过 TEAM 记忆汇总结论。",
        bullets: [
          "HMA LOCAL 作用域实现同级隔离",
          "父级通过 TEAM 记忆汇总",
          "每个工作空间独立追踪链",
        ],
        capabilities: ["HMA", "DeepAgents", "Langfuse", "A2A"],
        slides: [
          { src: "/screenshots/starfire-canvas-chat.png", alt: "Canvas: 研究团队拓扑，3 个同级分析师" },
          { src: "/screenshots/starfire-memory.png", alt: "记忆面板展示 LOCAL 作用域隔离" },
          { src: "/screenshots/starfire-events.png", alt: "跨研究工作空间的 Langfuse 追踪链" },
        ],
      },
      {
        key: "engineering",
        tag: "工程团队",
        title: "多运行时团队自协调",
        description:
          "Claude Code、LangGraph、OpenClaw 并行运行于同一工作空间，A2A 路由 + HITL 审批。",
        bullets: [
          "六种运行时适配器，一个工作空间",
          "部署与合并需人工审批",
          "递归团队扩展，零漂移",
        ],
        capabilities: ["6 适配器", "A2A", "HITL", "团队扩展"],
        slides: [
          { src: "/screenshots/starfire-templates-comms.png", alt: "Canvas: 4 个异构运行时 Agent 的工程团队" },
          { src: "/screenshots/starfire-context-menu.png", alt: "拖拽嵌套实现团队扩展" },
          { src: "/screenshots/starfire-canvas-chat.png", alt: "部署操作的人工审批对话框" },
        ],
      },
      {
        key: "automation",
        tag: "运营自动化",
        title: "治理优先的运营工作流",
        description:
          "RBAC 权限作用域、按层级路由审批、审计就绪事件流——均按工作空间隔离。",
        bullets: [
          "RBAC 角色: operator / admin / read-only",
          "审批路由遵循组织拓扑",
          "JSON Lines 审计 + 全局密钥",
        ],
        capabilities: ["RBAC", "审批", "审计", "密钥管理"],
        slides: [
          { src: "/screenshots/starfire-config.png", alt: "配置面板：RBAC 角色与合规设置" },
          { src: "/screenshots/starfire-activity.png", alt: "包含审批事件的活动日志流" },
          { src: "/screenshots/starfire-files.png", alt: "全局继承的密钥管理" },
        ],
      },
      {
        key: "executive",
        tag: "管理视角",
        title: "一个 Canvas 实时掌控全局",
        description:
          "监控所有团队的健康状态、任务与升级路径——每个工作空间配备 10 标签操作面板。",
        bullets: [
          "WebSocket 实时拓扑更新",
          "每个工作空间 10 标签操作面板",
          "暂停 / 恢复 / 重启任意 Agent",
        ],
        capabilities: ["Canvas", "WebSocket", "健康巡检", "生命周期"],
        slides: [
          { src: "/screenshots/starfire-details.png", alt: "完整 Canvas 概览：多团队拓扑" },
          { src: "/screenshots/starfire-terminal.png", alt: "10 标签操作面板：聊天 + 活动 + 终端" },
          { src: "/screenshots/starfire-alerts-health.png", alt: "实时状态的健康巡检面板" },
        ],
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
      "Three scopes — LOCAL, TEAM, GLOBAL — replace flat shared context with hierarchy-aware isolation that scales.",
    layers: [
      {
        name: "LOCAL",
        summary: "Private scratchpad per workspace.",
        detail:
          "Isolated context invisible to siblings and unrelated teams.",
        color: "from-sky-300/45 to-blue-500/15",
      },
      {
        name: "TEAM",
        summary: "Shared within parent-child hierarchy.",
        detail:
          "Handoff context scoped to the immediate team — no leaks to sibling workspaces.",
        color: "from-cyan-300/45 to-cyan-500/15",
      },
      {
        name: "GLOBAL",
        summary: "Org-wide knowledge from root.",
        detail:
          "Policies and standards flow down the hierarchy. Read: everyone. Write: root only.",
        color: "from-violet-300/45 to-violet-500/15",
      },
    ],
    extrasTitle: "Beyond Three Scopes",
    extras: [
      {
        label: "Awareness Namespaces",
        detail:
          "Production backend with workspace-scoped isolation via AWARENESS_URL.",
      },
      {
        label: "Session Recall",
        detail:
          "Search recent activity and memory rows for contextual recall.",
      },
      {
        label: "Memory → Skill Compounding",
        detail:
          "Successful patterns graduate into hot-reloadable skills across sessions.",
      },
    ],
    outcomesTitle: "Why This Wins in Production",
    outcomes: [
      "Sibling workspaces isolated by default",
      "Memory sharing follows org topology exactly",
      "Escalation paths mirror hierarchy",
      "Audit-ready JSON Lines event logging",
    ],
  },
  zh: {
    eyebrow: "组织基础设施",
    title: "记忆沿组织边界流动",
    description:
      "三层作用域——LOCAL、TEAM、GLOBAL——用层级感知隔离替代扁平共享上下文，可规模化扩展。",
    layers: [
      {
        name: "LOCAL",
        summary: "每个工作空间独享私有记忆区。",
        detail:
          "隔离的上下文，对同级和无关团队不可见。",
        color: "from-sky-300/45 to-blue-500/15",
      },
      {
        name: "TEAM",
        summary: "在父子层级内共享。",
        detail:
          "限定在直属团队的交接上下文——不会泄漏到同级工作空间。",
        color: "from-cyan-300/45 to-cyan-500/15",
      },
      {
        name: "GLOBAL",
        summary: "来自根节点的组织级知识。",
        detail:
          "策略与标准沿层级下发。读：全组织。写：仅根节点。",
        color: "from-violet-300/45 to-violet-500/15",
      },
    ],
    extrasTitle: "三层之上的扩展",
    extras: [
      {
        label: "Awareness 命名空间",
        detail:
          "生产级后端，通过 AWARENESS_URL 实现工作空间级隔离。",
      },
      {
        label: "会话回溯",
        detail:
          "检索近期活动与记忆行，提供上下文回溯。",
      },
      {
        label: "记忆 → 技能复合积累",
        detail:
          "成功模式毕业为可热重载的技能，跨会话持久化。",
      },
    ],
    outcomesTitle: "为什么它能在生产环境取胜",
    outcomes: [
      "同级工作空间默认隔离",
      "记忆共享严格遵循组织拓扑",
      "升级路径精确映射层级",
      "JSON Lines 审计就绪事件日志",
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
      "Four architectural decisions compound into a durable advantage — each verifiable in the codebase today.",
    moatsTitle: "Core Architectural Moats",
    moats: [
      {
        title: "The Node Is a Role",
        description:
          "Workspaces are durable org roles — they survive model swaps, framework changes, and team restructuring.",
      },
      {
        title: "The Org Chart Is the Topology",
        description:
          "Communication, memory, escalation, and approval all follow one hierarchy. Zero manual wiring, zero drift.",
      },
      {
        title: "Governance Without Runtime Lock-in",
        description:
          "Unified authority and audit across six runtimes — without forcing a single framework.",
      },
      {
        title: "Memory as Infrastructure",
        description:
          "HMA is the foundation, not a bolt-on. It enables team expansion, skill compounding, and org learning at scale.",
      },
    ],
    proofTitle: "Current Product Proof",
    proofs: [
      {
        metric: "6",
        label: "Runtime Adapters",
        detail:
          "LangGraph, DeepAgents, Claude Code, CrewAI, AutoGen, OpenClaw — shipping on main.",
      },
      {
        metric: "4",
        label: "Security Tiers",
        detail:
          "T1 sandbox → T4 full-host. Per-workspace isolation by risk.",
      },
      {
        metric: "614",
        label: "Tests Across 3 Layers",
        detail:
          "Go + vitest + pytest. Race detection and coverage in CI.",
      },
      {
        metric: "10",
        label: "Canvas Ops Tabs",
        detail:
          "Chat, Activity, Terminal, Config, Memory, Traces — per workspace.",
      },
      {
        metric: "∞",
        label: "Fractal Team Expansion",
        detail:
          "Any workspace becomes a sub-team. Recursion is native.",
      },
      {
        metric: "20+",
        label: "MCP Tools",
        detail:
          "Platform ops exposed to Claude Code, Cursor, or Codex via MCP.",
      },
    ],
  },
  zh: {
    eyebrow: "平台护城河",
    title: "为什么 Starfire 具备防御性",
    description:
      "四项架构决策复合形成持久优势——每一项都可在当前代码库中验证。",
    moatsTitle: "核心架构护城河",
    moats: [
      {
        title: "节点即角色",
        description:
          "工作空间是持久的组织角色——在模型更换、框架变更和团队重组中持续存在。",
      },
      {
        title: "组织图即拓扑",
        description:
          "通信、记忆、升级和审批遵循同一层级。零手动连线，零漂移。",
      },
      {
        title: "治理不锁定运行时",
        description:
          "跨六种运行时统一权限与审计——不强制使用单一框架。",
      },
      {
        title: "记忆即基础设施",
        description:
          "HMA 是基础层，不是附加功能。它让团队扩展、技能积累与组织学习可规模化。",
      },
    ],
    proofTitle: "当前产品实证",
    proofs: [
      {
        metric: "6",
        label: "运行时适配器",
        detail:
          "LangGraph、DeepAgents、Claude Code、CrewAI、AutoGen、OpenClaw——在 main 交付。",
      },
      {
        metric: "4",
        label: "安全隔离层级",
        detail:
          "T1 沙箱 → T4 全主机。按风险逐工作空间隔离。",
      },
      {
        metric: "614",
        label: "三层测试覆盖",
        detail:
          "Go + vitest + pytest。CI 竞态检测与覆盖率强制。",
      },
      {
        metric: "10",
        label: "Canvas 操作标签",
        detail:
          "聊天、活动、终端、配置、记忆、追踪——每工作空间独立。",
      },
      {
        metric: "∞",
        label: "分形团队扩展",
        detail:
          "任何工作空间可成为子团队。递归是原生能力。",
      },
      {
        metric: "20+",
        label: "MCP 工具",
        detail:
          "通过 MCP 将平台操作暴露给 Claude Code、Cursor 或 Codex。",
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
      "One workspace becomes a team. One team becomes an organization. Start now.",
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
    subtitle: "一个工作空间成为团队。一个团队成长为组织。现在就开始。",
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
//  PHYSICAL VISION  →  "Beyond Software"
// ═══════════════════════════════════════════════════════════
export type VisionPhase = {
  era: string;
  title: string;
  description: string;
  nodes: string[];
  status: "live" | "building" | "horizon";
};

export type PhysicalVisionContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  phases: VisionPhase[];
  closingLine: string;
};

export const physicalVisionContent: Record<Locale, PhysicalVisionContent> = {
  en: {
    eyebrow: "Where This Goes",
    title: "From Agent Teams to Robot Teams",
    subtitle: "The organizational layer that governs software agents today will govern physical systems tomorrow.",
    description:
      "A workspace is a role with an A2A interface — not an LLM with a prompt. The same hierarchy, memory, and governance that coordinate containers today can coordinate any autonomous system.",
    phases: [
      {
        era: "NOW",
        title: "Software Agent Teams",
        description:
          "LLM agents in containers — six runtimes, hierarchical memory, production observability, A2A coordination.",
        nodes: [
          "LangGraph orchestration",
          "Claude Code engineering",
          "CrewAI role crews",
          "AutoGen conversations",
          "DeepAgents planning",
          "OpenClaw CLI sessions",
        ],
        status: "live",
      },
      {
        era: "NEXT",
        title: "Terminal + Device Agents",
        description:
          "Same workspaces, same governance — extended to terminal bots, browser agents, and IoT controllers.",
        nodes: [
          "Terminal automation bots",
          "Browser agent fleets",
          "IoT device controllers",
          "CI/CD pipeline agents",
        ],
        status: "building",
      },
      {
        era: "HORIZON",
        title: "Embodied Robot Teams",
        description:
          "When robots need org structure, the infrastructure already exists. Starfire becomes the physical-world control plane.",
        nodes: [
          "Warehouse robot fleets",
          "Autonomous vehicle coordination",
          "Manufacturing cell orchestration",
          "Field inspection teams",
        ],
        status: "horizon",
      },
    ],
    closingLine:
      "Workspace = role. Protocol = A2A. Digital and physical converge — the org layer remains.",
  },
  zh: {
    eyebrow: "未来方向",
    title: "从 Agent 团队到机器人团队",
    subtitle: "今天治理软件 Agent 的组织层，明天将治理物理世界的系统。",
    description:
      "工作空间是拥有 A2A 接口的角色——不是带提示词的 LLM。今天协调容器的层级、记忆与治理，同样可协调任何自治系统。",
    phases: [
      {
        era: "现在",
        title: "软件 Agent 团队",
        description:
          "容器中的 LLM Agent——六种运行时、分层记忆、生产级可观测性、A2A 协调。",
        nodes: [
          "LangGraph 编排",
          "Claude Code 工程",
          "CrewAI 角色协作",
          "AutoGen 对话",
          "DeepAgents 规划",
          "OpenClaw CLI 会话",
        ],
        status: "live",
      },
      {
        era: "下一步",
        title: "终端 + 设备 Agent",
        description:
          "同样的工作空间与治理——扩展到终端机器人、浏览器 Agent 和 IoT 控制器。",
        nodes: [
          "终端自动化机器人",
          "浏览器 Agent 集群",
          "IoT 设备控制器",
          "CI/CD 流水线 Agent",
        ],
        status: "building",
      },
      {
        era: "远景",
        title: "具身机器人团队",
        description:
          "当机器人需要组织结构，基础设施已就位。Starfire 成为物理世界控制平面。",
        nodes: [
          "仓储机器人编队",
          "自动驾驶车辆协调",
          "制造单元编排",
          "现场巡检团队",
        ],
        status: "horizon",
      },
    ],
    closingLine:
      "工作空间 = 角色。协议 = A2A。数字与物理融合——组织层永存。",
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
