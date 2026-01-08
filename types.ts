
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  technologies?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  status: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  type: string;
  github?: string;
  link?: string;
}
