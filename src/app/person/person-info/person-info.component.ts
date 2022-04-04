import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PersonService} from "../../persons-administration/person.service";
import {Person} from "../../domain/person";

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {
  public person: Person | undefined;

  constructor(private route: ActivatedRoute,
              private personService: PersonService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log("El id es:" + params.get('id'));
      let paramId = params.get('id');
      if (paramId != null) {
        let id = parseInt(paramId);
        this.personService.findOne(id).subscribe(p =>
          this.person = p)
      }
    })
  }

}
