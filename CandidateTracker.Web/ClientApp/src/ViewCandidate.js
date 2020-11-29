import React, { Component } from 'react';
import { ValueContext } from './ValueContext';
import { Link } from 'react-router-dom';
import Axios from 'axios';
class ViewCandidate extends Component {
    state = {
        candidate: {
            id: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            note: ''
        }
    }
    componentDidMount = async () => {
        const { data } = await Axios.post('api/candidate/getcandidate', { candidateId: parseInt(this.props.match.params.id) });
        this.setState({ candidate: data });
    }
    render() {
        return (

            <ValueContext.Consumer>
                {value => {
                    return (
                        <div className='card'>
                            <div className="card-body ">
                                <h3>Name: {this.state.candidate.firstName} {this.state.candidate.lastName}</h3>
                                <h3>Phone Number: {this.state.candidate.phoneNumber}</h3>
                                <h3>Email: {this.state.candidate.email}</h3>
                                <h6>Notes: {this.state.candidate.note}</h6>
                                <div className='row'>
                                    <div className='col-md-1 col-md-offset-2'>
                                        <Link to='/pending' >
                                            <button className='btn btn-primary' onClick={value.onConfirmClick}>Confirm</button>
                                        </Link>
                                    </div>
                                    <div className='col-md-1'>
                                        <Link to='/pending' >
                                            <button className='btn btn-danger' onClick={value.onRefuseClick}>Refused</button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                }}
            </ValueContext.Consumer>





        )
    }
}
export default ViewCandidate;