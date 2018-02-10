import { Component, Input, HostListener } from '@angular/core';
import { Word } from '../word/word';

@Component({
    selector: 'word-item',
    templateUrl: './word-item.component.html',
    styleUrls: ['./word-item.component.scss']
})
export class WordItemComponent {
    @Input() word: Word;
    isAnsVisible: Boolean = false;

    @HostListener('document:keydown.space', ['$event'])
    toggleAns() {
        this.isAnsVisible = !this.isAnsVisible;
    }

    ngOnChanges(changes) {
        this.isAnsVisible = false;
    }
}