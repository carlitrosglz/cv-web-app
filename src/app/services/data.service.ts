import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProjectsModel, CareerDataModel, SkillsModel, PersonalInfoModel } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private CV_LINK = 'https://firebasestorage.googleapis.com/v0/b/cv-portfolio-carlos.appspot.com/o/files%2Fcv_carlosgonzalezespejo_ES.pdf?alt=media&token=94dc8595-5d89-4ead-bd4f-b5b1ef953fe7';

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

  public sendMessage(name: string, email: string, message: string): Promise<void> {
    return this.firestore.collection('messages')
      .doc()
      .set({
          name,
          email,
          message,
          timestamp: Date.now()
        });
  }

  public getCV(): string {
    return this.CV_LINK;
  }
}
