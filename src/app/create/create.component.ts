import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  dataSaved = false;
  contactForm: FormGroup;
  ContactIdUpdate = null;
  message = null;
  id:string;

  constructor(private fb: FormBuilder, private cS: ContactsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      FirstName: ['',[Validators.required]],
      LastName:['',[Validators.required]],
      Phone:['',[Validators.required]],
      BirthDay:['',[Validators.required]],
      Ava:['',[Validators.required]]
    })
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadContactToEdit(this.id);
  }

 onFormSubmit() {
    this.dataSaved = false;
    const contact = this.contactForm.value;
    this.CreateContact(contact);
    this.contactForm.reset();
  }
  CreateContact(contact: Contact) {
    if (this.ContactIdUpdate == null) {
      this.cS.createContact(contact).subscribe(
        () => {
          this.dataSaved = true;
          this.message = 'Record saved Successfully';
          console.log("OK");
          this.ContactIdUpdate = null;
          this.contactForm.reset();
        }
      );
    } else {
      contact.Id = this.ContactIdUpdate;
      this.cS.updateContact(contact).subscribe(() => {
        this.dataSaved = true;
        this.message = 'Record Updated Successfully';
        this.ContactIdUpdate = null;
        this.contactForm.reset();
      });
    }
  }

  loadContactToEdit(contactId: string) {
    this.cS.getContactById(contactId).subscribe( w => {
      this.message = null;
      this.dataSaved = false;
      this.ContactIdUpdate = w.Id;

      this.contactForm.controls.FirstName.setValue(w.FirstName);
      this.contactForm.controls.LastName.setValue(w.LastName);
      this.contactForm.controls.Phone.setValue(w.Phone);
      this.contactForm.controls.BirthDay.setValue(w.BirthDay);
      this.contactForm.controls.Ava.setValue(w.Ava);
    });
  }

  resetForm() {
    this.contactForm.reset();
    this.message = null;
    this.dataSaved = false;
  }

}
