const express = require("express");
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const passport = require("passport")
const passportJWT = require('passport-jwt')
const JWTStrategy = passportJWT.Strategy
const extractJWT = passportJWT.ExtractJwt

const opts = {
    jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'keyboard_cat'
}

const strategy = new JWTStrategy(opts, (payload, next) => {
    //get user from db
    const user = null
    next(null, user)
})

passport.use(strategy)
app.use(passport.initialize())


const port = process.env.PORT || 8000;

const { selectAll, insertOne, upVote, downVote, createEmployer } = require('./db/index.js')

app.use(express.static(path.join(__dirname, '../react-client/dist')))
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/employees', (req, res) => {
    selectAll((err, people) => {
        if (err) {
            res.status(500).end(err)
        } else {
            res.json(people)
        }
    })
})

app.post('/employee', (req, res) => {
    insertOne(req.body, (err, success) => {
        if (err) {
            res.status(500).json({ success: false })
        } else {
            res.json({ success: true })
        }
    })
})

app.put('/employee/upvote', (req, res) => {
    upVote({ personToUpVote: req.body.personToUpVote, rating: req.body.rating }, (err, success) => {
        if (err) {
            res.status(500).json({ success: false })
        } else {
            res.json({ success: true })
        }
    })
})

app.put('/employee/downvote', (req, res) => {
    downVote({ personToDownVote: req.body.personToDownVote, rating: req.body.rating }, (err, success) => {
        if (err) {
            res.status(500).json({ success: false })
        } else {
            res.json({ success: true })
        }
    })
})

app.post('/employer', (req, res) => {
    createEmployer({ name: req.body.name, email: req.body.email, password: req.body.password }, (err, success) => {
        if (err) {
            res.status(500).json({ success: false })
        } else {
            res.json({ success: true })
        }
    })
})

app.listen(port, function () {
    console.log('Listening on', port);
});