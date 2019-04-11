import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  allContact: Observable<Contact[]>;
  cont: Contact;

  constructor(private cS: ContactsService) { }

  ngOnInit() {
    this.loadAllContacts();
   
  }

  loadAllContacts() {
    this.allContact= this.cS.getContacts();
  }
  
  BanContact(contact: Contact){
    this.cont = contact;
    console.log(this.cont);
    this.cont.isBlocked=!this.cont.isBlocked;
    this.cS.updateContact(this.cont).subscribe(()=>{
      this.loadAllContacts();
      this.cont = null;
    });

  }

  deleteContact(contactId: string) {
    if (confirm('Are you sure you want to delete this ?')) {
      this.cS.deleteContactById(contactId).subscribe(() => {
        this.loadAllContacts();
      });
    }
  }

 
}
