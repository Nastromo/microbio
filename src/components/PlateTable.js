import React, { Component } from 'react';
import { connect } from 'react-redux';
import DicTable from './DicTable';



export class PlateTable extends Component {
    render() {
        switch (this.props.title) {
            case `Organism Plate`:
                return <DicTable />;
            case `Antibiotic Plate`:
                return <DicTable />;
            case `ISO Comment`:
                return <DicTable />;
            case `General Comment`:
                return <DicTable />;
            case `Antibiotic Dictionary`:
                return <DicTable />;
            case `Parasitology Dictionary`:
                return <DicTable />;
            case `Organism Dictionary`:
                return <DicTable />;
            case `TNP`:
                return <DicTable />;
            case `Tick Dictionary`:
                return <DicTable />;
            case `Others Dictionary`:
                return <DicTable />;
            case `Test Dictionary`:
                return <DicTable />;
            case `Users`:
                return <DicTable />;
            default: return <DicTable />;
        }
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PlateTable)
