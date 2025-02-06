import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {ScrollService} from "../../features/home/services/scroll.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnDestroy {
  private routerSubscription!: Subscription;

  constructor(
    private scrollService: ScrollService,
    private router: Router
  ) {}

  navigateTo(section: string) {
    this.router.navigate(['/']).then(() => {
      if (section){
        setTimeout(() => {
          this.scrollService.scrollTo(section);
          this.isMenuOpen = false;
        }, 300);
      }
    });
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen)
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
