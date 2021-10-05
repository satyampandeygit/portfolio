import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  showExperienceContent: boolean = true;
  showProjectContent: boolean = false;
  showEducationContent: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showExperienceContents(){
    this.showExperienceContent = true;
    this.showProjectContent = false;
    this.showEducationContent = false;
  }

  showProjectContents(){
    this.showExperienceContent = false;
    this.showProjectContent = true;
    this.showEducationContent = false;
  }

  showEducationContents(){
    this.showExperienceContent = false;
    this.showProjectContent = false;
    this.showEducationContent = true;
  }

}
