import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactusForm = this.fb.group({
    person: this.fb.group({
      firstname: [''],
      lastname: ['']  
    }),
    email: [''],
    message: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onClean() {
    this.contactusForm.reset();
  }

  onUpdate() {
    this.contactusForm.patchValue({
      person: {
        firstname: "Juan José",
        lastname: "Granados"
      },
      email: "jgranados@gmail.com",
      message: "Mensaje de prueba"
    });
  }
  
  onSubmit() {
    console.log(this.contactusForm.value);
  }

}
