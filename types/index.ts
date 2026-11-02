export interface ProjectGalleryItem {
  src: string;
  caption: string;
  badge?: string;
  orientation?: "landscape" | "portrait";
  type?: "image" | "video";
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  category: string;
  pillar: "infrastructure" | "luxury" | "turnkey";
  year: string;
  image: string;
  client?: string;
  clientPartner?: string;
  scope?: string;
  description?: string;
  challenge?: string;
  execution?: string;
  directorInCharge?: string;
  status?: string;
  metrics?: ProjectMetric[];
  gallery?: ProjectGalleryItem[];
  highlights?: string[];
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
