import { Component } from '@angular/core';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css'],
    standalone: false
})
export class OverviewComponent {
  services = [
    {
      icon: 'fa-solid fa-robot',
      title: 'AI Agents & Intelligent Automation',
      description: 'Building AI-powered agents, LLM-driven workflows, and intelligent automation using Azure AI, OpenAI, LangChain, and custom agent frameworks.'
    },
    {
      icon: 'fa-solid fa-cloud',
      title: 'Cloud Architecture',
      description: 'Designing and implementing IaaS & PaaS solutions across Azure, AWS, and GCP with focus on scalability, security, and cost optimization.'
    },
    {
      icon: 'fa-solid fa-globe',
      title: 'Full-Stack Development',
      description: 'Building scalable enterprise web applications with Angular, React, .NET Core, and Node.js using modern architectural patterns.'
    },
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'IoT Solutions',
      description: 'End-to-end IoT platform development including cloud configuration, data ingestion pipelines, real-time analytics, and visualization.'
    },
    {
      icon: 'fa-solid fa-gears',
      title: 'DevOps & CI/CD',
      description: 'Robust CI/CD pipelines with Azure DevOps, Docker containerization, and Kubernetes orchestration for cloud and on-premise deployments.'
    },
    {
      icon: 'fa-solid fa-brain',
      title: 'AI / ML Engineering',
      description: 'Applying TensorFlow, PyTorch, and scikit-learn to solve complex business challenges — from predictive analytics to NLP and computer vision.'
    }
  ];
}
