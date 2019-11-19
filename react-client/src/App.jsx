require('babel-polyfill')
import 'bootswatch/dist/cosmo/bootstrap.min.css';
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
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/list">List employees</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add">Add employee</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/employerSignUp">Employer Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/employerLogin">Employer Login</Link>
                        </li>
                    </ul>
                </nav>
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
        </Router >
    )
}
