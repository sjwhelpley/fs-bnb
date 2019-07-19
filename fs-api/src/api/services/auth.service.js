const User = require('../models/user.model');

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

module.exports = class AuthService {
    constructor() { }

    // REGISTER
    registerUser(user) {
        return new Promise((resolve, reject) => {
            User.prototype.getAllUsers((err, data) => {
                if (err) reject(err);

                data.forEach(existingUser => {
                    if(existingUser.email === user.email) {
                        reject("Email already in use.");
                    }
                });
            });
            
            bcrypt.hash(user.password, 10, (err, hash) => {
                if(err) reject(err);
    
                const userObj = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    cellPhone: user.cellPhone,
                    email: user.email,
                    password: hash
                };

                User.prototype.createUser(userObj, (err, res) => {
                    if(err) reject(err);
                    const user = {
                        id: res,
                        userObj
                    }

                    const jwt = this.getJwtToken(user, true);
                    const authRes = {
                        user: user,
                        jwt: jwt
                    }
                    resolve(authRes);
                });
            });
        }).catch(err => {
            console.log(err);
        });
    }

    registerProvider(user) {
        return new Promise((resolve, reject) => {
            User.prototype.getAllProviders((err, data) => {
                if (err) reject(err);

                data.forEach(existingUser => {
                    if(existingUser.email === user.email) {
                        reject("Email already in use.");
                    }
                });
            });

            bcrypt.hash(user.password, 10, (err, hash) => {
                if(err) reject(err);
    
                const userObj = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    cellPhone: user.cellPhone,
                    email: user.email,
                    password: hash
                }

                User.prototype.createProvider(userObj, (err, res) => {
                    if(err) reject(err);
                    const user = {
                        id: res,
                        userObj
                    }

                    const jwt = this.getJwtToken(user, true);
                    const authRes = {
                        user: user,
                        jwt: jwt
                    }
                    resolve(authRes);
                });
            });
        }).catch(err => {
            console.log(err);
        });
    }

    //LOG IN
    loginUser(authUser) {
        return new Promise((resolve, reject) => {
            let email = authUser.email;
            let password = authUser.password;

            User.prototype.getAllUsers((err, data) => {
                if (err) reject(err);

                let dbUser = data.filter(user => {
                    return user.email == email;
                }); 

                if(dbUser.length == 1) {
                    const match = bcrypt.compare(dbUser[0].password, password);
                    if(match) {
                        const jwt = this.getJwtToken(dbUser[0], true);
                        const authRes = {
                            user: dbUser[0],
                            jwt: jwt
                        }
                        resolve(authRes);
                    } else {
                        reject(new Error("Incorrect password"));
                    }       
                } else {
                    reject(new Error("User does not exist"));
                }
            });
        }).catch(err => {
            console.log(err);
        }); 
    }

    loginProvider(authUser) {
        return new Promise((resolve, reject) => {
            let email = authUser.email;
            let password = authUser.password;

            User.prototype.getAllProviders((err, data) => {
                if(err) reject(err);

                let dbUser = data.filter(user => {
                    return user.email == email;
                }); 

                if(dbUser.length == 1) {
                    const match = bcrypt.compare(dbUser[0].password, password);
                    if(match) {
                        this.getJwtToken(dbUser[0], true).then((token) => {
                            const authRes = {
                                user: dbUser[0],
                                jwt: token
                            }
                            resolve(authRes);
                        });
                            
                    } else {
                        reject(new Error("Incorrect password"));
                    }
                } else {
                    reject(new Error("User does not exist"));
                }
            });
        }).catch(err => {
            console.log(err);
        });
    }

    loginAdmin(authUser) {
        return new Promise((resolve, reject) => {
            let email = authUser.email;
            let password = authUser.password;

            User.prototype.getAllAdmins((err, data) => {
                if(err) reject(err);

                let dbUser = data.filter(user => {
                    return user.email == email;
                }); 

                if(dbUser.length == 1) {
                    const match = bcrypt.compare(dbUser[0].password, password);
                    if(match) {
                        this.getJwtToken(dbUser[0], true).subscribe(token => {
                            const authRes = {
                                user: dbUser[0],
                                token: token
                            }
                            resolve(authRes);
                        });     
                    } else {
                        reject(new Error("Incorrect password"));
                    }
                } else {
                    reject(new Error("User does not exist"));
                }
            });
        }).catch(err => {
            console.log(err);
        });
    }

    async getJwtToken(user, rememberUser) {
        return new Promise((resolve, reject) => {
            let jwtObject = {};

            jwtObject.id = user.id;
            jwtObject.firstName = user.firstName;
            jwtObject.lastName = user.lastName;
            jwtObject.email = user.email;
            jwtObject.cellPhone = user.cellPhone;
            jwtObject.remember = rememberUser;

            jwt.sign(Object.assign({}, jwtObject), "secret-key", {expiresIn: "1d"}, (err, token) => {
                if(err) reject(err);
                resolve(token);
            });
        })
        
    }

    async verifyToken(token) {
        return await jwt.verify(token, "secret-key");
    }
}