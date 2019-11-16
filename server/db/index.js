const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

db.on('error', function () {
    console.log('mongoose connection error');
});

db.once('open', function () {
    console.log('mongoose connected successfully');
});

var employeeSchema = mongoose.Schema({
    firstName: String,
    lastName: String
});

var Person = mongoose.model('Person', employeeSchema);

var selectAll = function (callback) {
    Person.find({}, function (err, people) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, people);
        }
    });
};

module.exports.selectAll = selectAll;