import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollToSectionSource = new BehaviorSubject<string | null>(null);
  scrollToSection$ = this.scrollToSectionSource.asObservable();

  scrollTo(sectionId: string) {
    this.scrollToSectionSource.next(sectionId);
  }
}
