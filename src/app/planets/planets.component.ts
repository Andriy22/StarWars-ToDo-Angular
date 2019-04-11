import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {PlanetsService} from '../planets.service'
import { HttpClient } from '@angular/common/http';
import {Planet} from '../planet'
@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  allContact: Observable<Planet[]>;
  Test: object[] = [];
  constructor(private Ps : PlanetsService) { }

  ngOnInit() {
    this.loadAllContacts();
  }
  loadAllContacts() {
    for (let index = 1; index < 62; index++) {
      this.Ps.getPlanets(index).subscribe((data)=>{
        this.Test.push(data);
      });;
      
    }
  
  }
}
