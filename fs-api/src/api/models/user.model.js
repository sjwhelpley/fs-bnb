var mysqlConn = require("../../database/database");

var User = function(user) {
    this.id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.cellPhone = cellPhone;
    this.email = email;
    this.password = password;
    this.role = role;
}

User.getAll() = function(result) {
    mysqlConn.query("SELECT * FROM user", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log("Users : ", res);
            result(null, res);
        }
    });
}

User.getById() = function(id, result) {
    mysqlConn.query("SELECT * FROM user WHERE id = ? ", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

User.create() = function(newUser, result) {
    mysqlConn.query("INSERT INTO user set ?", newUser, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

User.update() = function(id, user, result) {
    mysqlConn.query("UPDATE user SET user = ? WHERE id = ?", [user, id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

User.delete() = function(id, result) {
    mysqlConn.query("DELETE FROM user WHERE id = ?", id, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

