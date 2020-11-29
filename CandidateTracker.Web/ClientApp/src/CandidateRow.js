import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
function CandidateRow(props) {
    const { id, firstName, lastName, email, phoneNumber, note } = props.candidate;
    const {setCandidate} = props;
    return (
        <tr>
            <td><Link to={`/viewcandidate/${id}`} onClick={() => setCandidate(props.candidate)}>
                <button className='btn btn-success' onClick={() => setCandidate(props.candidate)}>View candidate</button>
                </Link></td>
            <td>{firstName} </td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
        </tr>
    )
}
export default CandidateRow;