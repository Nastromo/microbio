import React, { Component } from 'react'
import { connect } from 'react-redux'

export class PlateMenu extends Component {
    constructor(props) {
        super(props);
        this.menu = [`Organism Plate`, `Antibiotic Plate`, `ISO Comment`, `General Comment`, `Antibiotic Dictionary`, `Parasitology Dictionary`, `Organism Dictionary`, `TNP`, `Tick Dictionary`, `Others Dictionary`, `Test Dictionary`, `Users`];
    }

    render() {
        return (
            <div className="plate-menu">
                {this.menu.map((item, i) => {
                    return (
                        <div key={i} className="plate-menu-item">
                            {item}
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PlateMenu)
