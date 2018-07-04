import { Component, HostListener } from '@angular/core';
import { Word } from './word/word';
import { WordsApi } from './word/words-api';
import { Router, ActivatedRoute } from '@angular/router';
import { WordsService } from './words.service';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'words',
    templateUrl: './words.component.html',
    styleUrls: ['./words.component.scss']
})
export class WordsComponent {
    words: Word[];
    currentWord: Word;
    currentIdx = 0;
    pageNumber = 0;
    unsub$ = new Subject<any>();

    constructor(private router: Router, private route: ActivatedRoute, private wordsService: WordsService) {

    }

    private updateCurrentWord() {
        this.currentWord = this.words[this.currentIdx];
    }

    @HostListener('document:keydown.ArrowRight', ['$event'])
    moveRight() {
        if (this.currentIdx < this.words.length - 1) {
            this.currentIdx++;
            this.updateCurrentWord();
            this.getMoreWords();
        }
    }

    @HostListener('document:keydown.ArrowLeft', ['$event'])
    moveLeft() {
        if (this.currentIdx > 0) {
            this.currentIdx--;
            this.updateCurrentWord();
        }
    }

    ignoreWord(word: Word) {
        const confirmed = window.confirm('Do you really want to ignore this word?');

        if (confirmed) {
            this.wordsService.ignoreWord(word.id)
                .takeUntil(this.unsub$)
                .subscribe(() => {
                    const idx = this.words.indexOf(word);
                    if (idx !== -1) {
                        this.words.splice(idx, 1);
                        if (this.currentIdx === this.words.length) {
                            this.currentIdx--;
                        }
                        this.updateCurrentWord();
                    }
                });
        }
    }

    getMoreWords() {
        if (this.currentIdx >= this.words.length - 3) {
            this.wordsService.getWords(++this.pageNumber)
                .takeUntil(this.unsub$)
                .subscribe((words) => {
                    this.words.push(...words);
                });
        }
    }

    ngOnInit() {
        this.route.paramMap
            .subscribe((param) => {
                this.pageNumber = +param.get('startPoint');
                this.currentIdx = 0;
            });

        this.route.data
            .subscribe((data: { words: Word[] }) => {
                this.words = data.words;
                this.currentWord = this.words[0];
            });
    }

    ngOnDestroy() {
        this.unsub$.next();
        this.unsub$.complete();
    }

}