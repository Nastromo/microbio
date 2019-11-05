import React, { Component } from 'react'
import { connect } from 'react-redux'
import PendResult from './PendResult';
import NonCulturePendList from './NonCulturePendList';



export class Non extends Component {
    render() {
        return (
            <div className="flex back-ma">
                <NonCulturePendList />
                <PendResult />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Non)
