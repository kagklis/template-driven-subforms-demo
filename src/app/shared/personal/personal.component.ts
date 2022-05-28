import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class PersonalComponent implements OnInit {
  genderOptions: string[] = [
    'Female',
    'Male',
    'Non-binary',
    'Gender non-conforming',
    'Prefer not to say',
    'Other',
  ];

  constructor() {}

  ngOnInit(): void {}
}
