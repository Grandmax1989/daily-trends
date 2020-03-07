import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material/material.module';
import { HeaderComponent } from './components/header.component';


@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        HeaderComponent,

    ],
    providers: [],
})
export class HeaderModule { }
