import { Component, OnInit, OnDestroy, AfterViewInit  } from '@angular/core';
import { ViewportScroller } from "@angular/common";

import { ResumeService } from '@services/resume.service';
import { NotesService } from '@services/notes.service';
import { ControlerService } from '@services/controler.service';

import { apiLogoUrl } from '@core/inputs';
import { experiencesPages } from '@core/inputs';

import { interval, Subscription } from 'rxjs';
import { startWith  } from 'rxjs/operators';

import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { trigger, state, animate, transition, style } from '@angular/animations';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    // TODO refactor!
    trigger('fadeInOut', [
      state('in', style({opacity: 0})),
      transition(':enter', [
        style({opacity: '0'}),
        animate('600ms ease-in-out', style({opacity: '1'}))
      ]),
    ]),
    trigger('expandCollapse', [
      state('open', style({height: '100%', opacity: 1})),
      state('closed', style({height: 0, opacity: 0})),
      transition('* => *', [animate('1000ms')])
  ]),
  ]
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewInit  {
  fragment: string = '';

  apiImgUrl = apiLogoUrl;
  activityIdFromActivityComponents!: string;

  // resume center bar
  generalData: any;

  jobsData!: any;
  personalProjectsData!: any;
  volunteersData!: any;

  skillsData!: any;
  isActivitiesDataAvailable = false;

  isDataAvailable = false;

  experiencesTopics: any[] = experiencesPages;


  isAnchorExistsChecker = interval(1000); // observable which run all the time
  isAnchorExistsCheckerSubscription!: Subscription;

  resumeDataSubscription!: Subscription;
  activitiesFilteredSubscription!: Subscription;
  routeSubscription!: Subscription;

  constructor(
    private controlerService: ControlerService,
    private resumeService: ResumeService,
    private notesService: NotesService,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) {

    // to get the data properties from routes (app.module.ts)
    this.titleService.setTitle(this.activatedRoute.snapshot.data.title);

    this.resumeDataSubscription = this.resumeService.resumeData.subscribe(
      (data) => {
        // this.contactData = data.contact;
        // this.degreesData = data.education;
        this.generalData = data.general;
        // this.languagesData = data.languages;
        // this.profilData = data.profil;
        // this.trainingsData = data.trainings;
        // this.summaryData = data.profil.carrier_summary;
        // this.qualitiesData = data.profil.qualities;
        // this.publicationsData = data.research_work;

        this.isDataAvailable = true;
      }
    );

    this.activitiesFilteredSubscription = this.resumeService.activitiesFilteredData.subscribe(
      (data) => {

        this.jobsData = data.activities_data.jobs;
        this.personalProjectsData = data.activities_data.personal_projects;
        this.volunteersData = data.activities_data.volunteers;
        this.skillsData = data.skills_data;
        this.isActivitiesDataAvailable = true;

        this.pushActivitiesAvailable(data.activities_data)

      }
    );


    this.routeSubscription = this.activatedRoute.fragment.subscribe(
      (fragment) => {
        if (fragment) {
          this.fragment = fragment
        }
      }
    );

   }

  ngOnInit(): void {
    this.resumeService.pullResumeGeneralData();
    this.sendResumeSubMenus()
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.resumeDataSubscription.unsubscribe();
    this.activitiesFilteredSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  sendResumeSubMenus(): void {
    this.controlerService.pullSubMenus(this.experiencesTopics)
  }

  sendPathNotesLink(notePath: string): void {
    this.notesService.pullNotesData(notePath);
  }

  sendActivityId(activityId: string): void {
    this.activityIdFromActivityComponents = activityId;
  }

  pushActivitiesAvailable(activities: any[]): void {
    this.resumeService.pullActivitiesAvailable(activities);
  }

}
