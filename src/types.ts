export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
  size: "large" | "medium" | "small";
  description: string;
  tags: string[];
}

export interface Exhibition {
  id: string;
  index: string;
  title: string;
  venue: string;
  date: string;
  link: string;
  details: string;
  ticketPrice: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  bgHex?: string;
  list: string[];
}

export interface Award {
  id: string;
  year: string;
  title: string;
  category: string;
  organization: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  review: string;
  image: string;
}
