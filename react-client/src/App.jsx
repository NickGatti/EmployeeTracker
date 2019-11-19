require('babel-polyfill')
import 'bootswatch/dist/slate/bootstrap.min.css';
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import AddEmployee from './components/AddEmployee.jsx'
import EmployeeList from './components/EmployeeList.jsx'
import Home from './components/Home.jsx'
import EmployerSignUp from './components/EmployerSignUp.jsx'
import EmployerLogin from './components/EmployerSignIn.jsx'

export default () => {
    return (
        <Router>
            <div style={{ padding: "2em" }}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list">List employees</Link>
                    </li>
                    <li>
                        <Link to="/add">Add employee</Link>
                    </li>
                    <li>
                        <Link to="/employerSignUp">Employer Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/employerLogin">Employer Login</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/list">
                        <EmployeeList />
                    </Route>
                    <Route path="/add">
                        <AddEmployee />
                    </Route>
                    <Route path="/employerSignUp">
                        <EmployerSignUp />
                    </Route>
                    <Route path="/employerLogin">
                        <EmployerLogin />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
