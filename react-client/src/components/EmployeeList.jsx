import React from 'react'
import Employee from './Employee.jsx'
import axios from 'axios'

class EmployeeList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }

    async componentDidMount() {
        let res = await axios.get('/employees')
        this.setState({ employees: res.data })
    }

    render() {
        const employeeList = this.state.employees.map((employee, idx) => <Employee key={idx} employee={employee} />)
        return (
            <div>
                {employeeList}
            </div>
        )
    }
}

export default EmployeeList