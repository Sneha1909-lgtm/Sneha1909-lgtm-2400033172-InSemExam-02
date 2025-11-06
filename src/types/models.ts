export type Role = 'student' | 'mentor' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  domain: string;
  description: string;
  durationWeeks: number;
  stipend?: number;
  status: 'open' | 'closed';
  createdBy: string;
  requirements?: string[];
  location?: string;
}

export interface Internship {
  id: string;
  opportunityId: string;
  mentorId: string;
  studentId: string;
  startDate: string;
  endDate?: string;
  status: 'active' | 'completed' | 'on_hold';
}

export interface Task {
  id: string;
  internshipId: string;
  title: string;
  description?: string;
  dueDate?: string;
  status: 'todo' | 'in_progress' | 'review' | 'done';
  createdAt: string;
  priority?: 'low' | 'medium' | 'high';
}

export interface Feedback {
  id: string;
  internshipId: string;
  authorId: string;
  authorName: string;
  message: string;
  createdAt: string;
  rating?: number;
}

export interface ProgressReport {
  id: string;
  internshipId: string;
  studentId: string;
  period: 'weekly' | 'bi-weekly' | 'monthly';
  weekNumber: number;
  summary: string;
  achievements: string[];
  challenges?: string[];
  links?: string[];
  createdAt: string;
}

export interface Evaluation {
  id: string;
  internshipId: string;
  studentId: string;
  mentorId: string;
  criteria: EvaluationCriteria[];
  totalScore: number;
  maxScore: number;
  comments?: string;
  createdAt: string;
}

export interface EvaluationCriteria {
  name: string;
  score: number;
  maxScore: number;
  weight?: number;
}
