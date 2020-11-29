import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { ValueContext } from './ValueContext';

class Layout extends Component {
    render() {
    return (
        <ValueContext.Consumer>
            {value => {
                return (
                    <div>
                        <nav className="navbar navbar-inverse navbar-fixed-top navbar navbar-dark bg-dark">
                            <div className="container">
                                <div className="navbar-header">
                                    
                                    <Link to='/' className='navbar-brand' onClick={value.clear}>
                                        Add
                                    </Link>
                                    <Link to='/Pending' className='navbar-brand'>
                                                Pending({value.candidateCount.pendingCount})
                                            </Link>
                                            <Link to='/refused' className='navbar-brand'>
                                                Refused({value.candidateCount.refuseCount})
                                            </Link>
                                            <Link to='/confirmed' className='navbar-brand'>
                                                Confirmed({value.candidateCount.confirmCount})
                                            </Link>
                                </div>
                                <div id="navbar" className="collapse navbar-collapse">
                                    <ul className="navbar-brand">
                                        <li>
                                            <Link to='/Pending' className='navbar-brand'>
                                                Pending({value.candidateCount.pending})
                                            </Link>
                                        </li>
                                     
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="container" style={{ marginTop: 60 }}>
                            {this.props.children}
                        </div>

                    </div>

                )



            }}

        </ValueContext.Consumer>
    )
        }
}

export default Layout;