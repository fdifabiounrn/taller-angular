import {Component, OnInit} from '@angular/core';
import {Person} from "../../domain/person";
import {Router} from "@angular/router";
import {PersonService} from "../../persons-administration/person.service";

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {

  persons: Person[] = [];

  constructor(private router: Router,
              private personService: PersonService) {
  }

  ngOnInit(): void {
    this.personService.findAll().subscribe(list => this.persons = list);
  }


  goToDetail(p: Person) {
    this.router.navigate(['detail', p.id])
  }
}
