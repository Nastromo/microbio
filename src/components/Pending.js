import React, { Component } from 'react';
import { connect } from 'react-redux';
import TestsList from './TestsList';
import PatientsList from './PatientsList';
import PatientDetails from './PatientDetails';




export class Pending extends Component {
    render() {
        return (
            <div className="flex back-ma">
                <TestsList />
                <PatientsList />
                <PatientDetails />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Pending)
