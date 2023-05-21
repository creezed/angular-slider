import { Component, OnInit } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { Slide } from './slider/type/slide.type';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { SliderMode } from './slider/shared/consts/slider-mode.type';
import { NgForOf } from '@angular/common';
import { SelectMode } from '../shared/types/select-mode.type';

@Component({
  standalone: true,
  imports: [
    SliderComponent,
    RadioButtonModule,
    FormsModule,
    PaginatorModule,
    InputNumberModule,
    ButtonModule,
    NgForOf,
  ],
  selector: 'slider-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  selectedMode: SelectMode;
  modes: SelectMode[] = [
    { label: 'Слева направо', value: SliderMode.FromLeftToRight },
    { label: 'Справа налево', value: SliderMode.FromRightToLeft },
  ];
  delayAutoScroll = 1;
  autoScroll = false;

  slides: Slide[] = [
    {
      src: 'https://images.unsplash.com/photo-1682687218904-de46ed992b58?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NDg2ODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NDE0MzQxOHw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080',
    },
    {
      src: 'https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NDg2ODV8MXwxfGFsbHwyfHx8fHx8Mnx8MTY4NDE0MzQxOHw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080',
    },
    {
      src: 'https://images.unsplash.com/photo-1683958467836-6940e0e0691b?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NDg2ODV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4NDE0MzQxOHw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080',
    },
    {
      src: 'https://images.unsplash.com/photo-1682687220499-d9c06b872eee?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w0NDg2ODV8MXwxfGFsbHw3fHx8fHx8Mnx8MTY4NDE0MzQxOHw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080',
    },
  ];

  ngOnInit() {
    this.selectedMode = this.modes[0];
  }
}
