import {Injectable} from '@angular/core';
import {Person} from "../domain/person";
import {filter, mergeMap, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() {
  }

  public findAll(): Observable<Person[]> {
    return of(personList);
  }
  public findOne(id: number): Observable<Person> {
    return of(personList).pipe(mergeMap(p => p),
      filter(person => person.id === id))
  }
}


export const personList: Person[] =
  [
    new Person(1, "Federico", "Difabio", 27),
    new Person(2, "Juan", "Perez", 14),
    new Person(3, "Roberto", "Lopez", 21),
    new Person(4, "Ricardo", "Darin", 17)
  ]
