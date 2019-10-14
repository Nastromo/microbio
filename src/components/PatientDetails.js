import React, { Component } from 'react'
import { connect } from 'react-redux'

export class PatientDetails extends Component {
    returnTests = () => {
        return (
            <div className="scroll100">

            </div>
        )
    }

    returnOther = () => {
        return (
            <div className="scroll100">

            </div>
        )
    }

    render() {
        return (
            <div className="bas40">
                <div className="sec-fr">
                    <div className="tit-sec">
                        Patient Information
                    </div>
                    <div className="con-ine flex">
                        <div className="sub-titt">
                            <p>Patient Name:</p>
                            <p>Accession#:</p>
                            <p>DOB:</p>
                            <p>Sex:</p>
                            <p>Order Type:</p>
                            <p>Requisition Entry Comment:</p>
                        </div>
                        <div className="sub-titt">
                            <p className="value-r">Patient Name</p>
                            <p className="value-r">Accession</p>
                            <p className="value-r">DOB</p>
                            <p className="value-r">Sex</p>
                            <p className="value-r">Order Type</p>
                            <p className="value-r">Requisition</p>
                        </div>
                        <div className="sub-titt">
                            <p>Received Date:</p>
                            <p>Collection Date:</p>
                            <p>Client:</p>
                            <p>Physician Id:</p>
                            <div className="req-pdf">Requisition PDF</div>
                        </div>
                        <div className="sub-titt">
                            <p className="value-r">Received Date:</p>
                            <p className="value-r">Collection Date:</p>
                            <p className="value-r">Client:</p>
                            <p className="value-r">Physician Id:</p>
                        </div>
                    </div>
                </div>

                <div className="sec-fr marg15-t">
                    <div className="tit-sec">
                        Test Information
                    </div>
                    <div className="con-ine marg15-t">
                        <p className="te-tit">Microbiology Test</p>
                        <div className="table-titk">
                            <p className="bas20">Test code</p>
                            <p className="bas60">Test discription</p>
                            <p className="bas20">Action</p>
                        </div>
                        {this.returnTests()}
                    </div>

                    <div className="con-ine marg15-t">
                        <p className="te-tit">Other Tests</p>
                        <div className="table-titk">
                            <p className="bas20">Test code</p>
                            <p className="bas60">Test discription</p>
                            <p className="bas20">Action</p>
                        </div>
                        {this.returnOther()}
                    </div>

                    <div className="con-ine marg15-t">
                        <p className="te-tit">Remark:</p>
                        <textarea className="text-a"></textarea>
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

export default connect(mapStateToProps, mapDispatchToProps)(PatientDetails)
