import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewDropDown from './NewDropDown';
import CheckBox from './Checkbox';


export class Organism extends Component {
    constructor(props) {
        super(props);
        this.description = [`Abiotrophia sp.`, `Abiotrophia adiacens`, `Abiotrophia defectiva`, `Abiotrophia/Granulicatella sp.`, `Achromobacter sp.`, `Achromobacter denitrificans`, `Achromobacter insolitus`, `Achromobacter piechaudii`, `Achromobacter spanius`, `Achromobacter xylosoxidans`, `Acinetobacter sp.`, `Acinetobacter baumannii comple...`, `Acinetobacter beijerinckii`, `Acinetobacter gyllenbergii`, `Acinetobacter haemolyticus`, `Acinetobacter johnsonii`, `Acinetobacter junii`, `Acinetobacter lwoffii`, `Acinetobacter parvus`, `Acinetobacter radioresistens`, `Acinetobacter schindleri`, `Actinobacillus Actinomycetemco...`, `Actinomyces sp.`, `Actinomyces israelii`, `Actinomyces meyeri`, `Actinomyces naeslundii`, `Actinomyces odontolyticus`, `Actinomyces viscosus`, `Aerococcus sp.`, `Aerococcus sanguinicola`, `Aerococcus urinae`, `Aerococcus viridans`, `Aeromonas sp.`, `Aeromonas caviae`, `Aeromonas caviae complex (A. c...`, `Aeromonas hydrophila`, `Aeromonas hydrophila complex (...`, `Aggregatibacter sp.`, `Aggregatibacter (Actinobacillu...`, `Aggregatibacter (Haemophilus) ...`, `Aggregatibacter segnis`, `Alcaligenes sp.`, `Alcaligenes faecalis`, `Alistipes sp.`, `Alloiococcus sp.`, `Alloiococcus otitidis (otitis)`, `Anaerococcus (Peptostreptococcus) sp.`, `Anaerococcus (Peptostreptococcus) hydrogenalis`, `Anaerococcus (Peptostreptococcus) lactolyticus`, `Anaerococcus (Peptostreptococcus) octavius`, `Anaerococcus (Peptostreptococcus) vaginalis`, `Anaerococcus (Peptostreptococcus) prevotii`, `Anaerococcus (Peptostreptococcus) tetradius`, `Arcanobacterium sp.`, `Arcanobacterium haemolyticum`, `Atopobium (Peptostreptococcus) sp.`, `Atopobium parvulum (Peptostreptococcus parvulus)`, `Atopobium vaginae`, `gram negative bacilli`, `gram positive cocci`];
        this.сolony = [`<10,000 CFU/mL`, `10 - 25,000 CFU/mL`, `25 - 50,000 CFU/mL`, `50 - 75,000 CFU/mL`, `75 - 100,000 CFU/mL`, `> 100,000 CFU/mL`];
        this.isolate = [`no actinomyces isolated`, `Negative for shigella, salmonella, yersinia, vibrio, campylobacterýand plesiomonas species.`, `Negative for shigella, salmonella, yersinia, vibrio, aeromonas,e. ýcoli 0157 and plesiomonas species.`, `NO BETA HEMOLYTIC STREPTOCOCCUS GROUP A, C, OR G ISOLATED`, `Negative for shigella, salmonella, yersinia, vibrio, aeromonas, ýcampylobacter and plesiomonas species`, `STRAIN 1`, `STRAIN 2`, `enterococci susceptible to penicillin are predictably susceptible toýampicillin,amoxicillin, ampicillin-sulbactam, amoxicillin-clavulanate,ýpiperacillin and piperacillin-tazobactam for non-ß-lactamase-ýproducing enterococci. Organisms that are susceptible to ýtetracycline are also considered susceptible to doxycycline and ýminocycline`, `SENT TO THE DEPARTMENT OF HEALTH TO RULE OUT BACILLUS ANTHRACIS`, `Negative for shigella, salmonella, e.coli 0157, yersinia, aeromonas, ýcampylobacter and vibrio species`, `MIXED NORMAL UROGENITAL FLORA. No susceptibility testing permitted`, `Negative for salmonella, shigella, campylobacter, yersinia, ývibrio, aeromonas,e. coli 0157 and plesiomonas species`, `Negative for shigella, salmonella, e.coli 0157, yersinia, aeromonas, ýcampylobacter and plesiomonas species`, `Negative for shigella, salmonella, e.coli 0157, vibrio, aeromonas, ýcampylobacter and plesiomonas species`, `normal flora absent`, `Negative for salmonella, shigella, campylobacter, yersinia, ývibrio, aeromonas,e. coli 0157 and plesiomonas species`, `identification to follow`, `THREE OR MORE POTENTIAL PATHOGENS ARE PRESENT WITH  NONE PREDOMINATING, PROBABLY CONTAMINATION OR COLONIZATION. PLEASE RESUBMIT IF CLINICALLY INDICATED.`, `Carbapenemase Resistant Enterobacteriaceae (isolates ofýEnterobacteriaceae suspicious for Carbapenemase production ýbased on Imipenem or Meropenem MICs of 2-4µg/ml or ýErtapenem MIC of 2µg/ml will be reported with the comment ýCARB: possible Carbapenemase producer.ýNOTE: Doctors must be informed of ýthis if it flags in microscan. If further testing is required, the isolate will be sent to the New York City Department of health.`, `NO FUNGAL ELEMENTS SEEN ON KOH PREP`, `Negative for salmonella, shigella, campylobacter, yersinia, vibrio, ýaeromonas,e. coli, candida, lactobacillus and plesiomonas speciesýsample not tested to r/o bifidobacteria.`, `inducible clidamycin positiveý(dtest positive)`, `Negative for e.coli, shigella, campylobacter, yersinia, salmonella,ývibrio aeromonas, lactobacillus and plesiomonas species sample notýtested to r/o bifidobacteria.`, `Negative for salmonella, shigella, campylobacter, yersinia,ývibrio, aeromonas, candida, lactobacillus and plesiomonas speciesýsample notýtested to r/o bifidobacteria.`, `oxacillin (cefoxitin) susceptible staphylococci can be ýconsidered suspectible to: amoxicillin-clavulanate, ampicillin-sulbactam, piperacillin-tazobactam, ticarcillin-clavulanate, cefaclor, cefdinir, cefpodoxime, cefprozil, cefuroxime, ýloracarbef, cefamandole, cefazolin, cefepime, cefmetazole, cefonicid, cefoperazone, cefotaxime, cefotetan, ceftizoxime, ceftriaxone, cefuroxime, cephalothin, ceftraroline, moxalactam, doripenem, ertapenem, imipenem, meropenem.rifampin should not be used alone for antimicrobial therapy.`, `NORMAL SKIN FLORA`, `Negative for e.coli, shigella, campylobacter, yersinia, salmonella,ývibrio aeromonas, candida and plesiomonas speciesýsample notýtested to r/o bifidobacteria.`, `Negative for e.coli, shigella, campylobacter, yersinia,ývibrio, aeromonas, candida, lactobacillus and plesiomonas speciesýsample notýtested to r/o bifidobacteria.`, `SENSITIVITY TO FOLLOW`, `AEROBIC BOTTLE ONLY.`, `NORMAL FLORA`, `NORMAL UROGENITAL FLORA`, `THE BIOFIRE PATHOGEN ISOLATED NOT VIABLE ON CULTURE`, `not required`, `NON-VIABLE FOR SENSITIVITY`, `this tick transmits human granulocyticýehrlichiosis (hge), rocky ýmountain spottedýfever, and tularemia.`, `BETA LACTAMASE NEGATIVE.ýA NEGATIVE BETA LACTAMASE TEST PREDICTS SUSPECTIBILITYýTO PENICILLIN, AMPICILLIN AND AMOXICILLIN.`, `BETA LACTAMASE POSITIVE;ýA POSITIVE BETA LACTAMASE TEST PREDICTS RESISTANCE TO ýPENICILLIN, AMPICILLIN AND AMOXICILLIN.`, `NORMAL RESPIRATORY FLORA`, `THIS TEST IS NO LONGER PERFORMED AT EMPIRE CITY LABORATORY.ýýYOU CAN ONLY ORDER THE INSURE FIT TEST TO RULE OUT BLOOD IN STOOL.`, `CULTURETTE EXPIRED. INTERPRET RESULTS WITH CAUTION.`, `SAMPLE WAS PLACE ON THE WRONG SIDE OF THE TEST CARD. AS SUCH, TESTING COULD NOT BE COMPLETED.ýýPLEASE, RESUBMIT SAMPLE.`, `This Enterobacteriaceae is CRE positive and as such, would be resistant to carbapenems. These organisms have shown high levels of resistance to antibiotics of the beta lactam family.`, `INITIAL SCREEN OF THIS THROAT CULTURE INDICATES " NO BETA HEMOLYTIC STREPTOCOCCI"". FURTHER INCUBATION IS REQUIRED.`, `testing`, ` HAEMOPHILUS SPECIES;ý ß-LACTAMASE NEGATIVE – A NEGATIVE ý ß-LACTAMASE TEST PREDICTS SUSPECTIBILY TO PENICILLIN, AMPICILLIN AND AMOXICILLIN.`, `HAEMOPHILUS SPECIES;ýB-LACTAMASE POSITIVE – A POSITIVE ýß-LACTAMASE TEST PREDICTS RESISTANCE TO ýPENICILLIN, AMPICILLIN AND AMOXICILLIN.`, `NO BETA HEMOLYTIC STREPTOCOCCUS GROUP A ISOLATED`, `Negative for salmonella, shigella, campylobacter, yersinia, ývibrio, aeromonas, candida and plesiomonas species sample notýtested to r/o bifidobacteria.`, `SEE WOUND CULTURE FOR SENSITIVITY`, `Results of ampicillin testing can be used to predict results for ýamoxicillin. Cefazolin results predict results for the oral agents ýcefaclor, cefdinir, cefrpodoxime, cefprozil, cefuroxime, cefphalexin ýand loracarbef. Organisms that are susceptible tetracycline are ýalso considered susceptible to doxycycline and minocycline.`, `Results of ampicillin testing can be used to predict results for ýamoxicillin. Organisms that are susceptible tetracycline are also ýconsidered susceptible to doxycycline and minocycline.`, `RESULTS OF ERYTHROMYCIN CAN BE USED TO PREDICT RESULTS FOR AZITHROMYCIN, CLARITHROMYCIN, AND DIRITHROMYCIN.ýORGANISMS THAT ARE SUSCEPTIBLE TO TETRACYCLINE ARE ALSO CONSIDERED SUSCEPTIBLE TO DOXYCYCLINE AND MINOCYCLINE`, `PURE CULTURE OF GRAM NEGATIVE BACILLI`, `PENDING ANAEROBES`, `PENICILLIN AND AMPICILLIN ARE DRUGS OF CHOICE FOR THE TREATMENT OF BETA HEMOLYTIC STREPTOCOCCAL INFECTIONS.`, `No CLSI suspectibility guideline standard interpretative ýguidelines have not been established for suspectabilityýtesting for (indicate organism by name).`, `ANAEROBIC BOTTLE ONLY.`, `Beta hemolytic streptococcus group A, B, C, and G that are susceptible to penicillin can be considered susceptible to ampicillin, amoxicillin, amoxicillin-clavulanate, ampicillin-sulbactam, cefazolin, cefepime, ceftaroline, cephradine, cephalothin, cefotaxime, ceftriaxone, ceftizoxime, imipenem, ertapenem, and meropenem. For group A beta streptococci, penicillin is also a surrogate for cefactor, cefdinir, cefprozil, ceftibuten, cefuroxime and cefpodoxime.`, `WITH NORMAL SKIN FLORA`, `NEGATIVE FOR MRSA`, `THIS ORGANISM IDENTIFIED IS NON-VIABLE FOR SUSCEPTIBILITY TESTING.`, `Negative for salmonella, campylobacter, yersinia, ývibrio, aeromonas,e. coli 0157 and plesiomonas species.`, `Negative for shigella, campylobacter, yersinia, ývibrio, aeromonas,e. coli 0157 and plesiomonas species.`];
    }

    render() {
        return (
            <div className="bor-da">
                <p className="titt-sec">Organism</p>
                <div className="dropsh">
                    <div className="bas17 dsa">
                        <p className="gesdf">Organism Code</p>
                        <div className="relative">
                            <input className="simple-input no-marg" />
                        </div>

                    </div>
                    <div className="bas17 dsa">
                        <p className="gesdf">Description</p>
                        <NewDropDown
                            id="description"
                            actionType="SET_DESC_OPTION"
                            height="30px"
                            status={this.props.isOpenDesc}
                            menu={this.description}
                            option={this.props.description} />
                    </div>
                    <div className="bas17 dsa">
                        <p className="gesdf">Colony Count</p>
                        <NewDropDown
                            id="сolony"
                            actionType="SET_STATE_OPTION"
                            height="30px"
                            status={this.props.isOpenColony}
                            menu={this.сolony}
                            option={this.props.сolony} />
                    </div>
                    <div className="bas17 dsa">
                        <p className="gesdf">Isolate Code</p>
                        <input className="simple-input no-marg" />
                    </div>
                    <div className="bas17 dsa">
                        <p className="gesdf">Isolate desc</p>
                        <NewDropDown
                            id="isolate"
                            actionType="SET_STATE_OPTION"
                            height="30px"
                            status={this.props.isOpenIso}
                            menu={this.isolate}
                            option={this.props.isolate} />
                    </div>
                    <div className="bas17 dsa">
                        <p className="gesdf">Sensitivity: </p>
                        <div className="he30">
                            <CheckBox status={true} title="" id="sens" />
                        </div>

                    </div>
                    <div>
                        <p className="gesdf">Act</p>
                        <div className="add-btn">+</div>
                    </div>
                </div>
                <div className="tytjgh">
                    <p className="bas10">#</p>
                    <p className="bas20">Oraginism</p>
                    <p className="bas30">Colony Count</p>
                    <p className="bas30">Isolate Comments</p>
                </div>

                <div className="fderr">
                    {
                        this.props.acc.organisms.map((item, i) => {
                            return (
                                <div key={i} className="dfjsd">
                                    <p className="bas10">{i}</p>
                                    <p className="bas20">{item.oraginism}</p>
                                    <p className="bas30">{item.colony}</p>
                                    <p className="bas30">{item.comments}</p>
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
        organisms: [
            {
                oraginism: `oraginism`,
                colony: `colony`,
                comments: `comments`
            },
            {
                oraginism: `oraginism`,
                colony: `colony`,
                comments: `comments`
            },
            {
                oraginism: `oraginism`,
                colony: `colony`,
                comments: `comments`
            },
        ]
    }
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Organism)
