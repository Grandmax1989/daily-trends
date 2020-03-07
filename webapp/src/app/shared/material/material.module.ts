import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';


/*
* Module which imports all Material components needed in the webapp
*/

const MaterialComponents = [
   FlexLayoutModule,
   MatButtonModule,
   MatCardModule,
   MatCheckboxModule,
   MatDialogModule,
   MatDividerModule,
   MatExpansionModule,
   MatGridListModule,
   MatIconModule,
   MatInputModule,
   MatMenuModule,
   MatPaginatorModule,
   MatDatepickerModule,
   MatSelectModule,
   MatSlideToggleModule,
   MatTabsModule,
   MatTableModule,
   MatSnackBarModule,
   MatBottomSheetModule,
   MatGridListModule,
   MatProgressSpinnerModule,
   MatToolbarModule,
   MatListModule,
   MatTooltipModule
];

@NgModule({
   exports: [MaterialComponents],
   providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }]

})

export class MaterialModule {
}
