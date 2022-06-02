import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  @ViewChild('customerForm') form!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.form.value);
  }
}
