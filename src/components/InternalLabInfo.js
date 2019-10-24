import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewDropDown from './NewDropDown';
import CheckBox from './Checkbox';



export class PatInfo extends Component {
    constructor(props) {
        super(props);
        this.states = [`Blood agar plate`, `Campylobacter agar plate`, `Hectoen agar plate`, `Mac /sorbitol agar plate`, `Macconkey agar plate`, `Blood / Macconkey biplate`, `Chocolate agar plate`, `Columbia agar plate`, `Kv / Columbia ana biplate`, `A8 agar plate`, `Thioglycolate broth`, `Sab dextrose`, `Sab dextrose with CC`, `Modified Thayer Matin agar plate`, `Carrot broth`, `Kv / Columbia agar`, `IMA agar`, `Sab dextrose BHI`, `Sab dextrose with GC`, `SALMONELLA SP.`, `STREPTOCOCCUS BETA HEOLYTIC GROUP`, `ENTEROCOCCI SP.`, `STREPTOCOCCUS PNEUMONIAE`, `CEREBROSPINAL FLUID`, `Enterobacteriaceae`, `SHIGELLA`, `OTHER NON ENTEROBACTERIACEAE`, `STAPHYLOCOCCI SP.`, `STREPTOCOCCUS SP. VIRIDANS GROUP`, `ACINETOBACTER SP.`, `STENOTROPHOMONAS MALTOPHILIA`, `PEUDOMONAS SP.`];
    }

    render() {
        return (
            <div className="bor-da">
                <p className="titt-sec">Internal Lab Information</p>
                <div className="flex width100">
                    <div className="bas50 marg10">
                        <p className="gffd">Chose Plate</p>
                        <NewDropDown
                            id="states"
                            actionType="SET_STATE_OPTION"
                            height="30px"
                            status={this.props.isOpenState}
                            menu={this.states}
                            option={""} />

                        <div className="dergr">
                            <p className="bas10">Mark</p>
                            <p className="bas30">Plate</p>
                            <p className="bas60">Comment</p>
                        </div>


                        <div className="tre">
                            {
                                this.props.acc.plates.map((item, i) => {
                                    return (
                                        <div key={i} className="flex pads10">
                                            <div className="bas10 rrr">
                                                <CheckBox status={item.status} title="" id={`plate${i}`} />
                                            </div>
                                            <p className="bas30 rrr">{item.plate}</p>
                                            <p className="bas60 rrr">{item.comment}</p>
                                        </div>
                                    )
                                })
                            }

                        </div>

                        <div className="grn-btn">Print</div>

                    </div>
                    <div className="bas50 marg10">
                        <p className="gffd">Internal Comments</p>
                        <textarea
                            className="width100"
                            value={this.props.acc.comm ? this.props.acc.comm : ""}
                            onChange={this.props.handleAddInfo}>
                        </textarea>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    acc: {
        plates: [
            {
                plate: `plate`,
                comment: `comment`,
                status: true
            },
            {
                plate: `plate`,
                comment: `comment`,
                status: true
            },
            {
                plate: `plate`,
                comment: `comment`,
                status: true
            },
            {
                plate: `plate`,
                comment: `comment`,
                status: true
            },
            {
                plate: `plate`,
                comment: `comment`,
                status: true
            },
        ]
    },
    isOpenState: state.newDDStatus.states,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PatInfo)
