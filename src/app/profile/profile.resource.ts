import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { AttorneyProfile } from "./profile.model";

@Injectable({
    providedIn: 'root'
})
export class ProfileResource {
    constructor(private http: Http) {
    }

    public getAttorneyProfile() : AttorneyProfile {

        let profile = new AttorneyProfile();
        profile.id = 1;
        profile.personalInformation = {
            firstName: 'Robbin Hud',
            lastName: 'Pandey'
        }

        return profile;
    }
}