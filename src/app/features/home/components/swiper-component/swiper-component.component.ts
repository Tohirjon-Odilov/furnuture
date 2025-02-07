import {AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-swiper-component',
  templateUrl: './swiper-component.component.html',
  styleUrl: './swiper-component.component.scss'
})
export class SwiperComponentComponent{
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    navSpeed: 700,
    items: 3,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      424: {
        items: 2
      },
      740: {
        items: 3
      },
    },
    nav: true
  }

  slides = [
    { id: 1,
      text: "I can confidently say they are a top-notch logistics partner. Their commitment to reliability and efficiency has greatly benefited our business. From the moment we started collaborating, they demonstrated a deep understanding of our specific needs and industry.",
      image: 'assets/about/Picture.svg',
      title:"Olga Aleksandrovna",
    },
    { id: 2,
      text: "Что отличает «Дост Логистик» от других, так это безупречная коммуникация и прозрачность. Они держат нас в курсе на каждом этапе цепочки поставок, от получения до доставки. Их система отслеживания обеспечивает удобные для пользователя обновления в режиме реального времени…",
      image: 'assets/about/Picture.svg',
      title:"Azim Pulatov",
    },
    { id: 3,
      text: "Более того, их команда высокопрофессиональная и отзывчивая.Мы обеспечиваем стабильную своевременную доставку, а их внимание к деталям при обращении с нашей продукцией свело к минимуму любой риск повреждения во время транспортировки.",
      image: 'assets/about/Picture.svg',
      title:"Nina Shakirovna",
    },
    { id: 4,
      text: "«Дост Логистик», несомненно, добавила ценности нашему бизнесу, сделав их незаменимой частью нашей цепочки поставок.",
      image: 'assets/about/Picture.svg',
      title:"Bekzod Mirahmedov",
    },
    { id: 5,
      text: "I wholeheartedly recommend them to any company seeking a logistics partner that combines reliability, efficiency, and exceptional customer service.",
      image: 'assets/about/Picture.svg',
      title:"Anna Pitnovinna",
    },
    { id: 6,
      text: "Moreover, their team is highly professional and responsive. Any questions or concerns are addressed promptly. We've experienced consistent on-time deliveries, and their attention to detail in handling our products has minimized any risk of damage during transit.",
      image: 'assets/about/Picture.svg',
      title:"Elbek Normurodov",
    },
    { id: 7,
      text: "Что меня больше всего впечатляет в «Дост Логистик», так это их адаптируемость. Они плавно масштабировали свои услуги, будь то обработка увеличенного объема в пиковые сезоны или поиск экономически эффективных решений для специализированных грузов.",
      image: 'assets/about/Picture.svg',
      title:"Karina Zaitovna",
    }
  ];
}
