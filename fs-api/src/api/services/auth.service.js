const userService = require("../services/user.service");

module.export = class AuthService {
    loggedinUser;

    constructor() { }

    login(loginCredentials) {
        let email = loginCredentials.email;
        let password = loginCredentials.password;
        userService.getAll().then(users => {
            const dbUser = users.filter(user => {
                return user.email == email;
            });
      
            if(dbUser) {
                if(dbUser[0].password == password) {
                    this.loggedinUser = dbUser[0];
                    res.send(dbUser[0]);
                } else {
                    res.status(400).send("Incorrect password");
                }
            } else {
                res.status(400).send("User not found");
            }
        }).catch(err => {
            res.status(400).send(err);
        });
    }

    validateEmail(givenEmail) {
        emails = getEmails();
        const dbEmail = emails.filter(email => {
            return email == givenEmail;
        });
        if(dbEmail) {
            return true;
        } else {
            return false;
        }
    }

    getEmails() {
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT email FROM user", function(err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }
}