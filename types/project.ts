export interface Project {
  id: string;
  title: string;
  slug: string;
  type: 'Interactive' | 'Fundraisers' | 'Collaborations';
  collaborator?: string;
  date: string;
  location?: string;
  participants?: string;
  summary: string;
  description: string;
  cover: string;
  images?: string[];
  highlights?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}
