import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  messageText: string = '';
  messageType: 'info' | 'error' | 'success' = 'info';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      workingExperience: ['', [Validators.required, this.customNumberValidator(1)]]
    });
  }

  customNumberValidator(decimalPlaces: number) {
    return Validators.pattern(new RegExp(`^\\d+(\\.\\d{0,${decimalPlaces}})?$`));
  }

  onSubmit() {
    if (this.form.valid) {
      this.messageText = 'Form is valid and has been submitted!';
      this.messageType = 'success';
    } else {
      this.messageText = 'Form is not valid, please check the fields.';
      this.messageType = 'error';
    }
  }

  onReset() {
    this.form.reset();
    this.messageText = 'Form has been reset.';
    this.messageType = 'info';
  }
}
