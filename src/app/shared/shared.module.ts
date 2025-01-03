import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppMaterialModule,
    ErrorDialogComponent
  ],
  exports: [
    ErrorDialogComponent
  ]
})
export class SharedModule { }
