import { Opportunity, User, Internship, Task, Feedback, ProgressReport, Evaluation } from '@/types/models';

export const mockUsers: User[] = [
  { id: 'u1', name: 'John Student', email: 'john@student.com', role: 'student' },
  { id: 'u2', name: 'Sarah Mentor', email: 'sarah@mentor.com', role: 'mentor' },
  { id: 'u3', name: 'Admin User', email: 'admin@company.com', role: 'admin' },
];

export const mockOpportunities: Opportunity[] = [
  {
    id: 'op1',
    title: 'Frontend Development Intern',
    company: 'TechCorp Solutions',
    domain: 'Web Development',
    description: 'Work on cutting-edge React applications and learn modern web development practices.',
    durationWeeks: 12,
    stipend: 15000,
    status: 'open',
    createdBy: 'u3',
    requirements: ['React', 'TypeScript', 'Git'],
    location: 'Remote'
  },
  {
    id: 'op2',
    title: 'Data Analytics Intern',
    company: 'DataViz Inc',
    domain: 'Data Science',
    description: 'Help build interactive dashboards and perform data analysis on real-world datasets.',
    durationWeeks: 10,
    stipend: 12000,
    status: 'open',
    createdBy: 'u3',
    requirements: ['Python', 'SQL', 'Data Visualization'],
    location: 'Hybrid'
  },
  {
    id: 'op3',
    title: 'Mobile App Development Intern',
    company: 'AppWorks Studio',
    domain: 'Mobile Development',
    description: 'Build cross-platform mobile applications using React Native.',
    durationWeeks: 16,
    stipend: 18000,
    status: 'open',
    createdBy: 'u2',
    requirements: ['React Native', 'JavaScript', 'Mobile UI/UX'],
    location: 'Remote'
  },
  {
    id: 'op4',
    title: 'Backend Engineering Intern',
    company: 'CloudSystems Ltd',
    domain: 'Backend Development',
    description: 'Work with Node.js and cloud infrastructure to build scalable APIs.',
    durationWeeks: 12,
    status: 'open',
    createdBy: 'u3',
    requirements: ['Node.js', 'PostgreSQL', 'REST APIs'],
    location: 'Remote'
  }
];

export const mockInternships: Internship[] = [
  {
    id: 'i1',
    opportunityId: 'op1',
    mentorId: 'u2',
    studentId: 'u1',
    startDate: '2025-01-15',
    status: 'active'
  }
];

export const mockTasks: Task[] = [
  {
    id: 't1',
    internshipId: 'i1',
    title: 'Set up development environment',
    description: 'Install Node.js, npm, and clone the project repository',
    status: 'done',
    createdAt: '2025-01-15T10:00:00Z',
    priority: 'high'
  },
  {
    id: 't2',
    internshipId: 'i1',
    title: 'Complete React fundamentals tutorial',
    description: 'Go through the official React documentation and build sample components',
    dueDate: '2025-01-25',
    status: 'done',
    createdAt: '2025-01-16T10:00:00Z',
    priority: 'high'
  },
  {
    id: 't3',
    internshipId: 'i1',
    title: 'Build user authentication flow',
    description: 'Implement login and registration components with form validation',
    dueDate: '2025-02-05',
    status: 'in_progress',
    createdAt: '2025-01-20T10:00:00Z',
    priority: 'high'
  },
  {
    id: 't4',
    internshipId: 'i1',
    title: 'Create dashboard layout',
    description: 'Design and implement responsive dashboard with navigation',
    dueDate: '2025-02-15',
    status: 'review',
    createdAt: '2025-01-22T10:00:00Z',
    priority: 'medium'
  },
  {
    id: 't5',
    internshipId: 'i1',
    title: 'Integrate API endpoints',
    description: 'Connect frontend components to backend API services',
    dueDate: '2025-02-28',
    status: 'todo',
    createdAt: '2025-01-25T10:00:00Z',
    priority: 'medium'
  },
  {
    id: 't6',
    internshipId: 'i1',
    title: 'Write unit tests',
    description: 'Add test coverage for critical components',
    dueDate: '2025-03-10',
    status: 'todo',
    createdAt: '2025-01-28T10:00:00Z',
    priority: 'low'
  }
];

export const mockFeedback: Feedback[] = [
  {
    id: 'f1',
    internshipId: 'i1',
    authorId: 'u2',
    authorName: 'Sarah Mentor',
    message: 'Great job on setting up the development environment! Your attention to detail is impressive.',
    createdAt: '2025-01-16T14:30:00Z',
    rating: 5
  },
  {
    id: 'f2',
    internshipId: 'i1',
    authorId: 'u2',
    authorName: 'Sarah Mentor',
    message: 'The authentication flow looks good. Consider adding password strength validation for better security.',
    createdAt: '2025-02-03T11:15:00Z',
    rating: 4
  },
  {
    id: 'f3',
    internshipId: 'i1',
    authorId: 'u2',
    authorName: 'Sarah Mentor',
    message: 'Dashboard layout is coming along nicely. Make sure to test on different screen sizes.',
    createdAt: '2025-02-14T16:45:00Z',
    rating: 4
  }
];

export const mockReports: ProgressReport[] = [
  {
    id: 'r1',
    internshipId: 'i1',
    studentId: 'u1',
    period: 'weekly',
    weekNumber: 1,
    summary: 'Successfully completed onboarding and environment setup',
    achievements: [
      'Set up development environment',
      'Completed React fundamentals tutorial',
      'Met with team members'
    ],
    createdAt: '2025-01-22T10:00:00Z'
  },
  {
    id: 'r2',
    internshipId: 'i1',
    studentId: 'u1',
    period: 'weekly',
    weekNumber: 2,
    summary: 'Started working on authentication module',
    achievements: [
      'Implemented login form',
      'Added form validation',
      'Learned about React hooks'
    ],
    challenges: ['Understanding advanced TypeScript types'],
    createdAt: '2025-01-29T10:00:00Z'
  }
];

export const mockEvaluations: Evaluation[] = [
  {
    id: 'e1',
    internshipId: 'i1',
    studentId: 'u1',
    mentorId: 'u2',
    criteria: [
      { name: 'Technical Skills', score: 85, maxScore: 100 },
      { name: 'Communication', score: 90, maxScore: 100 },
      { name: 'Problem Solving', score: 80, maxScore: 100 },
      { name: 'Code Quality', score: 85, maxScore: 100 },
      { name: 'Time Management', score: 88, maxScore: 100 }
    ],
    totalScore: 428,
    maxScore: 500,
    comments: 'Excellent progress so far. Shows strong learning ability and dedication.',
    createdAt: '2025-02-15T10:00:00Z'
  }
];
