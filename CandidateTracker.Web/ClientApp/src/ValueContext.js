import React from 'react';
import { produce } from 'immer';
import Axios from 'axios';

const ValueContext = React.createContext();

class ValueContextComponent extends React.Component {
    state = {
        candidates: [],
        candidate: {
            id: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            note: ''
        },
        candidateCount: {
            pendingCount: '',
            confirmCount: '',
            refuseCount: '',

        },
        toggle: true
    }
    componentDidMount = async () => {
        const {data} = await Axios.get('api/candidate/getall');
        this.setState({ candidates: data });
        this.candidateCounter();
    }
    onTextChange = (value, name) => {
        const nextState = produce(this.state, draftState => {
            draftState.candidate[name] = value;
        })
        this.setState(nextState);
    }
    clear = () => {
        this.setState({candidate: {id: '', firstName:'',
        lastName: '', phoneNumber: '', email: '', note: ''
    }})
    }
    onAddClick = async () => {
        const pending = true;
        const{firstName, lastName, phoneNumber, email, note} = this.state.candidate;
        const { data } = await Axios.post('api/candidate/add', { firstName, lastName, phoneNumber, email, note, pending })
        this.setState({ candidates: data });
        this.candidateCounter();
        this.clear();
    }
    onConfirmClick = async () => {
        const { data } = await Axios.post('api/candidate/confirm', { candidateId : this.state.candidate.id })
        this.setState({ candidates: data });
        this.candidateCounter();
        this.clear();
    }
    onRefuseClick = async () => {
        const { data } = await Axios.post('api/candidate/refuse', { candidateId : this.state.candidate.id })
        this.setState({ candidates: data });
        this.candidateCounter();
        this.clear();
    }
    candidateCounter = () => {
        const nextState = produce(this.state, draftState => {
            draftState.candidateCount.pendingCount = draftState.candidates.filter(x => x.pending == true).length;
            draftState.candidateCount.confirmCount = draftState.candidates.filter(x => x.confirmed == true).length;
            draftState.candidateCount.refuseCount = draftState.candidates.filter(x => x.refused == true).length;
        })
        this.setState(nextState);
    }
    setCandidate = (c) => {
        console.log(c);
       this.setState({candidate: c});
    }
    onToggleClick = () => {
   const toggle = this.state.toggle;
   this.setState({toggle: !toggle})
    }

    render() {
        const obj = {
            candidateCount: {
                pendingCount: this.state.candidateCount.pendingCount,
                confirmCount: this.state.candidateCount.confirmCount,
                refuseCount: this.state.candidateCount.refuseCount
            },
            onTextChange: this.onTextChange,
            onRefuseClick: this.onRefuseClick,
            onConfirmClick: this.onConfirmClick,
            onAddClick: this.onAddClick,
            setCandidate: this.setCandidate,
            candidate: this.state.candidate,
            candidates: this.state.candidates,
            onToggleClick: this.onToggleClick,
            toggle: this.state.toggle,
            clear: this.clear
        }
        return(
            <ValueContext.Provider value={obj}>
                {this.props.children}
            </ValueContext.Provider>
        )
    }
}
export {ValueContextComponent, ValueContext}