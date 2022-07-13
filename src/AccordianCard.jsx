import React from "react";

function AccordianCard (){
    return(
        <div className="container bg-light accordian-card">
            <div className="row">
                <div className="col-12 col-md-6 text-center img-col">
                    <img className="mobile-img" src="images/illustration-woman-online-mobile.svg" alt="Woman using computer" /> 
                    <img className="mobile-shadow" src="images/bg-pattern-mobile.svg" alt="shadow" />
                </div>
            </div>
        </div> 
    )
}

export default AccordianCard;