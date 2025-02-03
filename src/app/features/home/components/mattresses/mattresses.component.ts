import { Component } from '@angular/core';
import {Mattress} from "./matresses.model";

@Component({
  selector: 'app-mattresses',
  templateUrl: './mattresses.component.html',
  styleUrl: './mattresses.component.scss'
})
export class MattressesComponent {
  mattresses: Mattress[] = [
    { id: 1, name: 'MODEL S29 MATRAS', image: 'assets/mattresses/matras1.svg', price: 500, date: new Date('2024-01-10') },
    { id: 2, name: 'MODEL P22 MATRAS', image: 'assets/mattresses/matras2.svg', price: 400, date: new Date('2023-12-15') },
    { id: 3, name: 'MODEL A4 MATRAS', image: 'assets/mattresses/matras3.svg', price: 700, date: new Date('2024-02-01') },
    { id: 4, name: 'MODEL R21 MATRAS', image: 'assets/mattresses/matras4.svg', price: 450, date: new Date('2023-11-20') },
    { id: 5, name: 'MODEL S1 MATRAS', image: 'assets/mattresses/matras5.svg', price: 600, date: new Date('2024-01-23') },
    { id: 6, name: 'MODEL S5 MATRAS', image: 'assets/mattresses/matras5.svg', price: 600, date: new Date('2024-01-27') },
    { id: 7, name: 'MODEL S8 MATRAS', image: 'assets/mattresses/matras3.svg', price: 600, date: new Date('2024-01-21') },
    { id: 8, name: 'MODEL S9 MATRAS', image: 'assets/mattresses/matras1.svg', price: 600, date: new Date('2024-01-22') },
    { id: 9, name: 'MODEL S20 MATRAS', image: 'assets/mattresses/matras2.svg', price: 600, date: new Date('2024-01-23') },
    { id: 10, name: 'MODEL 11 MATRAS', image: 'assets/mattresses/matras3.svg', price: 600, date: new Date('2024-01-25') },
    { id: 11, name: 'MODEL 21 MATRAS', image: 'assets/mattresses/matras4.svg', price: 600, date: new Date('2024-01-27') },
    { id: 12, name: 'MODEL S6 MATRAS', image: 'assets/mattresses/matras5.svg', price: 600, date: new Date('2024-01-24') },
    { id: 13, name: 'MODEL S1 MATRAS', image: 'assets/mattresses/matras4.svg', price: 600, date: new Date('2024-01-22') },
    { id: 14, name: 'MODEL S22 MATRAS', image: 'assets/mattresses/matras1.svg', price: 600, date: new Date('2024-01-21') },
    { id: 15, name: 'MODEL S33 MATRAS', image: 'assets/mattresses/matras2.svg', price: 600, date: new Date('2024-01-20') },
    { id: 16, name: 'MODEL S33 MATRAS', image: 'assets/mattresses/matras4.svg', price: 600, date: new Date('2024-01-20') },
    { id: 17, name: 'MODEL S77 MATRAS', image: 'assets/mattresses/matras1.svg', price: 600, date: new Date('2024-01-20') },
    { id: 18, name: 'MODEL S55 MATRAS', image: 'assets/mattresses/matras3.svg', price: 600, date: new Date('2024-01-20') },
    { id: 19, name: 'MODEL S44 MATRAS', image: 'assets/mattresses/matras1.svg', price: 600, date: new Date('2024-01-20') },
    { id: 20, name: 'MODEL S56 MATRAS', image: 'assets/mattresses/matras1.svg', price: 600, date: new Date('2024-01-20') },
    { id: 21, name: 'MODEL S61 MATRAS', image: 'assets/mattresses/matras3.svg', price: 600, date: new Date('2024-01-20') },
    { id: 22, name: 'MODEL S62 MATRAS', image: 'assets/mattresses/matras2.svg', price: 600, date: new Date('2024-01-22') },
    { id: 23, name: 'MODEL S63 MATRAS', image: 'assets/mattresses/matras5.svg', price: 600, date: new Date('2024-01-11') },
    { id: 24, name: 'MODEL S65 MATRAS', image: 'assets/mattresses/matras3.svg', price: 600, date: new Date('2024-01-12') },
    { id: 25, name: 'MODEL S67 MATRAS', image: 'assets/mattresses/matras1.svg', price: 600, date: new Date('2024-01-12') },
    { id: 26, name: 'MODEL S65 MATRAS', image: 'assets/mattresses/matras2.svg', price: 600, date: new Date('2024-01-13') },
    { id: 27, name: 'MODEL S63 MATRAS', image: 'assets/mattresses/matras5.svg', price: 600, date: new Date('2024-01-10') },
  ];


  filteredMattresses: Mattress[] = [...this.mattresses];

  filter(type: string) {
    switch (type) {
      case 'cheap':
        this.filteredMattresses = [...this.mattresses].sort((a, b) => a.price - b.price);
        break;
      case 'expensive':
        this.filteredMattresses = [...this.mattresses].sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        this.filteredMattresses = [...this.mattresses].sort((a, b) => b.date.getTime() - a.date.getTime());
        break;
      default:
        this.filteredMattresses = [...this.mattresses];
    }
  }

}
