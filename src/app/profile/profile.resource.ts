import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AttorneyProfile } from './profile.model';

@Injectable({
    providedIn: 'root'
})
export class ProfileResource {
    constructor(private http: Http) {
    }

    public getAttorneyProfile(): AttorneyProfile {

        const profile = new AttorneyProfile();
        profile.id = 1;
        profile.personalInformation = {
            firstName: 'Demo',
            lastName: 'User',
            description: 'Test Description',
            email: 'demo.user@gmail.com',
            headline: 'Test Headline',
            jurisdiction: 'Test Jurisdiction',
            phoneNumber: {
                ext: 123,
                number: '0123456789',
                type: 'Cell'
            },
            faxNumber: '1234567890'
        };

        return profile;
    }
}
