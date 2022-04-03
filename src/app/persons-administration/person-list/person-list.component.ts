import {Component, OnInit} from '@angular/core';
import {Person} from "../../domain/person";

@Component({
  selector: 'person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {

  persons: Person[] = [
    new Person(1, "Federico", "Difabio", 27),
    new Person(2, "Juan", "Difabio", 14),
    new Person(3, "Roberto", "Difabio", 21),
    new Person(4, "Ricardo", "Difabio", 17)
  ]

  personSelected: Person | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  selectPerson(person: Person | null) {
    this.personSelected = person;
  }

}
