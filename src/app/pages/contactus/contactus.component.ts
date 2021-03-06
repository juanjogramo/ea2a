import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactusForm = this.fb.group({
    person: this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]  
    }),
    email: ['', [Validators.required, Validators.email]],
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
    if (this.contactusForm.valid) {
      console.log(this.contactusForm.value);
    } else {
      alert("Formulario no válido");
    }
  }

}
