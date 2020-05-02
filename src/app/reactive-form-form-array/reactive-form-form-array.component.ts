import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-form-array',
  templateUrl: './reactive-form-form-array.component.html',
  styleUrls: ['./reactive-form-form-array.component.css']
})
export class ReactiveFormFormArrayComponent implements OnInit {
  public form: FormGroup;
  public contactList: FormArray;
  constructor(private fb: FormBuilder) {}
  // contact formgroup
  createContact(): FormGroup {
    return this.fb.group({
      type: ['email', Validators.compose([Validators.required])],
      name: [null, Validators.compose([Validators.required])],
      value: [null, Validators.compose([Validators.required, Validators.email])]
    });
  }

  // returns all form groups under contacts
  get contactFormGroup() {
    return this.form.get('contacts') as FormArray;
  }



  initForm(){
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      organization: [null],
      contacts: this.fb.array([this.createContact()])
    });

    // set contactlist to this field
    this.contactList = this.form.get('contacts') as FormArray;
  }
  ngOnInit() {
    this.initForm()
  }


  // add a contact form group
  addContact() {
    this.contactList.push(this.createContact());
  }

  // remove contact from group
  removeContact(index:number) {
    this.contactList.removeAt(index);
  }

  // triggered to change validation of value field type
  changedFieldType(index:number) {
    let validators = null;

    if (this.getContactsFormGroup(index).controls['type'].value === 'email') {
      validators = Validators.compose([
        Validators.required,Validators.email
     ]);
    }
    else {
      validators = Validators.compose([
        Validators.required,
        // pattern for validating international phone number
        Validators.pattern(new RegExp('^\\+[0-9]?()[0-9](\\d[0-9]{9})$'))
      ]);
    }
    //validators value set in if else block has to be set and updateValueAndValidity otherwise it cant valueted
    this.getContactsFormGroup(index).controls['value'].setValidators(
      validators
    );
    this.getContactsFormGroup(index).controls['value'].updateValueAndValidity();
  }

  validtorReturn(i:number,controlName:string,nature:string){
    return this.getContactsFormGroup(i).controls[controlName].touched && this.getContactsFormGroup(i).controls[controlName].hasError(nature)
  }

  // get the formgroup under contacts form array
  getContactsFormGroup(index:number): FormGroup {
    return this.contactList.controls[index] as FormGroup;
  }

  // method triggered when form is submitted
  submit() {
    console.log(this.form.value);
  }
}
