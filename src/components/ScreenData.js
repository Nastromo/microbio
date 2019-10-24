import React, { Component } from 'react'
import { connect } from 'react-redux'
import PatInfo from './PatInfo';
import InternalLabInfo from './InternalLabInfo';
import GramStain from './GramStain';
import Organism from './Organism';
import GenralComment from './GenralComment';



export class ScreenData extends Component {
    render() {
        return (
            <div className="data-scrn">
                <h3>Micro Results Entry</h3>
                <PatInfo />
                <InternalLabInfo />
                <GramStain />
                <Organism />
                <GenralComment />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenData)
