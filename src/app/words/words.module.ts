import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordsRoutingModule } from './words-routing.module';
import { WordsComponent } from './words.component';
import { WordItemComponent } from 'app/words/word-item/word-item.component';


@NgModule({
    imports: [ 
        CommonModule,
        WordsRoutingModule,
    ],
    declarations: [
        WordsComponent,
        WordItemComponent
    ],
    providers: [ 

    ]
})
export class WordsModule {

}