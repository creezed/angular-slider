import {
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide } from './type/slide.type';
import { transition, trigger, useAnimation } from '@angular/animations';
import { scaleIn, scaleOut } from './animations/slider-scale.animation';
import { ButtonModule } from 'primeng/button';
import { SliderMode } from './shared/consts/slider-mode.type';
import { prevClick } from './shared/utils/prev-click/prev-click.util';
import { nextClick } from './shared/utils/next-click/next-click.util';

@Component({
  standalone: true,
  selector: 'slider-root-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['slide.style.scss'],
  imports: [CommonModule, ButtonModule],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', useAnimation(scaleIn)),
      transition('* => void', useAnimation(scaleOut)),
    ]),
  ],
})
export class SliderComponent implements OnInit, OnDestroy, OnChanges {
  @Input() slides: Slide[];
  @Input() intervalTime?: number;
  @Input() autoScroll?: boolean;
  @Input() mode?: string = SliderMode.FromLeftToRight;
  @HostBinding('class') _classes = 'flex flex-column gap-4';

  currentSlide = 0;

  private interval: any;

  ngOnInit(): void {
    const { intervalTime, autoScroll } = this;
    if (autoScroll && intervalTime) {
      this.startAutoScroll();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const autoScrollChanged = changes['autoScroll'];

    if (autoScrollChanged?.currentValue) {
      this.startAutoScroll();
    }

    if (!autoScrollChanged?.currentValue) {
      this.stopAutoScroll();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  onPreviousClick() {
    if (this.mode === SliderMode.FromLeftToRight) {
      this.currentSlide = prevClick(this.currentSlide, this.slides.length);
    }
    if (this.mode === SliderMode.FromRightToLeft) {
      this.currentSlide = nextClick(this.currentSlide, this.slides.length);
    }
  }

  onNextClick() {
    if (this.mode === SliderMode.FromLeftToRight) {
      this.currentSlide = nextClick(this.currentSlide, this.slides.length);
    }
    if (this.mode === SliderMode.FromRightToLeft) {
      this.currentSlide = prevClick(this.currentSlide, this.slides.length);
    }
  }

  startAutoScroll() {
    if (this.autoScroll) {
      this.interval = setInterval(() => {
        this.onNextClick();
      }, this.intervalTime);
    }
  }

  stopAutoScroll() {
    clearInterval(this.interval);
  }
}
