import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subscription } from 'rxjs';

import { skillIcon, arrowDownIcon, expandIcon } from '@shared/inputs';

import { ResumeService } from '@services/resume.service';


@Component({
  selector: 'app-rightbar-skills',
  templateUrl: './rightbar-skills.component.html',
  styleUrls: ['./rightbar-skills.component.scss']
})
export class RightbarSkillsComponent implements OnInit, OnDestroy {
  @Input() skillsData: any;
  @Input() isActivitiesDataAvailable: any;


  skillsCategories = {
    technics: 'Techniques',
    themes: 'Thématiques',
    tools: 'Outils'
  };

  skillIcon = skillIcon;
  expandIcon = expandIcon;
  arrowDownIcon = arrowDownIcon;

  skillsDataSubscription!: Subscription;


  constructor(
    // private resumeService: ResumeService
  ) {

    // this.skillsDataSubscription = this.resumeService.skillsFilteredData.subscribe(
    //   (data) => {
    //     this.skillsData = data;

    //     this.isDataAvailable = true;
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log('error');
    //     this.isDataAvailable = false;

    //   }
    // );

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
