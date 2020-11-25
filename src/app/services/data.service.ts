import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProjectsModel, CareerDataModel, SkillsModel, PersonalInfoModel } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore) { }

  public getAllProjects(): Observable<ProjectsModel[]> {
    return this.firestore.collection('projects', ref => ref.orderBy('position')).valueChanges()
      .pipe(map(
        (data: ProjectsModel[]) => data));
  }

  public getCareerData(query: string): Observable<CareerDataModel[]> {
    return this.firestore.collection(`${query}`, ref => ref.orderBy('position')).valueChanges()
    .pipe(map(
      (data: CareerDataModel[]) => data));
  }

  public getSkillsData(): Observable<SkillsModel[]> {
    return this.firestore.collection('skills', ref => ref.orderBy('title')).valueChanges()
    .pipe(map(
      (data: SkillsModel[]) => data));
  }

  public getPersonalInfo(): Observable<PersonalInfoModel[]> {
    return this.firestore.collection('personalData').valueChanges()
    .pipe(map(
      (data: PersonalInfoModel[]) => data));
  }
}
