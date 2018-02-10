import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Word } from './word/word';
import { Observable } from 'rxjs/Observable';
import { ENDPOINT } from '../app.constant';

@Injectable()
export class WordsService {

    constructor(public http: Http) {}

    getWords(): Observable<Word[]> {
        return this.http.get(ENDPOINT + '/api/words').map(
            response => response.json().words as Array<Word>
        );
    }
}
