import {
  Brain,
  Workflow,
  Code,
  Cpu,
  Globe,
  Plug,
  MessageSquare,
  TrendingUp,
  LineChart,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  /** One-line outcome the client actually gets. */
  outcome: string;
  description: string;
};

/**
 * Single source of truth for the Services section.
 * The #work-request "Project Type" selector is derived from this list,
 * so adding/removing an entry here automatically syncs both places.
 */
export const services: Service[] = [
  {
    icon: Brain,
    title: "AI Agents",
    outcome: "An agent that answers, qualifies and acts on enquiries without your team touching them.",
    description: "Autonomous AI agents that reason, act, and integrate with your business tools.",
  },
  {
    icon: Workflow,
    title: "Automation Workflows",
    outcome: "Repetitive admin work — reminders, handoffs, data entry — runs itself on n8n.",
    description: "n8n and custom automation pipelines that eliminate manual work.",
  },
  {
    icon: Code,
    title: "SaaS Development",
    outcome: "A working product your customers can sign up for, billed and shipped in weeks.",
    description: "Scalable SaaS platforms built for growth.",
  },
  {
    icon: Cpu,
    title: "Prompt Engineering",
    outcome: "Model outputs you can trust in production, tested against your real edge cases.",
    description: "Optimized prompts for reliable AI outputs.",
  },
  {
    icon: Globe,
    title: "Web Development",
    outcome: "A fast, indexable site that turns traffic into enquiries instead of bounces.",
    description: "Modern, fast, responsive websites.",
  },
  {
    icon: Plug,
    title: "API Integrations",
    outcome: "Your CRM, WhatsApp, calendar and payments stop being separate silos.",
    description: "Connect platforms, payments, and data sources seamlessly.",
  },
  {
    icon: MessageSquare,
    title: "Chatbot Development",
    outcome: "Every enquiry gets a first reply in seconds, at 2am included.",
    description: "Intelligent chatbots for support, sales, and lead qualification.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    outcome: "A pipeline that captures, scores and routes leads to whoever should call them.",
    description: "AI-powered systems that capture and qualify leads automatically.",
  },
  {
    icon: LineChart,
    title: "Performance Marketing",
    outcome: "Meta and Google spend tied to booked calls, not impressions.",
    description: "Drive more leads and sales with Meta Ads, Google Ads, and conversion-focused campaigns.",
  },
];

/** Project Type options, in Services section order, de-duplicated. */
export const serviceTitles: string[] = Array.from(new Set(services.map((s) => s.title)));
