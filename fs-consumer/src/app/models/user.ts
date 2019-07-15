export class User {
    firstName: String;
    lastName: String;
    cellPhone: String;
    email: String;
    password: String;
    role: String;

    constructor(firstName: String, lastName: String, cellPhone: String, email: String, password: String) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cellPhone = cellPhone;
        this.email = email;
        this.password = password;
        this.role = "user";
    } 
}