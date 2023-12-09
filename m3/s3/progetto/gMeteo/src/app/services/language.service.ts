import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Languages } from '../languages';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  langSbj: BehaviorSubject<string> = new BehaviorSubject('it')
  language$ = this.langSbj.asObservable()
  setLanguage(lang: string) {
    if (Languages.availableLanguages.includes(lang)) this.langSbj.next(lang)
  }
  constructor() { }
}
