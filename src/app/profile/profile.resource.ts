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
            contactDetails: [
                {
                    ext: 123,
                    number: '0123456789',
                    type: 'Cell'
                },
                {
                    ext: 569,
                    number: '9876542310',
                    type: 'Home'
                },
            ],
            faxNumber: '1234567890',
            workExps: [{
                firmName: 'Test Firm',
                role: 'Test Role',
                location: 'New York',
                fromDate: {
                    month: 5,
                    year: 2015
                },
                toDate: {
                    month: 11,
                    year: 2017
                }
            }]
        };

        return profile;
    }
}
