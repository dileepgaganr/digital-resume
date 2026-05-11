import { Component, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css'],
    standalone: false
})
export class SkillsComponent implements AfterViewInit {
  isVisible = false;

  skills = [
    { name: 'Azure | AWS | GCP', percentage: 90, icon: 'fa-solid fa-cloud' },
    { name: 'Angular | React | JavaScript', percentage: 90, icon: 'fa-brands fa-angular' },
    { name: '.NET / .NET Core', percentage: 90, icon: 'fa-brands fa-microsoft' },
    { name: 'Cloud Architecture', percentage: 80, icon: 'fa-solid fa-diagram-project' },
    { name: 'SQL | Data Engineering', percentage: 80, icon: 'fa-solid fa-database' },
    { name: 'AI / Machine Learning', percentage: 70, icon: 'fa-solid fa-robot' }
  ];

  highlights = [
    {
      icon: 'fa-solid fa-cloud-arrow-up',
      title: 'Multi-Cloud Expertise',
      description: 'Leading-edge cloud technologies across Azure, AWS, and GCP with proven success in enhancing product features and performance.'
    },
    {
      icon: 'fa-solid fa-chess',
      title: 'Strategic Execution',
      description: 'Skilled in strategizing technical upgrades and cloud migrations, achieving substantial improvements in system responsiveness.'
    },
    {
      icon: 'fa-solid fa-puzzle-piece',
      title: 'Innovative Problem-Solving',
      description: 'Developing private cloud tools and scalable microservices architectures that drive productivity and revenue increases.'
    },
    {
      icon: 'fa-solid fa-brain',
      title: 'AI & ML Proficiency',
      description: 'Applying AI/ML techniques using TensorFlow, PyTorch, and scikit-learn to automate processes and enhance decision-making.'
    }
  ];

  @ViewChild('skillsSection') skillsSection!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.isVisible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(this.skillsSection.nativeElement);
  }
}
