import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ValueContext } from './ValueContext';
import { produce } from 'immer';
import axios from 'axios';

class Add extends Component{
render(){
    return(
        <ValueContext.Consumer>
            {value =>{
                return(
                     <div style={{  paddingTop: 100 }}>
                     
                         <div className='card'>
                         <div class="card-header text-center">
                         <h2>Add Candidate</h2>
                             </div>
                             <div className='card-body'>
                             <input type="text" className='form-control' name='firstName' value={value.candidate.firstName} onChange={e => value.onTextChange(e.target.value, e.target.name)} placeholder="First Name" />
                             <br />
                             <input type="text" className='form-control' name='lastName' value={value.candidate.lastName} onChange={e => value.onTextChange(e.target.value, e.target.name)} placeholder="Last Name" />
                             <br />
                             <input type="email" className='form-control' name='email' value={value.candidate.email} onChange={e => value.onTextChange(e.target.value, e.target.name)} placeholder="Email" />
                             <br />
                             <input type="text" className='form-control' name='phoneNumber' value={value.candidate.phoneNumber} onChange={e => value.onTextChange(e.target.value, e.target.name)} placeholder="Phone Number" />
                             <br />
                             <textarea className="form-control" rows="3" name='note' value={value.candidate.note} onChange={e => value.onTextChange(e.target.value, e.target.name)}></textarea>
                             </div>
                        
<div className="card-footer">
<button className='btn btn-primary btn-lg btn-block' onClick={value.onAddClick}>Submit</button>
</div>

                         </div>
                     
                 </div>
                )
            }}
        </ValueContext.Consumer>
    )
}
}
export {Add};