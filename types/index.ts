export interface Project {
  slug: string;
  title: string;
  location: string;
  category: string;
  pillar: "infrastructure" | "luxury" | "turnkey";
  year: string;
  image: string;
  client?: string;
  scope?: string;
  description?: string;
}

export interface Sector {
  id: string;
  title: string;
  image: string;
  description: string;
  bullets: string[];
}

export interface MetricItem {
  label: string;
  value: string;
}
