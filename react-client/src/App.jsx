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

export default () => {
    return (
        <Router>
            <div>
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
                </ul>
                <Switch>
                    <Route path="/list">
                        <EmployeeList />
                    </Route>
                    <Route path="/add">
                        <AddEmployee />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
