import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewDropDown from './NewDropDown';



export class GramStain extends Component {
    constructor(props) {
        super(props);
        this.quans = [`Rare`, `Few`, `Moderate`, `Many`, `No`];
        this.grams = [`Gram Positive`, `Gram Negetive`];
        this.morphs = [`Bacilli`, `Cocci in chains`, `Curved Rods`, `Tiny Rods`, `Diplococci`];
        this.epis = [`Rare`, `Few`, `Moderate`, `Many`, `No`];
        this.wbc = [`Rare`, `Few`, `Moderate`, `Many`, `No`];
        this.rbc = [`Rare`, `Few`, `Moderate`, `Many`, `No`];
    }

    render() {
        return (
            <div className="bor-da">
                <p className="titt-sec">Gram Stain</p>
                <div className="dergrdd">
                    <p className="bas17 dsa">Quantitation</p>
                    <p className="bas17 dsa">Gram Reaction</p>
                    <p className="bas17 dsa">Morphology</p>
                    <p className="bas17 dsa">Epithelials</p>
                    <p className="bas17 dsa">WBC</p>
                    <p className="bas17 dsa">RBC</p>
                    <div className="q27"></div>
                </div>
                <div className="dropsh">
                    <div className="bas17 dsa">
                        <NewDropDown
                            id="quantitation"
                            actionType="SET_QUAN_OPTION"
                            height="30px"
                            status={this.props.isOpenQuans}
                            menu={this.quans}
                            option={this.props.quantitation} />
                    </div>
                    <div className="bas17 dsa">
                        <NewDropDown
                            id="gram"
                            actionType="SET_GRAM_OPTION"
                            height="30px"
                            status={this.props.isOpenGrams}
                            menu={this.grams}
                            option={this.props.gram} />
                    </div>
                    <div className="bas17 dsa">
                        <NewDropDown
                            id="morphology"
                            actionType="SET_STATE_OPTION"
                            height="30px"
                            status={this.props.isOpenMo}
                            menu={this.morphs}
                            option={this.props.morphology} />
                    </div>
                    <div className="bas17 dsa">
                        <NewDropDown
                            id="epithelials"
                            actionType="SET_EPI_OPTION"
                            height="30px"
                            status={this.props.isOpenEpi}
                            menu={this.epis}
                            option={this.props.epithelials} />
                    </div>
                    <div className="bas17 dsa">
                        <NewDropDown
                            id="wbc"
                            actionType="SET_STATE_OPTION"
                            height="30px"
                            status={this.props.isOpenWbc}
                            menu={this.wbc}
                            option={this.props.wbc} />
                    </div>
                    <div className="bas17 dsa">
                        <NewDropDown
                            id="rbc"
                            actionType="SET_STATE_OPTION"
                            height="30px"
                            status={this.props.isOpenRbc}
                            menu={this.rbc}
                            option={this.props.rbc} />
                    </div>
                    <div className="add-btn">+</div>
                </div>
                <div className="ferty">
                    {
                        this.props.acc.gram.map((item, i) => {
                            return (
                                <div className="ter-row">
                                    <p className="bas17 dsa">{item.quantitation}</p>
                                    <p className="bas17 dsa">{item.gram}</p>
                                    <p className="bas17 dsa">{item.morphology}</p>
                                    <p className="bas17 dsa">{item.epithelials}</p>
                                    <p className="bas17 dsa">{item.wbc}</p>
                                    <p className="bas17 dsa">{item.rbc}</p>
                                    <div className="delete-sml"></div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    acc: {
        gram: [
            {
                quantitation: `quantitation`,
                gram: `gram`,
                morphology: `morphology`,
                epithelials: `epithelials`,
                wbc: `wbc`,
                rbc: `rbc`,
            },
            {
                quantitation: `quantitation`,
                gram: `gram`,
                morphology: `morphology`,
                epithelials: `epithelials`,
                wbc: `wbc`,
                rbc: `rbc`,
            },
            {
                quantitation: `quantitation`,
                gram: `gram`,
                morphology: `morphology`,
                epithelials: `epithelials`,
                wbc: `wbc`,
                rbc: `rbc`,
            },
            {
                quantitation: `quantitation`,
                gram: `gram`,
                morphology: `morphology`,
                epithelials: `epithelials`,
                wbc: `wbc`,
                rbc: `rbc`,
            },
            {
                quantitation: `quantitation`,
                gram: `gram`,
                morphology: `morphology`,
                epithelials: `epithelials`,
                wbc: `wbc`,
                rbc: `rbc`,
            },
        ]
    }
})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(GramStain)
