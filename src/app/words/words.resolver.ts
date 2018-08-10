import { Injectable } from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { WordsService } from './words.service';
import { Word } from './word/word';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WordsResolver implements Resolve<any> {
  constructor(private wordsService: WordsService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Word[]> {
    const startPoint = route.paramMap.get('startPoint') || 0;
    return this.wordsService.getWords(+startPoint);
  }
}
