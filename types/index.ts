export interface Project {
  title: string;
  location: string;
  category: string;
  year: string;
  image: string;
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
