import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  services = { };

  constructor(private config: ConfigService) { }

  ngOnInit() {

    this.services = this.getServices();

  }

  getServices() {

    return this.config.getConfig().services;

  }

}
