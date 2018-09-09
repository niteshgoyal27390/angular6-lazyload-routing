export class PersonalInformation {
    firstName: String;
    lastName: String;
    email: String;
    description: String;
    jurisdiction: String;
    headline: String;
    contactDetails: ContactDetail[];
    faxNumber: String;
    workExps: WorkExperience[];
}

export class ContactDetail {
    type: String;
    number: String;
    ext: number;
}

export class WorkExperience {
    role: String;
    firmName: String;
    location: String;
    fromDate: MonthYear;
    toDate: MonthYear;
}

export class MonthYear {
    month: number;
    year: number;
}


