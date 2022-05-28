import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequiredFieldComponent } from './required-field/required-field.component';
import { AddressComponent } from './address/address.component';
import { PersonalComponent } from './personal/personal.component';
import { RequiredSelectComponent } from './required-select/required-select.component';

@NgModule({
  declarations: [
    RequiredFieldComponent,
    RequiredSelectComponent,
    PersonalComponent,
    AddressComponent,
    AddressComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    FormsModule,
    RequiredFieldComponent,
    RequiredSelectComponent,
    PersonalComponent,
    AddressComponent,
  ],
})
export class SharedModule {}