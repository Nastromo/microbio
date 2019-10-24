import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewDropDown from './NewDropDown';



export class GenralComment extends Component {
    constructor(props) {
        super(props);
        this.descn = [`NO ACTINOMYCES ISOLATED`, `Negative for Shigella, Salmonella, Yersinia, Vibrio, Campylobacter,E. Coli 0157 and Plesiomonas Species.`, `Negative for Shigella, Salmonella, Yersinia, Vibrio, Aeromonas,E. Coli 0157 and Plesiomonas Species.`, `IDENTIFICATION TO FOLLOW`, `ENTEROCOCCI SUSCEPTIBLE TO PENICILLINýARE PREDICTABLY SUSCEPTIBLE TO AMPICILLIN,AMOXICILLIN, AMPICILLIN-ýSULBACTAM, AMOXICILLIN-CLAVULANATE,ýPIPERACILLIN AND PIPERACILLIN-TAZOBACTAMýFOR NON-BETA-LACTAMASE-PRODUCING ENTEROCOCCI.ýORGANISMS THAT ARE SUSCEPTIBLE TO TETRACYCLINE ARE ALSO CONSIDERED SUSCEPTIBLE ýTO DOXYCYCLINE AND MINOCYCLINE.`, `Negative for Salmonella, Shigella, Campylobacter, Yersinia, Vibrio, Aeromonas,E. Coli 0157 and Plesiomonas Species.`, `NORMAL FLORA ABSENT`, `RULE OUT STREPTOCOCCUS PNEUMONIAE`, `Negative for Salmonella, Shigella, Campylobacter, Yersinia, Vibrio, Aeromonas,E. Coli 0157 and Plesiomonas Species.`, `THREE OR MORE POTENTIAL PATHOGENS ARE PRESENT WITH  NONE PREDOMINATING, PROBABLY CONTAMINATION OR COLONIZATION. PLEASE RESUBMIT IF CLINICALLY INDICATED.`, `NON-VIABLE ON INITIAL SUB, CULTURE REPLATED`, `NO FUNGAL ELEMENTS SEEN ON KOH PREP`, `The predictive value this tip culture nonexistent. The presence of most organisms in the tip probably represented contamination from the urethra.`, `Negative for SALMONELLA, Shigella, Campylobacter, Yersinia, Vibrio, Aeromonas,E. COLI, CANDIDA, LACTOBACILLUS and Plesiomonas SpeciesýSample not tested to r/o BiFidobacteria.`, `NORMAL ORAL FLORA`, `THIS SAMPLE WAS DETERMINED TO BE POLYMICROBIC. TESTING OF ALL ORGANISMS WILL BE DONE AT DOCTORS REQUEST.`, `PURE CULTURE OF GRAM NEGATIVE BACILLI.ýNORMAL FLORA ABSCENT.`, `Negative for E.COLI, Shigella, Campylobacter, Yersinia, SALMONELLA,VIBRIO Aeromonas, LACTOBACILLUS and Plesiomonas SpeciesýSample not tested to r/o BiFidobacteria.`, `Negative for SALMONELLA, Shigella, Campylobacter, Yersinia, Vibrio, Aeromonas, CANDIDA, LACTOBACILLUS and Plesiomonas SpeciesýSample not tested to r/o BiFidobacteria.`, `OXACILLIN (CEFOXITIN) – SUSPECTIBLE STAPHYLOCOCCI CAN BE CONSIDERED SUSPECTIBLE TO: AMOXICILLIN-CLAVULANATE, AMPICILLIN-SULBACTAM, PIPERACILLIN-TAZOBACTAM, TICARCILLIN-CLAVULANATE, CEFACLOR, CEFDINIR, CEFPODOXIME, CEFPROZIL, CEFUROXIME, LORACARBEF, CEFAMANDOLE, CEFAZOLIN, CEFEPIME, CEFMETAZOLE, CEFONICID, CEFOPERAZONE,CEFOTAXIME, CEFOTETAN, CEFTIZOXIME, CEFTRIAXONE, CEFUROXIME, CEPHALOTHIN, CEFTRAROLINE, MOXALACTAM, DORIPENEM, ERTAPENEM, IMIPENEM, MEROPENEM.RIFAMPIN NOT BE USED ALONE FOR ANTIMICROBIAL THERAPY.`, `NORMAL SKIN FLORA`, `Negative for E.COLI, Shigella, Campylobacter, Yersinia, SALMONELLA,VIBRIO Aeromonas, CANDIDA and Plesiomonas SpeciesýSample not tested to r/o BiFidobacteria.`, `PURE CULTURE OF GRAM POSITIVE COCCI.ýNORMAL FLORA ABSCENT.`, `Negative for E.COLI, Shigella, Campylobacter, Yersinia, Vibrio, Aeromonas, CANDIDA, LACTOBACILLUS and Plesiomonas SpeciesýSample not tested to r/o BiFidobacteria.`, `SENSITIVITY TO FOLLOW`, `Negative for E.COLI, Shigella, Campylobacter, Yersinia, SALMONELLA, Aeromonas, CANDIDA, LACTOBACILLUS and Plesiomonas SpeciesýSample not tested to r/o BiFidobacteria.`, `NORMAL UROGENITAL FLORA`, `This culture was performed by Kirby Bauer ýMethod, MIC values are not applicable`, `THE BIOFIRE PATHOGEN ISOLATED NOT VIABLE ON CULTURE`, `THIS TEST IS NO LONGER PERFORMED AT EMPIRE CITY LABORATORY.ýýYOU CAN ONLY ORDER THE INSURE FIT TEST TO RULE OUT BLOOD IN STOOL.`, `CULTURETTE EXPIRED. INTERPRET RESULTS WITH CAUTION.`, `NORMAL FLORA ABSENT.ýNegative for Salmonella, Shigella, Campylobacter, Yersinia, Vibrio, Aeromonas,E. Coli 0157 and Plesiomonas Species.`, `SAMPLE WAS PLACE ON THE WRONG SIDE OF THE TEST CARD. AS SUCH, TESTING COULD NOT BE COMPLETED.ýýPLEASE, RESUBMIT SAMPLE.`, `Negative for SALMONELLA, Shigella, Campylobacter, Yersinia, LACTOBACILLUS, Vibrio, Aeromonas and Plesiomonas SpeciesýSample not tested to r/o BiFidobacteria.`, `Negative for SALMONELLA, Shigella, Campylobacter, Yersinia, Vibrio, Aeromonas, CANDIDA and Plesiomonas SpeciesýSample not tested to r/o BiFidobacteria.`, `ANAEROBIC ORGANISM ISOLATED, SENTITIVITY NOT PERFORMED. `, `RESULTS OF AMPICILLIN TESTING CAN BE USED TO PREDICT RESULTS FOR AMOXICILLIN.   ýCEFAZOLIN RESULTS PREDICT RESULTS FOR THE ORAL AGENTS CEFACLOR, CEFDINIR, ýCEFRPODOXIME, CEFPROZIL, CEFUROXIME, CEFPHALEXIN AND LORACARBEF.ýORGANISMS THAT ARE SUSCEPTIBLE TO TETRACYCLINE ARE ALSO CONSIDERED SUSCEPTIBLEýTO DOXYCYCLINE AND MINOCYCLINE.`, `RESULTS OF AMPICILLIN TESTING CAN BEýUSED TO PREDICT RESULTS FOR AMOXICILLIN.ýORGANISMS THAT ARE SUSCEPTIBLE ýTETRACYCLINE ARE ALSO CONSIDEREDýSUSCEPTIBLE TO DOXYCYCLINE ANDýMINOCYCLINE.`, `RESULTS OF ERYTHROMYCIN CAN BE USED TO PREDICT RESULTS FOR AZITHROMYCIN, CLARITHROMYCIN, AND DIRITHROMYCIN.ýýORGANISMS THAT ARE SUSCEPTIBLE TO TETRACYCLINE ARE ALSO CONSIDERED SUSCEPTIBLE TO DOXYCYCLINE AND MINOCYCLINE`, `PURE CULTURE OF GRAM NEGATIVE BACILLI`, `Negative for SALMONELLA, Shigella, Campylobacter, Yersinia, Vibrio, Aeromonas and Plesiomonas SpeciesýSample not tested to r/o BiFidobacteria.`, `FEW BETA HEMOLYTIC STREPTOCOCCUS GROUP A ISOLATED`, `PENICILLIN AND AMPICILLIN ARE DRUGS OF CHOICE FOR TREATMENT OF BETA HEMOLYTIC STREPTOCOCCAL INFECTIONS. `, `IDENTIFICATION TO FOLLOW`, `PENICILLIN AND AMPICILLIN ARE DRUGS OF CHOICE FOR THE TREATMENT OF BETA HEMOLYTIC STREPTOCOCCAL INFECTIONS.`, `CONSISTENT WITH A CONTAMINATED SPECIMEN. SUGGEST SUBMISSION OF A FRESH SAMPLE FOR REPEAT CULTURE, IF CLINICALLY INDICATED.`, `Gent.Synergy`, `THIS IS A GENERAL COMMENTS FIELD`, `Beta hemolytic streptococcus group A, B, C, and G that are susceptible to penicillin can be considered susceptible to ampicillin, amoxicillin, amoxicillin-clavulanate, ampicillin-sulbactam, cefazolin, cefepime, ceftaroline, cephradine, cephalothin, cefotaxime, ceftriaxone, ceftizoxime, imipenem, ertapenem, and meropenem. For group A beta streptococci, penicillin is also a surrogate for cefactor, cefdinir, cefprozil, ceftibuten, cefuroxime and cefpodoxime.`, `WITH NORMAL SKIN FLORA`, `NEGATIVE FOR MRSA`, `Negative for Shigella, Campylobacter, Yersinia, Vibrio, Aeromonas,E. Coli 0157 and Plesiomonas Species.`];
    }

    render() {
        return (
            <div className="bor-da">
                <p className="titt-sec">Genral comment</p>
                <div className="dropsh">
                    <div className="bas17 dsa">
                        <p className="gesdf">Code</p>
                        <div className="relative">
                            <input className="simple-input no-marg" />
                        </div>

                    </div>
                    <div className="bas80 dsa">
                        <p className="gesdf">Description</p>
                        <NewDropDown
                            id="descn"
                            actionType="SET_DESCGEN_OPTION"
                            height="30px"
                            status={this.props.isOpenDesc}
                            menu={this.descn}
                            option={this.props.descn} />
                    </div>
                </div>

                <div className="fderr">
                    {
                        this.props.acc.genComments.map((item, i) => {
                            return (
                                <div key={i} className="dfjsd">
                                    <p className="bas90">{item}</p>
                                    <div className="erfddd bas10">
                                        <div className="delete-sml"></div>
                                    </div>
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
        genComments: [
            `genComments 1`,
            `genComments 2`,
            `genComments 3`,
        ]
    }
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(GenralComment)
