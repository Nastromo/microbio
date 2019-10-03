import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlateMenu from './PlateMenu';
import PlateSettings from './PlateSettings';



export class Settings extends Component {
    render() {
        return (
            <div className="pad15-mar15">
                <h2>Dictionary</h2>
                <div className="flex">
                    <PlateMenu />
                    <PlateSettings />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
