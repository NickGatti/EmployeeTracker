import React from 'react'

export default ({ employee }) => {
    return (
        <div>
            <h4>Employee</h4>
            <h3>First name: <small>{employee.firstName}</small></h3>
            <h3>Last name: <small>{employee.lastName}</small></h3>
        </div>
    )
}