import React, { Component } from 'react'
import { connect } from 'react-redux'
import PatInfo from './PatInfo';



export class PendResult extends Component {
    render() {
        return (
            <div className="bas70">
                <h3>Micro Results Entry</h3>
                <PatInfo />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PendResult)
