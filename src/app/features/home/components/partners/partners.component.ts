import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {
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
