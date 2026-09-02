// Default empty resume structure
export const emptyResume = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedIn: '',
    website: '',
    jobTitle: '',
    summary: '',
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
};

// Sample resume for demo / preview
export const sampleResume = {
  personalInfo: {
    fullName: 'Alex Morgan',
    email: 'alex.morgan@email.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    linkedIn: 'linkedin.com/in/alexmorgan',
    website: 'alexmorgan.dev',
    jobTitle: 'Senior Frontend Engineer',
    summary: 'Frontend engineer with 7+ years of experience building performant web applications. Led teams to ship products used by millions. Passionate about clean code, accessibility, and delightful user experiences.',
  },
  experience: [
    {
      id: '1',
      company: 'TechFlow Inc.',
      position: 'Senior Frontend Engineer',
      startDate: '2021',
      endDate: 'Present',
      location: 'San Francisco, CA',
      description: 'Led the migration of a legacy codebase to React, improving page load speed by 40%. Managed a team of 5 engineers and delivered 12 major features on schedule.',
    },
    {
      id: '2',
      company: 'CloudPeak',
      position: 'Frontend Developer',
      startDate: '2018',
      endDate: '2021',
      location: 'Remote',
      description: 'Developed and maintained 15+ client web applications using React and TypeScript. Improved code test coverage from 30% to 85%.',
    },
  ],
  education: [
    {
      id: '1',
      institution: 'University of California, Berkeley',
      degree: 'B.S. Computer Science',
      startDate: '2014',
      endDate: '2018',
      gpa: '3.8',
    },
  ],
  skills: ['JavaScript', 'React', 'TypeScript', 'Node.js', 'CSS', 'HTML', 'Git', 'AWS', 'GraphQL', 'Jest'],
  projects: [
    {
      id: '1',
      name: 'OpenChart',
      description: 'An open-source charting library with 2k+ GitHub stars.',
      link: 'github.com/alex/openchart',
    },
  ],
};

// Resume template definitions
export const templates = [
  { id: 'modern', name: 'Modern', description: 'Clean sidebar layout with accent colors' },
  { id: 'classic', name: 'Classic', description: 'Traditional single-column professional layout' },
  { id: 'creative', name: 'Creative', description: 'Bold header with colorful skill bars' },
  { id: 'minimal', name: 'Minimal', description: 'Ultra-clean typography-focused design' },
];
