import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',

})
export class SwitchesPageComponent implements OnInit{

  constructor(private fb: FormBuilder){}


  public myForm: FormGroup = this.fb.group({
    gender: ['M',Validators.required],
    wantNotifications: [ true, Validators.required],
    termsAndConditions: [ false, Validators.requiredTrue]
  });

  public person = {
    gender: 'F',
    wantNotifications: false,
  }

  ngOnInit(): void{
    this.myForm.reset(this.person);
  }

  isValidField( field: string): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  onSave(){
    if (this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    const { termsAndConditions, ...newPerson} = this.myForm.value; // del formualrio estamos descomponido sus atributos y en newPerson estaran todos los atributos menos termsAndConditions
    this.person = newPerson;
    console.log(this.person);
  }
}
