import { Component } from '@angular/core';

interface TimelineEntry {
  role: string;
  company: string;
  period: string;
  type: 'work' | 'education';
  badges: string[];
}

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css'],
    standalone: false
})
export class ResumeComponent {
  timeline: TimelineEntry[] = [
    {
      role: 'Senior Software Engineer',
      company: 'Epsilon',
      period: 'Present',
      type: 'work',
      badges: ['Next Js', 'Vue JS', '.NET Core', 'Azure', 'AI Agents', 'Microservices']
    },
    {
      role: 'Senior Software Engineer',
      company: 'SMBC',
      period: '',
      type: 'work',
      badges: ['Angular', '.NET Core', 'Azure', 'Microservices']
    },
    {
      role: 'Senior Software Engineer (Software Architect)',
      company: 'H&M',
      period: '',
      type: 'work',
      badges: ['Docker', 'AKS', 'Istio', 'Angular', 'Cloud Architecture']
    },
    {
      role: 'Senior Product Specialist',
      company: 'Cognizant',
      period: '',
      type: 'work',
      badges: ['Docker', 'AKS', 'Istio', 'Angular', 'Cloud Architecture']
    },
    {
      role: 'Module Lead',
      company: 'Mindtree Ltd',
      period: '',
      type: 'work',
      badges: ['Angular', 'ASP.NET Core', 'Team Leadership']
    },
    {
      role: 'Senior Engineer',
      company: 'L&T Technology Services',
      period: '',
      type: 'work',
      badges: ['Angular', '.NET', 'Azure', 'IoT']
    },
    {
      role: 'Senior Systems Engineer',
      company: 'Infosys',
      period: '',
      type: 'work',
      badges: ['SQL', 'Performance Optimization']
    },
    {
      role: 'Systems Engineer',
      company: 'Tata Consultancy Service (TCS)',
      period: '',
      type: 'work',
      badges: ['Full-Stack', '.NET', 'SQL Server']
    },
    {
      role: 'Bachelor of Engineering',
      company: 'Sri Siddhartha Institute of Technology',
      period: '2008 - 2012',
      type: 'education',
      badges: ['GPA: 8.42', 'IEEE', 'ISTE']
    }
  ];
}
