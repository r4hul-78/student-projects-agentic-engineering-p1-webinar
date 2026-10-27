export type ProjectCategory =
  | 'All'
  | 'Utilities'
  | 'Sustainability'
  | 'Events & Community'
  | 'E-Commerce'
  | 'Productivity & Focus';

export interface ProjectAuthor {
  name: string;
  handle?: string;
  institution?: string;
  program?: string;
  profileUrl?: string;
}

export interface RunInstruction {
  title: string;
  steps: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problemStatement?: string;
  author: ProjectAuthor;
  category: Exclude<ProjectCategory, 'All'>;
  technologies: string[];
  sourcePath: string;
  sourceUrl: string;
  liveUrl: string | null;
  features: string[];
  status: 'Verified Complete' | 'Active Prototype';
  featured: boolean;
  license: string;
  runInstructions: RunInstruction[];
  previewType: 'calculator' | 'carbon' | 'countdown' | 'cafe' | 'aerocalc' | 'pomodoro';
  testedWithBrowser: boolean;
  agenticWorkflowNote?: string;
}

export type SortOption = 'name-asc' | 'name-desc' | 'category' | 'author';
