import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlateTable from './PlateTable';


export class PlateSettings extends Component {
    render() {
        let title = ``;
        for (let i = 0; i < this.props.list.length; i++) {
            if (this.props.list[i].isActive) title = this.props.list[i].item;
        }
        return (
            <div className="plate-settings">
                <div className="plate-title">
                    {title}
                </div>

                <div className="mar15 wid120">
                    <div className="green-btn">Create</div>
                </div>

                <PlateTable title={title}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.plateMenu
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PlateSettings)
