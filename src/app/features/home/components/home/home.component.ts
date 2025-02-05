import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ScrollService} from "../../services/scroll.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private scrollService: ScrollService) {}
  array = [1, 2, 3, 4];
  effect = 'scrollx';

  ngOnInit() {
    // ScrollService orqali kelgan signalni kuzatish
    this.scrollService.scrollToSection$.subscribe(sectionId => {
      if (sectionId) {
        this.scrollToSection(sectionId);
      }
    });
  }

  ngAfterViewInit() {
    // Home sahifasi to'liq yuklangach, scroll qilish
    // (Agar scroll signal oldindan yuborilgan bo'lsa)
    this.scrollService.scrollToSection$.subscribe(sectionId => {
      if (sectionId) {
        this.scrollToSection(sectionId);
      }
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  mattresses: any[] = [
    { id: 1, name: 'Матрас Комфорт', image: 'assets/mattresses/matras1.svg' },
    { id: 2, name: 'Матрас Ортопед', image: 'assets/mattresses/matras2.svg' },
    { id: 3, name: 'Матрас Люкс', image: 'assets/mattresses/matras3.svg' },
    { id: 4, name: 'Матрас Премиум', image: 'assets/mattresses/matras4.svg' },
    { id: 5, name: 'Матрас Ультра', image: 'assets/mattresses/matras5.svg' },
    { id: 6, name: 'Матрас Экстра', image: 'assets/mattresses/matras6.svg' }
  ]


  reviews: any[] = [
    {
      id: 1,
      text: 'Купили матрас Magneto Matras, и это лучшее решение для нашего сна! Очень удобный, ' +
        'спина больше не болит, а качество на высоте. Спасибо за отличный сервис!',
      customerName: 'Анна Иванова',
      image: 'assets/about/Picture.svg'
    },
    {
      id: 2,
      text: 'Я долго искала идеальный матрас, и наконец-то нашла! Magneto Matras дарит ощущение полного расслабления,' +
        ' а материалы действительно качественные. Рекомендую всем!',
      customerName: 'Дмитрий Петров',
      image: 'assets/about/Picture.svg'
    },
    {
      id: 3,
      text: 'Заказали матрас для всей семьи, и все в восторге! Отличная поддержка позвоночника, приятные на ощупь ткани и быстрая доставка. ' +
        'Спасибо Magneto Matras за комфортный сон!',
      customerName: 'Екатерина Смирнова',
      image: 'assets/about/Picture.svg'
    }
  ];

  partners: any[] = [
    { id: 1, logo: 'assets/partners/partner1.svg', name: 'Partner 1' },
    { id: 2, logo: 'assets/partners/partner2.svg', name: 'Partner 2' },
    { id: 3, logo: 'assets/partners/partner3.svg', name: 'Partner 3' },
    { id: 4, logo: 'assets/partners/partner4.svg', name: 'Partner 4' },
    { id: 5, logo: 'assets/partners/partner5.svg', name: 'Partner 5' },
    { id: 6, logo: 'assets/partners/partner6.svg', name: 'Partner 6' },
    { id: 7, logo: 'assets/partners/partner3.svg', name: 'Partner 7' },
    { id: 8, logo: 'assets/partners/partner1.svg', name: 'Partner 8' }
  ];

}
