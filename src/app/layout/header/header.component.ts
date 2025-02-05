import {Component, EventEmitter, Output} from '@angular/core';
import {ScrollService} from "../../features/home/services/scroll.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    private scrollService: ScrollService,
    private router: Router) {}

  navigateTo(section: string) {
    // Home sahifasiga o'tish
    this.router.navigate(['/']).then(() => {
      // Sahifa o'zgargach, scroll qilishni kechiktiramiz
      if (section){
        setTimeout(() => {
          this.scrollService.scrollTo(section);
        }, 300); // 300 millisekund kutish
      }
    });
  }


  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen)
  }
}
