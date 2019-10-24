import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScreenPendingList from './ScreenPendingList';
import ScreenData from './ScreenData';





export class Screen extends Component {
    render() {
        return (
            <div className="flex back-ma">
                <ScreenPendingList />
                <ScreenData />
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Screen)
