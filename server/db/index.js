const mongoose = require('mongoose');
mongoose.connect('mongodb://nick:donny1@ds043338.mlab.com:43338/employeetracker');

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

const Person = mongoose.model('Person', employeeSchema);

const selectAll = function (callback) {
    Person.find({}, function (err, people) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, people);
        }
    });
};

const insertOne = function (personToInsert, callback) {
    Person.create(personToInsert, function (err, small) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, small)
        }
    });
}

const upVote = function ({personToUpVote, rating}, callback) {
    Person.update({_id: personToUpVote}, {$set: { rating: rating + 1 }}, (err, success) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, err)
        }
    })
}

module.exports = {
    selectAll,
    insertOne,
    upVote
};