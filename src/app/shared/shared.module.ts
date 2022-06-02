import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequiredFieldComponent } from './required-field/required-field.component';
import { RequiredSelectComponent } from './required-select/required-select.component';

@NgModule({
  declarations: [RequiredFieldComponent, RequiredSelectComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormsModule, RequiredFieldComponent, RequiredSelectComponent]
})
export class SharedModule {}
