import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  url = 'http://localhost:2643';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };



  constructor(private http: HttpClient) { }

  Contacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url + '/GetAllContacts');
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url + '/GetAllContacts');
  }
  getContactById(contactId: string): Observable<Contact> {
    return this.http.get<Contact>(this.url + '/GetContactById?id=' + contactId);
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.url + '/CreateContact/', contact, this.httpOptions);
  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(this.url + '/UpdateContact?id='+contact.Id, contact, this.httpOptions);
  }

  deleteContactById(contactId: string): Observable<Contact> {
    return this.http.delete<Contact>(this.url + '/RemoveContact?id=' + contactId, this.httpOptions);
  }
}