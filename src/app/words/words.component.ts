import { Component, HostListener } from '@angular/core';
import { Word } from './word/word';
import { Router, ActivatedRoute } from '@angular/router';
import { WordsService } from './words.service';

@Component({
    selector: 'words',
    templateUrl: './words.component.html',
    styleUrls: ['./words.component.scss']
})
export class WordsComponent {
    words: Word[];
    currentWord: Word;
    currentIdx = 0;

    constructor(private router: Router, private route: ActivatedRoute, private wordsService: WordsService) {

    }

    private updateCurrentWord() {
        this.currentWord = this.words[this.currentIdx];
    }

    @HostListener('document:keydown.ArrowRight', ['$event'])
    moveRight() {
        this.currentIdx++;
        if(this.currentIdx >= this.words.length - 1) {
            this.currentIdx = this.words.length - 1;
        }
        this.updateCurrentWord();
    }

    @HostListener('document:keydown.ArrowLeft', ['$event'])
    moveLeft() {
        this.currentIdx--;
        if(this.currentIdx < 0) {
            this.currentIdx = 0;
        }
        this.updateCurrentWord();
    }

    ignoreWord(word: Word) {
        const confirmed = window.confirm('Do you really want to ignore this word?');

        if(confirmed) {
            this.wordsService.ignoreWord(word.id).subscribe(() => {
                const idx = this.words.indexOf(word);
                if(idx !== -1) {
                    this.words.splice(idx, 1);
                    if(this.currentIdx === this.words.length) {
                        this.currentIdx--;
                    }
                    this.updateCurrentWord();
                }
            });
        }
    }

    ngOnInit() {
        this.route.data
            .subscribe((data: { words: Word[] }) => { 
                this.words = data.words; 
                this.currentWord = this.words[0];
            });
    }

}