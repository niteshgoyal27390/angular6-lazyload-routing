import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AttorneyProfile } from './profile.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProfileResource {
    profile: AttorneyProfile;
    constructor(private http: Http) {
    }

    public getAttorneyProfile(): Observable<AttorneyProfile> {
        return this.http.get('http://localhost:3000/attorneyProfile').pipe(
            map(res => {
                return res.json();
            })
        );
    }
}
