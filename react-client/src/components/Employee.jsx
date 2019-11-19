require('babel-polyfill')
import React from 'react'
import axios from 'axios'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

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
            <Card>
                <CardBody>
                    <CardTitle>{employee.firstName} {employee.lastName}</CardTitle>
                    <CardText>Rating: {employee.rating} <button onClick={upVote}>Upvote</button> <button onClick={downVote}>Downvote</button></CardText>
                </CardBody>
            </Card>
        </div>
    )
}