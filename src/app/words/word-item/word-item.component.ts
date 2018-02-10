import { Component, Input } from '@angular/core';
import { Word } from '../word/word';

@Component({
    selector: 'word-item',
    templateUrl: './word-item.component.html',
    styleUrls: ['./word-item.component.scss']
})
export class WordItemComponent {
    @Input() word: Word;
}