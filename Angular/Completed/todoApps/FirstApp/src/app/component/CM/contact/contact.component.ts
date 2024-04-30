import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/CM/contact';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contact = new Contact();


  //Form Builder
  contactForm!: FormGroup;

  constructor(
    private cService: TaskService,
    private fb: FormBuilder) { }

  ngOnInit(): void {

    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      number: this.fb.array([])
    })
  }

  get number() {
    return this.contactForm.get('number') as FormArray;
  }

  addNumbers() {
    this.number.push(this.fb.control(''));
  }
  newNumber(): FormGroup {
    return this.fb.group({
      Type: ['HOME','WORK','OFFICE','PERSONAL'],
      number: ['']
    });
  }
  removeNumber(e: number) {
    this.number.removeAt(e);
  }
  onSubmit() {
    console.log(this.contactForm.value);
    const submit = this.cService.createContact(this.contactForm.value).subscribe((res)=>{
      this.contact = this.contactForm.value
      console.log(`contact: ${this.contact}`);
      
      res = this.contactForm.value;
      console.log(`Response data : ${res}`);
      
    })
  }



  // without reload
  /* reloadCurrentRoute() {
     let currentUrl = this.router.url;
     this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
         this.router.navigate([currentUrl]);
     });
 */
}
