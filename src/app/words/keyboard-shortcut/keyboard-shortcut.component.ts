import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'keyboard-shortcut',
    templateUrl: './keyboard-shortcut.component.html',
    styleUrls: ['./keyboard-shortcut.component.scss']
})
export class KeyboardShortcutComponent {
    isShowing = false;

    @HostListener('document:keydown.h', ['$event'])
    toggleKeyboardShortcut($ev) {
        $ev.preventDefault();
        this.isShowing = !this.isShowing;
    }
}