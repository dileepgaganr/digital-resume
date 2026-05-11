import { Directive, ElementRef, Input, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
    selector: '[appScrollAnimate]',
    standalone: false
})
export class IntersectionObserverDirective implements OnInit, OnDestroy {
  @Input('appScrollAnimate') animationClass = 'fadeInUp';
  @Input() animateThreshold = 0.15;
  @Input() animateDelay = 0;

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = this.el.nativeElement as HTMLElement;
    element.classList.add('animate-on-scroll', this.animationClass);

    if (this.animateDelay > 0) {
      element.style.transitionDelay = `${this.animateDelay}ms`;
    }

    if (!('IntersectionObserver' in window)) {
      element.classList.add('visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: this.animateThreshold, rootMargin: '0px 0px -50px 0px' }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
