import React, { Component } from 'react'
import { connect } from 'react-redux'
import CPendList from './CPendList';



export class NonCulturePendList extends Component {
    render() {
        return (
            <div>
                <h3>Non-Culture Pending List</h3>
                <div className="flex">
                    <p onClick={this.props.activate} id="scrn" className={this.props.isScreen ? "scr-list" : "scr-list acty"}>Blood Parasites</p>
                    <p onClick={this.props.activate} id="batch" className={this.props.isScreen ? "scr-list acty" : "scr-list "}>KOH/Gram Stain</p>
                    <p onClick={this.props.activate} id="batch" className={this.props.isScreen ? "scr-list acty" : "scr-list"}>Other</p>
                    <p onClick={this.props.activate} id="batch" className={this.props.isScreen ? "scr-list acty" : "scr-list"}>TNP</p>
                </div>
                <CPendList />
            </div>
        )
    }
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NonCulturePendList)
