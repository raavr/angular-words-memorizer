import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Word } from './word/word';
import { Observable } from 'rxjs/Observable';
import { ENDPOINT } from '../app.constant';
import { LIMIT_PER_PAGE } from '../app.constant';

@Injectable()
export class WordsService {

    constructor(public http: Http) {}

    getWords(page = 0, limit = LIMIT_PER_PAGE): Observable<Word[]> {
        return this.http.get(ENDPOINT + '/api/words', { params: { limit: limit, page: page}}).map(
            response => response.json().words as Array<Word>
        );
    }

    ignoreWord(wordId): Observable<number> {
        return this.http.put(ENDPOINT + '/api/word/', { wordId : wordId }).map(
            response => response.status
        );
    }
}
