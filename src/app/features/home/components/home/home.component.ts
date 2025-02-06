import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ScrollService} from "../../services/scroll.service";
import {Subscription} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private routerSubscription!: Subscription;

  constructor(
    private scrollService: ScrollService,
    private router: Router) {}

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Sahifani yuqoriga qaytarish
      }
    });

    this.scrollService.scrollToSection$.subscribe(sectionId => {
      if (sectionId) {
        this.scrollToSection(sectionId);
      }
    });
  }

  ngAfterViewInit() {
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

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
