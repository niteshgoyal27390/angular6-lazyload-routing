export class PersonalInformation {
    firstName: String;
    lastName: String;
    email: String;
    description: String;
    jurisdiction: String;
    headline: String;
    phoneNumber: PhoneNumber;
    faxNumber: String;
}

export class PhoneNumber {
    type: String;
    number: String;
    ext: number;
}
