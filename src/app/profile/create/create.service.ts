import { Injectable } from '@angular/core';
import { ProfileResource } from '../profile.resource';
import { AttorneyProfile } from '../profile.model';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  private attorneyProfile: AttorneyProfile

  constructor(private profileService: ProfileResource) { }

  public fetchAttorneyProfile() {
    console.log('Profile fetching...')
    this.attorneyProfile = this.profileService.getAttorneyProfile();
    console.log('Profile fetched.')
  }

  public getAttorneyProfile(): AttorneyProfile {
    return this.attorneyProfile;
  }
}
