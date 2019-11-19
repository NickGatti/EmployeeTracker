const mongoose = require('mongoose');
mongoose.connect('mongodb://nick:donny1@ds043338.mlab.com:43338/employeetracker', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', function () {
    console.log('mongoose connection error');
});

db.once('open', function () {
    console.log('mongoose connected successfully');
});

const employeeSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    rating: { type: Number, min: 0, max: 10 }
});

const employerSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const Person = mongoose.model('Person', employeeSchema);
const Employer = mongoose.model('Employer', employerSchema);

const selectAll = function (callback) {
    Person.find({}, function (err, people) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, people);
        }
    });
};

const insertOne = function ({ firstName, lastName, rating }, callback) {
    Person.create({ firstName, lastName, rating }, function (err, success) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, success)
        }
    });
}

const upVote = function ({ personToUpVote, rating }, callback) {
    Person.update({ _id: personToUpVote }, { $set: { rating: rating + 1 } }, (err, success) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, success)
        }
    })
}

const downVote = function ({ personToDownVote, rating }, callback) {
    Person.update({ _id: personToDownVote }, { $set: { rating: rating - 1 } }, (err, success) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, success)
        }
    })
}

const deleteUser = function ({ id }, callback) {
    Person.deleteOne({ _id: id }, (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, result)
        }
    })
}

const createEmployer = function ({ name, email, password }, callback) {
    Employer.find({ email }, (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            if (result.length === 0) {
                Employer.create({ name, email, password }, (err2, result2) => {
                    if (err2) {
                        callback(err, null)
                    } else {
                        callback(null, result2)
                    }
                })
            } else {
                callback({ error: "Email Already Exists" }, null)
            }
        }
    })
}

const employerLogin = function ({ email, password }, callback) {
    Employer.find({ email }, (err, result) => {
        if (err) {
            callback(err, null)
        } else {
            if (result.length === 1) {
                if (result[0].password === password) {
                    callback(null, result)
                } else {
                    callback('Wrong password', null)
                }
            } else {
                callback('email not found', null)
            }
        }
    })
}

module.exports = {
    selectAll,
    insertOne,
    upVote,
    downVote,
    createEmployer,
    employerLogin,
    deleteUser
};