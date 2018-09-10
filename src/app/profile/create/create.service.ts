import { Injectable } from '@angular/core';
import { ProfileResource } from '../profile.resource';
import { AttorneyProfile } from '../profile.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  private attorneyProfile: Subject<AttorneyProfile> = new Subject();

  constructor(private profileService: ProfileResource) { }

  public fetchAttorneyProfile() {
    this.profileService.getAttorneyProfile().subscribe(res => {
      this.attorneyProfile.next(res);
    });
  }

  public getAttorneyProfile(): Observable<AttorneyProfile> {
    return this.attorneyProfile;
  }

}
