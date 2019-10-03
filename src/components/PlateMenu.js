import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setActive } from '../store/actions/PlateMenu';



export class PlateMenu extends Component {
    handleClick = (e) => {
        this.props.setActive(e.target.id);
    }

    render() {
        return (
            <div className="plate-menu">
                {this.props.plateMenu.map((item, i) => {
                    return (
                        <div onClick={this.handleClick} key={i} id={i} className={item.isActive ? "plate-menu-item-active" : "plate-menu-item"}>
                            {item.item}
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    plateMenu: state.plateMenu,
})

const mapDispatchToProps = dispatch => ({
    setActive: (i) => dispatch(setActive(i))  
})

export default connect(mapStateToProps, mapDispatchToProps)(PlateMenu)
