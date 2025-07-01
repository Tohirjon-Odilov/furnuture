import { Component } from '@angular/core';

@Component({
  selector: 'app-mattress-detail',
  templateUrl: './mattress-detail.component.html',
  styleUrl: './mattress-detail.component.scss'
})
export class MattressDetailComponent {
  featureData = [
    {
      id: 1,
      icon: 'assets/icons/spring.svg',
      description: 'Пружинный блок «Bonnel» высокой плотности',
      isBackgroundImage: false,
    },
    {
      id: 2,
      icon: 'assets/icons/mattress.svg',
      description: 'Высококачественный ковер, толщина 0.5 см, 2 слоя',
      isBackgroundImage: false,
    },
    {
      id: 3,
      icon: 'assets/icons/coil.svg',
      description: 'Z-образные пружины с интервалом 25 см с каждой стороны',
      isBackgroundImage: false,
    },
    {
      id: 4,
      icon: 'assets/icons/fabric.svg',
      description: 'Хлопковая ткань толщиной 1 см',
      isBackgroundImage: false,
    },
  ];

  socialIcons = [
    { src: 'assets/icons/instagram.svg', alt: 'Instagram' },
    { src: 'assets/icons/facebook.svg', alt: 'Facebook' },
    { src: 'assets/icons/twitter.svg', alt: 'Twitter' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
