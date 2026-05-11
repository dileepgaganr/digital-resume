import { Component, HostListener, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
    standalone: false
})
export class LayoutComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMenuOpen = false;
  activeSection = 'home';
  currentYear = new Date().getFullYear();

  // Biker state
  walkerVisible = false;
  walkerX = 0;
  walkerFlipped = false;
  walkerRunning = false;

  private sectionIds = ['home', 'overview', 'about', 'skills', 'resume', 'contact'];
  private animFrame?: number;
  private walkerTimeout?: ReturnType<typeof setTimeout>;
  private bikerSpeed = 0.4;
  private bikerDirection = 1;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;
    this.walkerTimeout = setTimeout(() => this.startRiding(), 3000);
  }

  ngOnDestroy(): void {
    if (this.walkerTimeout) clearTimeout(this.walkerTimeout);
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  scrollTo(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.isMenuOpen = false;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onWalkerClick(): void {
    if (this.walkerRunning) return;
    this.walkerRunning = true;
    this.bikerSpeed = 6;
  }

  private startRiding(): void {
    if (!this.isBrowser) return;

    const goRight = Math.random() > 0.5;
    this.bikerDirection = goRight ? 1 : -1;
    this.walkerFlipped = !goRight;
    this.walkerX = goRight ? -120 : window.innerWidth + 120;
    this.bikerSpeed = 0.4;
    this.walkerVisible = true;
    this.walkerRunning = false;
    this.ride();
  }

  private ride = (): void => {
    if (!this.walkerVisible) return;

    this.walkerX += this.bikerSpeed * this.bikerDirection;

    const vw = window.innerWidth;
    const pad = 120;
    const offScreen = this.bikerDirection > 0
      ? this.walkerX > vw + pad
      : this.walkerX < -pad;

    if (offScreen) {
      if (this.walkerRunning) {
        this.walkerVisible = false;
        this.walkerRunning = false;
        if (this.animFrame) cancelAnimationFrame(this.animFrame);
        this.walkerTimeout = setTimeout(() => {
          this.bikerDirection *= -1;
          this.walkerFlipped = this.bikerDirection < 0;
          this.startRiding();
        }, 8000);
        return;
      }
      this.bikerDirection *= -1;
      this.walkerFlipped = this.bikerDirection < 0;
      this.walkerX = this.bikerDirection > 0 ? -pad : vw + pad;
    }

    this.animFrame = requestAnimationFrame(this.ride);
  }

  private updateActiveSection(): void {
    const scrollPos = window.scrollY + 150;
    for (let i = this.sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(this.sectionIds[i]);
      if (el && el.offsetTop <= scrollPos) {
        this.activeSection = this.sectionIds[i];
        break;
      }
    }
  }

}
