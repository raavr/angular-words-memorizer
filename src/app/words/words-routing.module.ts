import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { WordsComponent } from './';
import { WordsService } from './words.service';
import { WordsResolver } from './words.resolver';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', redirectTo: 'words', pathMatch: 'full' },
            { 
                path: 'words',
                children: [
                    { path: '', component: WordsComponent, resolve: { words: WordsResolver } },
                    { path: ':startPoint', component: WordsComponent, resolve: { words: WordsResolver } }
                ]
            }
        ])
    ],
    exports: [ RouterModule ],
    providers: [ WordsService, WordsResolver ]
})
export class WordsRoutingModule {

}