import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Pre extends Component {
    returnPats = () => {
        return (
            <div className="scroll100">
                
            </div>
        )
    }

    render() {
        return (
            <div className="flex back-ma">
                <div className="bas30 sec-fr">
                    <div className="tit-sec">
                        Pre Screen Pending List
                    </div>
                    <div className="con-ine marg15-t">
                        <p>Please scan accession # into Accession field</p>
                        <input className="simple-input"/>
                    </div>
                    <div className="con-ine marg15-t">
                        <div className="table-titk">
                            <p className="bas20">Test code</p>
                            <p className="bas60">Test discription</p>
                            <p className="bas20">Action</p>
                        </div>
                        {this.returnPats()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Pre)
