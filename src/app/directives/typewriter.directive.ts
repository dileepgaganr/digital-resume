import { Directive, ElementRef, Input, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
    selector: '[appTypewriter]',
    standalone: false
})
export class TypewriterDirective implements OnInit, OnDestroy {
  @Input('appTypewriter') strings: string[] = [];
  @Input() typeSpeed = 80;
  @Input() deleteSpeed = 40;
  @Input() pauseDuration = 2000;

  private currentStringIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  private timeoutId?: ReturnType<typeof setTimeout>;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId) || this.strings.length === 0) return;
    this.el.nativeElement.classList.add('typewriter-cursor');
    this.tick();
  }

  ngOnDestroy(): void {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  private tick(): void {
    const current = this.strings[this.currentStringIndex];

    if (this.isDeleting) {
      this.currentCharIndex--;
    } else {
      this.currentCharIndex++;
    }

    this.el.nativeElement.textContent = current.substring(0, this.currentCharIndex);

    let delay = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

    if (!this.isDeleting && this.currentCharIndex === current.length) {
      delay = this.pauseDuration;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentStringIndex = (this.currentStringIndex + 1) % this.strings.length;
      delay = 400;
    }

    this.timeoutId = setTimeout(() => this.tick(), delay);
  }
}
