import React, { Component } from 'react';
import { ValueContext } from './ValueContext';
import Row from './Row';

class Refused extends React.Component{

    render(){
        return(
            <ValueContext.Consumer>
                {value =>{
                    return(
                        <div style={{ minHeight: 1000, paddingTop: 50 }}>
                            <button className='btn btn-success' onClick={value.onToggleClick}>Toggle</button>
                            <table className='table table-bordered table-striped'>
                                <thead>
                                    <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    {value.toggle && <th>Note</th>}
                                    </tr>

                                </thead>
                                <tbody>
                                    {value.candidates.filter(x => x.refused).map(c =>
                                    <Row
                                    key={c.id}
                                    candidate={c}
                                    toggle={value.toggle}
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
export default Refused;