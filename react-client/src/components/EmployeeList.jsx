require('babel-polyfill')
import React from 'react'
import Employee from './Employee.jsx'
import axios from 'axios'

class EmployeeList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
        this.updateList = this.updateList.bind(this)
    }

    async componentDidMount() {
        let res = await axios.get('/employees')

        this.setState({ employees: res.data })
    }

    async updateList() {
        let res = await axios.get('/employees')

        this.setState({ employees: res.data })
    }

    render() {
        const employeeList = this.state.employees.map((employee, idx) => <Employee key={idx} employee={employee} updateList={this.updateList} />)
        return (
            <div style={{ padding: "2em" }} className="container">
                <div className="row">
                    {employeeList}
                </div>
            </div>
        )
    }
}

export default EmployeeList