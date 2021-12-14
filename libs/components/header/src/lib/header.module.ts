import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import {
    FontAwesomeModule,
    FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [CommonModule, RouterModule, BrowserModule, FontAwesomeModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(faUserCircle);
        library.addIcons(faSignOutAlt);
    }
}
