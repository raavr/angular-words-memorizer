import { Component } from '@angular/core';
import { Word } from './word/word';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'words',
    templateUrl: './words.component.html',
    styleUrls: ['./words.component.scss']
})
export class WordsComponent {
    words: Word[];
    currentWord: Word;
    currentIdx = 0;

    constructor(private router: Router, private route: ActivatedRoute) {

    }

    moveRight() {
        this.currentIdx++;
        if(this.currentIdx >= this.words.length - 1) {
            this.currentIdx = this.words.length - 1;
        }
        this.currentWord = this.words[this.currentIdx];
    }

    moveLeft() {
        this.currentIdx--;
        if(this.currentIdx < 0) {
            this.currentIdx = 0;
        }
        this.currentWord = this.words[this.currentIdx];
    }

    ngOnInit() {
        this.route.data
            .subscribe((data: { words: Word[] }) => { 
                this.words = data.words; 
                this.currentWord = this.words[0];
            });
    }

}