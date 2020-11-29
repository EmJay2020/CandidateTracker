import React from 'react';
import { Link } from 'react-router-dom';
function Row(props) {
    const { firstName, lastName, email, phoneNumber, note } = props.candidate;
    const toggle = props.toggle;
    return (
        <tr>
            <td>{firstName} </td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            
            {toggle && <td>{note}</td>}
            
        </tr>
    )
}
export default Row;