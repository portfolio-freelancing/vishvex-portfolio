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
  description: string;
  large: boolean;
};

/**
 * Single source of truth for the Services section.
 * The #work-request "Project Type" selector is derived from this list,
 * so adding/removing a card here automatically syncs both places.
 */
export const services: Service[] = [
  { icon: Brain, title: "AI Agents", description: "Autonomous AI agents that reason, act, and integrate with your business tools.", large: true },
  { icon: Workflow, title: "Automation Workflows", description: "n8n and custom automation pipelines that eliminate manual work.", large: false },
  { icon: Code, title: "SaaS Development", description: "Scalable SaaS platforms built for growth.", large: false },
  { icon: Cpu, title: "Prompt Engineering", description: "Optimized prompts for reliable AI outputs.", large: false },
  { icon: Globe, title: "Web Development", description: "Modern, fast, responsive websites.", large: false },
  { icon: Plug, title: "API Integrations", description: "Connect platforms, payments, and data sources seamlessly.", large: true },
  { icon: MessageSquare, title: "Chatbot Development", description: "Intelligent chatbots for support, sales, and lead qualification.", large: false },
  { icon: TrendingUp, title: "Lead Generation", description: "AI-powered systems that capture and qualify leads automatically.", large: false },
  { icon: LineChart, title: "Performance Marketing", description: "Drive more leads and sales with Meta Ads, Google Ads, and conversion-focused campaigns.", large: true },
];

/** Project Type options, in Services section order, de-duplicated. */
export const serviceTitles: string[] = Array.from(new Set(services.map((s) => s.title)));
