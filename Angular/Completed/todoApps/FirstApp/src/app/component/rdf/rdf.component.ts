import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
// interface FormField {
//   id: number;
//   formField1: { value: any; type: string; disable: boolean; visible: boolean; placeholder: string };
//   formField2: { value: any; type: string; disable: boolean; visible: boolean; placeholder: string };
// }
@Component({
  selector: 'app-rdf',
  templateUrl: './rdf.component.html',
  styleUrls: ['./rdf.component.scss']
})
export class RDFComponent implements OnInit {

  //   public mainForm: {
  //     formFields: FormField[];
  //   } | undefined;

  // ngOnInit() {
  //     this.mainForm = {
  //         formFields: [],
  //     };

  //     // Add an initial form-entry
  //     this.addForm();
  // }

  // public addForm(): void {
  //     this.mainForm?.formFields.push({
  //         id: Date.now(),
  //         formField1: { value: '', type: 'any', disable: false, visible: true, placeholder: '' },
  //         formField2: { value: '', type: 'any', disable: false, visible: true, placeholder: '' },
  //     });
  // }

  // public removeForm(index: number): void {
  //     this.mainForm?.formFields.splice(index, 1);
  // }

  // public submitForm(form:any) {
  //     if (form.valid) {
  //         console.log(form.value);
  //         // ...Now you can submit the data
  //     }
  // }



  empForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.empForm = this.fb.group({
      employees: this.fb.array([])
    });
  }

  employees(): FormArray {
    return this.empForm.get('employees') as FormArray;
  }

  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      skills: this.fb.array([])
    });
  }

  addEmployee() {
    this.employees().push(this.newEmployee());
  }

  removeEmployee(empIndex: number) {
    this.employees().removeAt(empIndex);
  }

  employeeSkills(empIndex: number): FormArray {
    return this.employees()
      .at(empIndex)
      .get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: ''
    });
  }

  addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.empForm.value);
  }
}



