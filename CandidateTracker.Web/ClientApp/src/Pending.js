import React, { Component } from 'react';
import { ValueContext } from './ValueContext';
import CandidateRow from './CandidateRow';

class Pending extends Component{

    render(){
        return(
            <ValueContext.Consumer>
                {value =>{
                    return(
                        <div style={{ minHeight: 1000, paddingTop: 50 }}>
                            <table className='table table-bordered table-striped table-hover'>
                                <thead>
                                    <tr>
                                    <th>View</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {value.candidates.filter(x => x.pending).map(c =>
                                    <CandidateRow
                                    key={c.id}
                                    candidate={c}
                                    setCandidate={() => value.setCandidate(c)}
                                    />
                                    )}
                                </tbody>
                            </table>
                     </div>
                    )

                }}
            </ValueContext.Consumer>
        )
    }
}
export default Pending;