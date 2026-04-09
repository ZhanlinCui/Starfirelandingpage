import type { Locale } from "./i18n";

export const siteLinks = {
  githubRepo: "https://github.com/ZhanlinCui/Starfire-AgentTeam",
  readme: "https://github.com/ZhanlinCui/Starfire-AgentTeam/blob/main/README.md",
  prd: "https://github.com/ZhanlinCui/Starfire-AgentTeam/blob/main/docs/product/PRD.md",
  architecture:
    "https://github.com/ZhanlinCui/Starfire-AgentTeam/blob/main/docs/architecture/architecture.md",
} as const;

type LinkItem = {
  label: string;
  href: string;
};

type ProofItem = {
  title: string;
  detail: string;
  bullets: string[];
};

type UseCaseItem = {
  title: string;
  summary: string;
  flow: string[];
  outcomes: string[];
};

export type LandingContent = {
  header: {
    nav: LinkItem[];
    github: string;
    architecture: string;
    language: {
      en: string;
      zh: string;
    };
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    chips: string[];
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
  };
  heroVisual: {
    panelTitle: string;
    rootTitle: string;
    rootMeta: string;
    escalation: string;
    telemetryTitle: string;
    laneTitle: string;
    liveLabel: string;
    loopLabel: string;
    teams: Array<{
      name: string;
      runtime: string;
      memory: string;
      status: "online" | "busy" | "watch";
    }>;
    telemetry: Array<{ label: string; value: string }>;
  };
  whyNow: {
    eyebrow: string;
    title: string;
    intro: string;
    signals: Array<{ title: string; detail: string }>;
  };
  moats: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; thesis: string; impact: string }>;
  };
  capabilityProof: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ProofItem[];
  };
  useCases: {
    eyebrow: string;
    title: string;
    intro: string;
    items: UseCaseItem[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    actions: LinkItem[];
  };
  footer: {
    description: string;
    groups: Array<{ title: string; links: LinkItem[] }>;
    copyright: string;
  };
};

export const landingContent: Record<Locale, LandingContent> = {
  en: {
    header: {
      nav: [
        { label: "Why Now", href: "#why-now" },
        { label: "Moats", href: "#moats" },
        { label: "Proof", href: "#proof" },
        { label: "Use Cases", href: "#use-cases" },
        { label: "Docs", href: "#docs" },
      ],
      github: "GitHub",
      architecture: "Architecture",
      language: {
        en: "EN",
        zh: "中文",
      },
    },
    hero: {
      badge: "For technical leaders building governed AI organizations",
      title: "The Organizational Operating System for AI Agent Teams",
      subtitle: "Starfire aligns hierarchy, memory, runtime, and observability in one control plane.",
      description:
        "Move from single-agent demos to production organizations. Define reporting lines, enforce scoped memory, assign runtime tiers, and trace cross-team execution with one topology-native platform.",
      chips: [
        "Org chart = communication topology",
        "Hierarchical memory boundaries",
        "Heterogeneous runtime support",
        "Health sweep + auto-restart reliability",
      ],
      primaryCta: { label: "Read Architecture", href: siteLinks.architecture },
      secondaryCta: { label: "View Product Proof", href: "#proof" },
    },
    heroVisual: {
      panelTitle: "Starfire Control Plane / Live Topology",
      rootTitle: "Root Workspace - Platform Director",
      rootMeta: "governance: active · approvals: routed · traces: live",
      escalation: "Escalation: release workflow requires parent approval",
      telemetryTitle: "Execution Signals",
      laneTitle: "topology-linked execution lanes",
      liveLabel: "live",
      loopLabel: "a2a delegation + policy-aware recovery loop",
      teams: [
        { name: "Engineering Team", runtime: "docker tier 2", memory: "L2 team scope", status: "busy" },
        { name: "Research Team", runtime: "sandbox tier 1", memory: "L1 isolated", status: "online" },
        { name: "Operations Team", runtime: "mixed runtime", memory: "L2 shared", status: "watch" },
      ],
      telemetry: [
        { label: "Memory", value: "workspace awareness namespaces" },
        { label: "Runtime", value: "LangGraph / Claude Code / CrewAI" },
        { label: "Reliability", value: "health sweep + auto-restart" },
        { label: "Observability", value: "event log + traces + chat push" },
      ],
    },
    whyNow: {
      eyebrow: "Why This Category, Why Now",
      title: "Agent Teams Need Governance Infrastructure, Not Prompt Glue",
      intro:
        "Enterprise adoption has shifted from model quality alone to organizational control. Teams now require durable structure, measurable execution, and enforceable boundaries.",
      signals: [
        {
          title: "Single-agent workflows hit coordination limits",
          detail:
            "Complex delivery needs parallel specialist roles, escalation paths, and persistent team context.",
        },
        {
          title: "Governance is now a deployment gate",
          detail:
            "Authority scope, approval routing, and runtime isolation are mandatory for production use.",
        },
        {
          title: "Memory architecture has become a strategic moat",
          detail:
            "Flat memory stores leak context and break control. Topology-scoped memory keeps collaboration and isolation aligned.",
        },
        {
          title: "Runtime heterogeneity is default reality",
          detail:
            "Teams run mixed stacks. The platform layer must standardize lifecycle and policy without forcing one framework.",
        },
      ],
    },
    moats: {
      eyebrow: "Defensibility",
      title: "Starfire's Four Core Moats",
      items: [
        {
          title: "Org Chart = Topology",
          thesis: "Communication rules are inferred from hierarchy, not manually wired edges.",
          impact: "Structure and access policy evolve together, reducing routing drift and governance mismatch.",
        },
        {
          title: "Hierarchical Memory Architecture",
          thesis: "L1 local, L2 team, and L3 global scopes follow reporting lines.",
          impact: "Improves decision quality while preserving enforceable data boundaries at scale.",
        },
        {
          title: "Heterogeneous Runtime Compatibility",
          thesis: "LangGraph, DeepAgents, Claude Code, CrewAI, AutoGen, and OpenClaw share one workspace contract.",
          impact: "Teams standardize governance without standardizing internal agent framework choices.",
        },
        {
          title: "Tiered Runtime Security",
          thesis: "Workspaces map to risk-based runtime tiers with explicit isolation controls.",
          impact: "Sensitive operations can be contained while preserving organization-wide delegation.",
        },
      ],
    },
    capabilityProof: {
      eyebrow: "Latest Shipped Proof",
      title: "Recent Platform Work That Demonstrates Execution Depth",
      intro:
        "These are implemented capabilities from recent Starfire iterations, not roadmap promises.",
      items: [
        {
          title: "Workspace awareness namespaces and memory plumbing",
          detail: "Deterministic workspace awareness namespace wiring with memory tool fallback strategy.",
          bullets: [
            "Per-workspace namespace assignment",
            "Container-level awareness env injection",
            "Memory commit/recall path works across runtimes",
          ],
        },
        {
          title: "Agent push messaging and real-time status delivery",
          detail: "Agents can proactively send updates to the canvas outside synchronous response loops.",
          bullets: [
            "Dedicated notify endpoint",
            "WebSocket `AGENT_MESSAGE` propagation",
            "Chat tab receives asynchronous progress updates",
          ],
        },
        {
          title: "Runtime persistence and resilient restart behavior",
          detail: "Runtime identity is persisted and restart logic handles stale process states safely.",
          bullets: [
            "Runtime stored in database column",
            "Restart-by-id path stabilized",
            "Template fallback behavior hardened",
          ],
        },
        {
          title: "Health sweep + auto-restart reliability loop",
          detail: "Container-level health sweep complements heartbeat liveness for faster recovery.",
          bullets: [
            "Proactive Docker health sweep",
            "Offline detection triggers restart",
            "Deduplicated restart with per-workspace guarding",
          ],
        },
        {
          title: "Canvas hardening for operator trust",
          detail: "Global error boundary and hydration retry banner reduce blank-screen and stale-state failure.",
          bullets: [
            "App-level React error boundary",
            "Hydration retry UX for failed fetch",
            "Improved test coverage around failure paths",
          ],
        },
        {
          title: "Multi-runtime adapter architecture",
          detail: "Adapter layer unifies multiple agent infrastructures under one A2A execution surface.",
          bullets: [
            "Pluggable adapter registry",
            "Runtime-specific setup and executor bridge",
            "Consistent workspace lifecycle across providers",
          ],
        },
      ],
    },
    useCases: {
      eyebrow: "Applied Outcomes",
      title: "Operational Patterns Teams Are Running With Starfire",
      intro:
        "Each pattern combines topology, memory scope, runtime policy, and observability for production execution.",
      items: [
        {
          title: "Research Intelligence Organization",
          summary: "Split research into sibling squads and synthesize only decision-grade output to leadership.",
          flow: [
            "Root Lead defines hypothesis backlog",
            "Sibling teams run isolated exploration threads",
            "Team leads promote validated findings upward",
          ],
          outcomes: ["Less context contamination", "Faster parallel discovery", "Auditable synthesis decisions"],
        },
        {
          title: "Engineering Delivery Team",
          summary:
            "Coordinate frontend, backend, infra, and QA workspaces with explicit delegation boundaries and approval gates.",
          flow: [
            "PM workspace decomposes delivery goals",
            "Specialist workspaces execute in runtime tiers",
            "Risky operations escalate through hierarchy",
          ],
          outcomes: ["Clear ownership", "Controlled release flow", "Traceable handoffs"],
        },
        {
          title: "Growth and Operations Automation",
          summary: "Run recurring campaigns and checks as governed agent duties rather than ad-hoc scripts.",
          flow: [
            "Ops lead schedules periodic missions",
            "Execution cells run with scoped tools",
            "Threshold breaches trigger supervised escalation",
          ],
          outcomes: ["Lower manual ops load", "Consistent execution quality", "Structured intervention points"],
        },
        {
          title: "Executive Control Desk",
          summary: "Give leadership one topology-native pane for runtime health, incident routing, and cost posture.",
          flow: [
            "Org map reflects live workspace state",
            "Critical events route through escalation chain",
            "Decision logs remain visible across teams",
          ],
          outcomes: ["Faster incident response", "Operational transparency", "Better governance confidence"],
        },
      ],
    },
    finalCta: {
      eyebrow: "Explore Starfire",
      title: "Evaluate The System With Technical Depth",
      description:
        "Review the architecture, read the PRD, and inspect the open-source implementation to assess platform maturity.",
      actions: [
        { label: "GitHub Repository", href: siteLinks.githubRepo },
        { label: "Product PRD", href: siteLinks.prd },
        { label: "Architecture Doc", href: siteLinks.architecture },
      ],
    },
    footer: {
      description: "Starfire is built for teams operating AI agents as an organization, not isolated prompts.",
      groups: [
        {
          title: "Core",
          links: [
            { label: "Repository", href: siteLinks.githubRepo },
            { label: "README", href: siteLinks.readme },
          ],
        },
        {
          title: "Product",
          links: [
            { label: "PRD", href: siteLinks.prd },
            { label: "Architecture", href: siteLinks.architecture },
          ],
        },
        {
          title: "Explore",
          links: [
            { label: "Proof Section", href: "#proof" },
            { label: "Use Cases", href: "#use-cases" },
          ],
        },
      ],
      copyright: "© 2026 Starfire Technologies",
    },
  },
  zh: {
    header: {
      nav: [
        { label: "为什么是现在", href: "#why-now" },
        { label: "护城河", href: "#moats" },
        { label: "能力证明", href: "#proof" },
        { label: "落地场景", href: "#use-cases" },
        { label: "文档", href: "#docs" },
      ],
      github: "GitHub",
      architecture: "架构文档",
      language: {
        en: "EN",
        zh: "中文",
      },
    },
    hero: {
      badge: "面向技术负责人的 AI 组织化治理平台",
      title: "面向 AI Agent 团队的组织操作系统",
      subtitle: "Starfire 在一个控制平面里统一层级、记忆、运行时与可观测性。",
      description:
        "把单 Agent Demo 升级为可上线的组织化系统。通过拓扑原生平台定义汇报关系、约束记忆边界、分配运行时层级，并追踪跨团队执行链路。",
      chips: ["组织结构即通信拓扑", "层级记忆边界", "多运行时兼容", "健康巡检 + 自动重启恢复"],
      primaryCta: { label: "阅读架构文档", href: siteLinks.architecture },
      secondaryCta: { label: "查看能力证明", href: "#proof" },
    },
    heroVisual: {
      panelTitle: "Starfire 控制平面 / 实时拓扑",
      rootTitle: "根工作空间 - 平台协调中枢",
      rootMeta: "治理开启 · 审批可路由 · 追踪在线",
      escalation: "升级事件：发布流程需要上级审批",
      telemetryTitle: "执行信号",
      laneTitle: "拓扑驱动执行链路",
      liveLabel: "在线",
      loopLabel: "a2a 委派 + 策略感知恢复闭环",
      teams: [
        { name: "工程团队", runtime: "docker tier 2", memory: "L2 团队作用域", status: "busy" },
        { name: "研究团队", runtime: "sandbox tier 1", memory: "L1 独立作用域", status: "online" },
        { name: "运营团队", runtime: "mixed runtime", memory: "L2 共享作用域", status: "watch" },
      ],
      telemetry: [
        { label: "记忆", value: "workspace awareness 命名空间" },
        { label: "运行时", value: "LangGraph / Claude Code / CrewAI" },
        { label: "可靠性", value: "健康巡检 + 自动重启" },
        { label: "可观测性", value: "事件日志 + 追踪 + 主动推送" },
      ],
    },
    whyNow: {
      eyebrow: "为什么是现在",
      title: "Agent 团队时代需要治理基础设施，而不是提示词拼接",
      intro:
        "企业落地门槛已经从单纯模型效果，转向组织级控制能力。团队需要可持续结构、可测执行链路和可执行边界策略。",
      signals: [
        {
          title: "单体 Agent 流程已触达协作上限",
          detail: "复杂交付需要并行专业角色、升级路径和跨任务持续上下文。",
        },
        {
          title: "治理能力已成为上线门槛",
          detail: "权限作用域、审批路由和运行时隔离正在成为生产落地前提。",
        },
        {
          title: "记忆架构正在成为战略护城河",
          detail: "扁平记忆会泄漏上下文并削弱控制。拓扑作用域记忆才能兼顾协作与隔离。",
        },
        {
          title: "多运行时异构是默认现实",
          detail: "团队天然混用框架，平台层必须统一生命周期与策略，而非强迫单一技术栈。",
        },
      ],
    },
    moats: {
      eyebrow: "核心护城河",
      title: "Starfire 的四个防御性能力",
      items: [
        {
          title: "组织结构 = 通信拓扑",
          thesis: "通信规则由层级自动推导，而不是依赖手工连线。",
          impact: "组织变化与访问策略天然同步，降低路由漂移和治理错配风险。",
        },
        {
          title: "层级记忆架构",
          thesis: "L1 本地、L2 团队、L3 全局记忆严格映射汇报线。",
          impact: "在提升协作效率的同时，保持规模化下可执行的数据边界。",
        },
        {
          title: "异构运行时兼容",
          thesis: "LangGraph、DeepAgents、Claude Code、CrewAI、AutoGen、OpenClaw 共用统一工作空间契约。",
          impact: "团队无需统一 Agent 框架，也能统一治理和运营标准。",
        },
        {
          title: "分级运行时安全边界",
          thesis: "按风险级别将工作空间映射到不同运行时隔离层。",
          impact: "敏感操作可受控执行，同时保持组织级委派协作能力。",
        },
      ],
    },
    capabilityProof: {
      eyebrow: "最新能力证明",
      title: "近期版本已落地的关键能力",
      intro: "以下均为近期已实现能力，不是未来路线图承诺。",
      items: [
        {
          title: "Workspace Awareness 命名空间与记忆链路",
          detail: "确定性的 workspace awareness 命名空间注入与记忆工具回退策略。",
          bullets: ["按工作空间分配 awareness namespace", "容器环境注入 awareness 配置", "跨运行时记忆提交/召回能力"],
        },
        {
          title: "Agent 主动推送消息与实时状态",
          detail: "Agent 可在同步响应之外主动向画布推送执行进展。",
          bullets: ["新增 notify 接口", "WebSocket `AGENT_MESSAGE` 广播", "Chat 面板接收异步进度消息"],
        },
        {
          title: "运行时持久化与重启稳定性",
          detail: "运行时身份持久化入库，重启链路对异常状态更稳健。",
          bullets: ["runtime 列持久化", "RestartByID 链路稳定", "模板回退行为加固"],
        },
        {
          title: "健康巡检 + 自动重启恢复闭环",
          detail: "容器健康巡检与 heartbeat 联合判断，提升恢复速度。",
          bullets: ["主动 Docker health sweep", "离线检测自动触发重启", "按 workspace 去重重启请求"],
        },
        {
          title: "Canvas 稳定性强化",
          detail: "全局错误边界与 hydration 重试能力，降低黑屏和状态失真。",
          bullets: ["应用级 Error Boundary", "数据拉取失败可重试", "失败路径测试覆盖增强"],
        },
        {
          title: "多运行时适配器架构",
          detail: "适配器层统一多种 Agent 基础设施的 A2A 执行面。",
          bullets: ["可插拔适配器注册", "运行时特定 setup/executor 桥接", "统一工作空间生命周期"],
        },
      ],
    },
    useCases: {
      eyebrow: "落地模式",
      title: "团队正在用 Starfire 跑起来的组织化场景",
      intro: "每种场景都同时组合拓扑、记忆作用域、运行时策略与可观测性。",
      items: [
        {
          title: "研究情报组织",
          summary: "把研究任务拆分为同级小队并行推进，仅向上汇总可决策结论。",
          flow: ["根节点负责人定义研究假设池", "同级团队隔离探索", "Team Lead 向上汇报验证结论"],
          outcomes: ["减少上下文污染", "提高并行探索效率", "保留可审计汇总依据"],
        },
        {
          title: "工程交付团队",
          summary: "以前端、后端、基础设施、测试工作空间协同交付，并在关键动作上设置审批门控。",
          flow: ["PM 工作空间拆解交付目标", "专业工作空间在分级运行时执行", "高风险动作沿层级升级审批"],
          outcomes: ["责任边界清晰", "发布流程可控", "跨角色交接可追踪"],
        },
        {
          title: "增长与运营自动化",
          summary: "将周期运营流程转为受治理的 Agent 职责，而非脚本堆叠。",
          flow: ["运营 Lead 定义周期任务", "执行单元按作用域调用工具", "阈值越界自动升级人工介入"],
          outcomes: ["降低人工操作负担", "执行质量稳定", "介入节点结构化"],
        },
        {
          title: "管理层控制台",
          summary: "给管理层一个拓扑原生视图，统一看健康状态、事件升级与成本态势。",
          flow: ["组织图映射实时工作空间状态", "关键事件按升级链路路由", "跨团队决策日志持续可见"],
          outcomes: ["事件响应更快", "运营透明度更高", "治理信心更强"],
        },
      ],
    },
    finalCta: {
      eyebrow: "深入了解 Starfire",
      title: "用技术深度评估平台成熟度",
      description: "从架构、PRD 与开源实现三个层面快速完成技术与产品判断。",
      actions: [
        { label: "GitHub 仓库", href: siteLinks.githubRepo },
        { label: "产品 PRD", href: siteLinks.prd },
        { label: "架构文档", href: siteLinks.architecture },
      ],
    },
    footer: {
      description: "Starfire 面向的是组织化 AI 团队运营，而非孤立提示词执行。",
      groups: [
        {
          title: "核心入口",
          links: [
            { label: "仓库", href: siteLinks.githubRepo },
            { label: "README", href: siteLinks.readme },
          ],
        },
        {
          title: "产品文档",
          links: [
            { label: "PRD", href: siteLinks.prd },
            { label: "架构", href: siteLinks.architecture },
          ],
        },
        {
          title: "页面锚点",
          links: [
            { label: "能力证明", href: "#proof" },
            { label: "落地场景", href: "#use-cases" },
          ],
        },
      ],
      copyright: "© 2026 Starfire Technologies",
    },
  },
};
