import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
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
}
