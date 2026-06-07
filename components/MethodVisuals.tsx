import type { Section } from "@/lib/content";

type VisualType = NonNullable<Section["visual"]>;

type Node = {
  title: string;
  body1: string;
  body2?: string;
  icon: "signal" | "doc" | "people" | "shield" | "chart";
};

type Spec = {
  eyebrow: string;
  title: string;
  subtitle: string;
  note1: string;
  note2: string;
  band: string;
  spine: string;
  nodes: Node[];
  outcomes: Array<string | [string, string]>;
};

const specs: Record<VisualType, Spec> = {
  o2v: {
    eyebrow: "O2V Framework",
    title: "Opportunity-to-Value Framework",
    subtitle: "A Scalable Map from Signal to Impact, and from Idea to Asset",
    note1: "Not about collecting more ideas, but helping signals become evidence,",
    note2: "and evidence become decisions, assets, and value stories.",
    band: "Core Opportunity-to-Value Chain",
    spine: "Evidence Spine",
    nodes: [
      { title: "Signal", body1: "Opportunity", body2: "signal", icon: "signal" },
      { title: "Scenario", body1: "Real context", body2: "for value", icon: "doc" },
      { title: "Persona", body1: "Affected", body2: "stakeholder", icon: "people" },
      { title: "Pain", body1: "Meaningful", body2: "friction", icon: "shield" },
      { title: "Product", body1: "Response", body2: "concept", icon: "doc" },
      { title: "Validation", body1: "Fit-for-stage", body2: "evidence", icon: "shield" },
      { title: "Business Case", body1: "Decision", body2: "logic", icon: "chart" },
      { title: "Asset", body1: "Reusable", body2: "value", icon: "people" },
      { title: "Value Story", body1: "Evidence-backed", body2: "narrative", icon: "chart" }
    ],
    outcomes: ["Signals become evidence", ["Impact drives", "Proceed / Pivot / Reframe / Stop"], "Assets preserve value"]
  },
  ainova: {
    eyebrow: "AiNOVA by O2V",
    title: "AI-native Operating Model",
    subtitle: "A Lightweight Operating Map for Enterprise Value Realization",
    note1: "Not about doing more AI pilots, but helping AI move from signal to value,",
    note2: "and from tools to leadership-ready ways of working.",
    band: "Workforce & Ways of Working",
    spine: "Evidence Spine",
    nodes: [
      { title: "Signal", body1: "Identify opportunities", body2: "and value signals", icon: "signal" },
      { title: "Opportunity", body1: "Shape use cases", body2: "and investment logic", icon: "doc" },
      { title: "Readiness", body1: "Prepare roles,", body2: "capability and governance", icon: "people" },
      { title: "Validation", body1: "Validate value", body2: "and control risk", icon: "shield" },
      { title: "Operate", body1: "Scale operation", body2: "and value governance", icon: "chart" }
    ],
    outcomes: ["Move AI opportunities into action faster", "Strengthen leadership absorption capacity", "Build repeatable AI-native work patterns"]
  },
  valence: {
    eyebrow: "Valence by O2V",
    title: "Product Value Governance",
    subtitle: "A Lightweight Map for Product Value Operations and Lifecycle Decisions",
    note1: "Not about tracking more delivery status, but helping products move from activity to value,",
    note2: "and from unmanaged run cost to evidence-backed lifecycle decisions.",
    band: "Value Governance Flow",
    spine: "Lifecycle State Set",
    nodes: [
      { title: "Signals", body1: "Read adoption,", body2: "usage, cost and risk", icon: "signal" },
      { title: "Evidence", body1: "Compare value", body2: "and efficiency", icon: "doc" },
      { title: "Matrix", body1: "Trigger governance", body2: "attention", icon: "chart" },
      { title: "Decision", body1: "Choose lifecycle", body2: "direction", icon: "shield" },
      { title: "Action", body1: "Track follow-up", body2: "and evidence", icon: "people" }
    ],
    outcomes: ["Monitor / Promote / Improve", "Optimize / Keep as-is / Suspend", "Merge / Decommission"]
  }
};

const positionsByCount: Record<number, number[]> = {
  5: [220, 445, 670, 895, 1120],
  9: [155, 285, 415, 545, 675, 805, 935, 1065, 1195]
};

function Icon({ type, x, y }: { type: Node["icon"]; x: number; y: number }) {
  const color = "#2733c3";
  if (type === "signal") {
    return (
      <g transform={`translate(${x - 21} ${y - 21})`} stroke={color} fill="none" strokeWidth="3" strokeLinecap="round">
        <circle cx="21" cy="21" r="5" />
        <circle cx="21" cy="21" r="14" strokeDasharray="7 6" />
        <path d="M21 2v6M40 21h-6M21 40v-6M2 21h6" />
      </g>
    );
  }
  if (type === "doc") {
    return (
      <g transform={`translate(${x - 20} ${y - 22})`} stroke={color} fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 3h18l8 8v31H10z" />
        <path d="M28 3v10h10M15 21h20M15 29h16M15 37h10" />
      </g>
    );
  }
  if (type === "people") {
    return (
      <g transform={`translate(${x - 23} ${y - 22})`} stroke={color} fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="23" cy="13" r="7" />
        <path d="M10 40c2-10 24-10 26 0M7 20a6 6 0 1 0 0-12M39 20a6 6 0 1 1 0-12M2 36c1-8 12-8 15-4M44 36c-1-8-12-8-15-4" />
      </g>
    );
  }
  if (type === "shield") {
    return (
      <g transform={`translate(${x - 20} ${y - 23})`} stroke={color} fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 3l16 7v12c0 10-6 17-16 21C10 39 4 32 4 22V10z" />
        <path d="M12 22l6 6 12-15" />
      </g>
    );
  }
  return (
    <g transform={`translate(${x - 22} ${y - 22})`} stroke={color} fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 39h38M10 35V23h8v12M22 35V15h8v20M34 35V7h8v28" />
      <path d="M7 16c12-2 22-7 35-15M34 1h8v8" />
    </g>
  );
}

function NodeView({ node, index, x, compact }: { node: Node; index: number; x: number; compact: boolean }) {
  const radius = compact ? 50 : 62;
  const y = 455;
  return (
    <g>
      <circle cx={x} cy={y} r={radius} fill="#ffffff" stroke="#dfe3ff" strokeWidth="2" />
      <circle cx={x} cy={y} r={radius - 8} fill="#ffffff" stroke="#bfc6ff" strokeWidth="1.5" opacity="0.75" />
      <text x={x - radius + 10} y={y - radius + 30} fontSize={compact ? 28 : 34} fill="#d8dcf5" fontWeight="700">
        {index + 1}
      </text>
      <Icon type={node.icon} x={x} y={y - 6} />
      <text x={x} y={compact ? 530 : 548} textAnchor="middle" fontSize={compact ? 12 : 20} fill="#111427" fontWeight="700">
        {node.title}
      </text>
      <text x={x} y={compact ? 558 : 580} textAnchor="middle" fontSize={compact ? 13 : 15} fill="#242a44">
        {node.body1}
      </text>
      {node.body2 ? (
        <text x={x} y={compact ? 578 : 603} textAnchor="middle" fontSize={compact ? 13 : 15} fill="#242a44">
          {node.body2}
        </text>
      ) : null}
    </g>
  );
}

export default function MethodVisual({ type }: { type: VisualType }) {
  const spec = specs[type];
  const compact = spec.nodes.length > 5;
  const xs = positionsByCount[spec.nodes.length];
  const endX = xs[xs.length - 1];

  return (
    <div className="not-prose mt-6 w-full overflow-hidden border border-[#dfe3ff] bg-white shadow-[0_18px_45px_rgba(36,52,170,0.06)]">
      <svg viewBox="0 0 1360 940" role="img" aria-label={`${spec.title} visual map`} className="block h-auto w-full">
        <defs>
          <linearGradient id={`wave-${type}`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#0458ff" stopOpacity="0.25" />
            <stop offset="55%" stopColor="#4f58dd" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#b415f0" stopOpacity="0.22" />
          </linearGradient>
          <filter id={`soft-${type}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        <rect width="1360" height="820" fill="#ffffff" />
        <path d="M0 188 C170 110 235 275 378 208 S625 90 760 188 S1025 275 1360 150" fill="none" stroke={`url(#wave-${type})`} strokeWidth="10" filter={`url(#soft-${type})`} opacity="0.9" />
        <path d="M0 206 C170 128 235 293 378 226 S625 108 760 206 S1025 293 1360 168" fill="none" stroke={`url(#wave-${type})`} strokeWidth="2" opacity="0.75" />

        <text x="42" y="58" fontSize="28" letterSpacing="7" fill="#111427" fontWeight="700">
          {spec.eyebrow}
        </text>
        <text x="680" y="155" textAnchor="middle" fontSize="52" fill="#111427" fontWeight="750">
          {spec.title}
        </text>
        <text x="680" y="210" textAnchor="middle" fontSize="25" fill="#2733c3" fontWeight="650">
          {spec.subtitle}
        </text>
        <text x="680" y="275" textAnchor="middle" fontSize="20" fill="#242a44">
          {spec.note1}
        </text>
        <text x="680" y="308" textAnchor="middle" fontSize="20" fill="#242a44">
          {spec.note2}
        </text>

        <line x1="72" y1="372" x2="500" y2="372" stroke="#dfe3ff" strokeWidth="2" />
        <circle cx="500" cy="372" r="4" fill="#4f58dd" />
        <text x="680" y="381" textAnchor="middle" fontSize="22" fill="#111427" fontWeight="700">
          {spec.band}
        </text>
        <circle cx="860" cy="372" r="4" fill="#4f58dd" />
        <line x1="860" y1="372" x2="1288" y2="372" stroke="#dfe3ff" strokeWidth="2" />

        <path d={`M72 455 H${endX + 88}`} stroke="#dfe3ff" strokeWidth="3" fill="none" />
        {xs.map((x, index) => (
          <g key={`${spec.nodes[index].title}-connector`}>
            <circle cx={x - (compact ? 50 : 62)} cy="455" r="5" fill="#4f58dd" />
            <circle cx={x + (compact ? 50 : 62)} cy="455" r="5" fill="#4f58dd" />
          </g>
        ))}
        <path d={`M${endX + 88} 455 l30 18 l-30 18 z`} fill="#4f58dd" opacity="0.9" />

        {spec.nodes.map((node, index) => (
          <NodeView key={node.title} node={node} index={index} x={xs[index]} compact={compact} />
        ))}

        <line x1="72" y1="710" x2="520" y2="710" stroke="#dfe3ff" strokeWidth="2" />
        <circle cx="520" cy="710" r="4" fill="#4f58dd" />
        <text x="680" y="719" textAnchor="middle" fontSize="26" fill="#111427" fontWeight="750">
          {spec.spine}
        </text>
        <circle cx="860" cy="710" r="4" fill="#4f58dd" />
        <line x1="860" y1="710" x2="1288" y2="710" stroke="#dfe3ff" strokeWidth="2" />

        {spec.outcomes.map((outcome, index) => {
          const x = 235 + index * 430;
          const lines = Array.isArray(outcome) ? outcome : [outcome];
          return (
            <g key={lines.join(" ")}>
              <circle cx={x - 72} cy="805" r="28" fill="#ffffff" stroke="#2733c3" strokeWidth="2" />
              <path d={`M${x - 86} 805 l10 11 l21 -27`} fill="none" stroke="#2733c3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              {lines.map((line, lineIndex) => (
                <text
                  key={line}
                  x={x - 35}
                  y={lines.length === 1 ? 811 : 798 + lineIndex * 24}
                  fontSize="16"
                  fill="#111427"
                  fontWeight="650"
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
