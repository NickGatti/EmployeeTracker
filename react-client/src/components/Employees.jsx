import React from 'react'
import Employee from './Employee.jsx'

const Employees = ({ data }) => {
    const employeeList = data.map((employee, idx) => <Employee key={idx} employee={employee} />)
    return (
        <div>
            {employeeList}
        </div>
    )
}

export default Employees