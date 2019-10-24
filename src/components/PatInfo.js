import React, { Component } from 'react';
import { connect } from 'react-redux';




export class PatInfo extends Component {
    render() {
        return (
            <div className="bor-da">
                <p className="titt-sec">Patient Information</p>
                <div className="flex ju-btw">

                    <div className="mar-riuy">
                        <p className="poin-tt">Patient Name:</p>
                        <p className="poin-tt">Accession#:</p>
                        <p className="poin-tt">DOB:</p>
                        <p className="poin-tt">Sex:</p>
                        <p className="poin-tt">Order Type:</p>
                        <p className="poin-tt">Requisition Entry Comment:</p>
                    </div>
                    <div className="mar-riuy">
                        <p className="poin-tt ggbol">Value</p>
                        <p className="poin-tt ggbol">Value</p>
                        <p className="poin-tt">Value</p>
                        <p className="poin-tt">Value</p>
                        <p className="poin-tt">Value</p>
                        <p className="poin-tt">Value</p>
                    </div>


                    <div className="mar-riuy">
                        <p className="poin-tt">Received Date:</p>
                        <p className="poin-tt">Collection Date:</p>
                    </div>
                    <div className="mar-riuy">
                        <p className="poin-tt">Value</p>
                        <p className="poin-tt">Value</p>
                    </div>


                    <div className="mar-riuy">
                        <p className="poin-tt">Client:</p>
                        <p className="poin-tt">Physician Id:</p>
                    </div>
                    <div className="mar-riuy margjj">
                        <p className="poin-tt">Value</p>
                        <p className="poin-tt">Value</p>
                        <div className="req-pdf">
                            Requisition PDF
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PatInfo)
