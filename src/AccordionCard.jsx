import React from "react";
import Accordion from "./AccordionComponent"

function AccordionCard (){
    return(
        <div className="accordion-card">
            <div className="grid grid--left">
                <img className="mobile-img mobile-img--main" src="images/illustration-woman-online-mobile.svg" alt="Woman using computer" /> 
                <img className="mobile-img" src="images/bg-pattern-mobile.svg" alt="shadow" />
            </div>
            <div className="grid grid--right">
                <Accordion />
            </div>
        </div> 
    )
}

export default AccordionCard;