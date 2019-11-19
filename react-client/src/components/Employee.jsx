require('babel-polyfill')
import React from 'react'
import axios from 'axios'

export default ({ employee, updateList }) => {
    const upVote = async () => {
        const res = await axios.put('/employee/upvote', { personToUpVote: employee._id, rating: employee.rating || 0 })
        updateList()
    }

    const downVote = async () => {
        const res = await axios.put('/employee/downvote', { personToDownVote: employee._id, rating: employee.rating || 0 })
        updateList()
    }

    return (
        <div>
            <h4>Employee</h4>
            <h3>First name: <small>{employee.firstName}</small></h3>
            <h3>Last name: <small>{employee.lastName}</small></h3>
            <h3>Rating: <small>{employee.rating}</small><div onClick={upVote}>+</div><div onClick={downVote}>-</div></h3>
        </div>
    )
}