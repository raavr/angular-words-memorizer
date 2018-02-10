import { Component, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { Word } from '../word/word';
import { WordsService } from 'app/words/words.service';

@Component({
    selector: 'word-item',
    templateUrl: './word-item.component.html',
    styleUrls: ['./word-item.component.scss']
})
export class WordItemComponent {
    @Input() word: Word;
    @Output() ignore = new EventEmitter<Word>();
    isAnsVisible: Boolean = false;

    @HostListener('document:keydown.space', ['$event'])
    toggleAns() {
        this.isAnsVisible = !this.isAnsVisible;
    }

    @HostListener('document:keydown.i', ['$event'])
    ignoreWord() {
        this.ignore.emit(this.word);
    }

    ngOnChanges(changes) {
        this.isAnsVisible = false;
    }
}