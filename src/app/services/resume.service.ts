import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { apiUrl } from '@shared/inputs';


@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  ErrorResumeDataApiFound: Subject<string> = new Subject<string>();

  private apiUrlResumeData = apiUrl + 'resume_static_data';
  resumeData: Subject<any> = new Subject<any>();
  private apiUrlContactData = apiUrl + 'contact_data';
  contactData: Subject<any> = new Subject<any>();
  private apiUrlGeneralData = apiUrl + 'general_data';
  generalData: Subject<any> = new Subject<any>();
  private apiUrlFullSkillsData = apiUrl + 'full_skills_data';
  fullSkillsData: Subject<any> = new Subject<any>();

  private apiUrlGraphData = apiUrl + 'activities_graph_data?';
  errorActivitiesChartApiFound: Subject<string> = new Subject<string>();
  ActivitiesChartData: Subject<any> = new Subject<any>();

  // deprecated
  private apiUrlSkillsFilteredData = apiUrl + 'skills_filtered?';
  errorUrlSkillsFilteredApiFound: Subject<string> = new Subject<string>();
  skillsFilteredData: Subject<any> = new Subject<any>();

  private apiUrlActivitiesFilteredData = apiUrl + 'activities_filtered?';
  errorUrlActivitiesFilteredApiFound: Subject<string> = new Subject<string>();
  activitiesFilteredData: Subject<any> = new Subject<any>();

  activityId: Subject<string> = new Subject<string>();

  activitiesAvailable: Subject<any> = new Subject<any>();

  scrollToTop: Subject<boolean> = new Subject<boolean>();

  constructor(
      private http: HttpClient
  ) {}

  pullActivitiesAvailable(activities: any[]): void {
    this.activitiesAvailable.next(activities);
  }

  pullActivityIdToPreselectNodeGraph(activityId: string): void {
    this.activityId.next(activityId);
  }

  pullResumeGeneralData(): void {

    this.http.get<any>(this.apiUrlResumeData).subscribe({
      complete: () => {
      },
      error: error => {
        // TODO improve error message, but API need improvments
        this.ErrorResumeDataApiFound.next(error.error.message);
      },
      next: response => {
        // is null only if query return a 204 error (empty result)
        if (response !== null) {
          this.resumeData.next(response);
        }
      },
    });
  }

  pullContactData(): void {

    this.http.get<any>(`${this.apiUrlContactData}`).subscribe({
      complete: () => {
      },
      error: error => {
        // TODO improve error message, but API need improvments
        this.ErrorResumeDataApiFound.next(error.error.message);
      },
      next: response => {
        // is null only if query return a 204 error (empty result)
        if (response !== null) {
          this.contactData.next(response);
        }
      },
    });
  }

  pullGeneralData(): void {

    this.http.get<any>(`${this.apiUrlGeneralData}`).subscribe({
      complete: () => {
      },
      error: error => {
        // TODO improve error message, but API need improvments
        this.ErrorResumeDataApiFound.next(error.error.message);
      },
      next: response => {
        // is null only if query return a 204 error (empty result)
        if (response !== null) {
          this.generalData.next(response);
        }
      },
    });
  }


  pullFullSkillsData(): void {

    this.http.get<any>(`${this.apiUrlFullSkillsData}`).subscribe({
      complete: () => {
      },
      error: error => {
        // TODO improve error message, but API need improvments
        this.ErrorResumeDataApiFound.next(error.error.message);
      },
      next: response => {
        // is null only if query return a 204 error (empty result)
        if (response !== null) {
          this.fullSkillsData.next(response);
        }
      },
    });
  }



  pullActivitiesGraphData(
    isTechnics: boolean | string,
    isThemes: boolean | string,
    isTools: boolean | string,
    currentDateValue: number,
    grouperProjects: boolean | string,
    grouperJobs: boolean | string,
    grouperVolunteers: boolean | string,
  ): void {
    this.http.get<any>(
      `${this.apiUrlGraphData}technics=${isTechnics}&themes=${isThemes}&tools=${isTools}&start_date=${currentDateValue}&group_projects=${grouperProjects}&group_jobs=${grouperJobs}&group_volunteers=${grouperVolunteers}`
    ).subscribe({
      complete: () => {
      },
      error: error => {
        // TODO improve error message, but API need improvments
        this.errorActivitiesChartApiFound.next(error.error.message);
      },
      next: response => {
        // is null only if query return a 204 error (empty result)
        if (response !== null) {
          this.ActivitiesChartData.next(response);
        }
      },
    });
  }

  pullActivitiesResumeFromGraph( // TODO RENAME IT
    currentDate: number,
    isThemes: boolean | string,
    isTechnics: boolean | string,
    isTools: boolean | string,
    fromSkill: string | null,
  ): void {
    this.http.get<any>(
      `${this.apiUrlActivitiesFilteredData}start_date=${currentDate}&technics=${isTechnics}&themes=${isThemes}&tools=${isTools}&from_feature=${fromSkill}`
    ).subscribe({
      complete: () => {
      },
      error: error => {
        // TODO improve error message, but API need improvments
        this.errorUrlActivitiesFilteredApiFound.next(error.error.message);
      },
      next: response => {
        // is null only if query return a 204 error (empty result)
        if (response !== null) {
          this.activitiesFilteredData.next(response);
        }
      },
    });
  }

  scrollToTopAction(): void {
    this.scrollToTop.next(true);
  }
}
