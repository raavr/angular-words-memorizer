import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordsRoutingModule } from './words-routing.module';
import { WordsComponent } from './words.component';
import { WordItemComponent } from './word-item/word-item.component';
import { KeyboardShortcutComponent } from './keyboard-shortcut/keyboard-shortcut.component';
import { WordsService } from './words.service';


@NgModule({
	imports: [ 
		CommonModule,
		WordsRoutingModule,
	],
	declarations: [
		WordsComponent,
		WordItemComponent,
		KeyboardShortcutComponent
	],
	providers: [
		WordsService
	]
})
export class WordsModule {

}