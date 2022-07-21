import React from "react"

function Dropdown(props){
    return(
        <div className="accordion-dropdown">
            <div className="accordion-header" onClick={props.clicked}>
                <p>{props.header}</p>
                <img id={props.id}  className="arrow" src="images/icon-arrow-down.svg" alt="Down arrow" />
            </div>
            <article className={props.expand === props.id ? "expand" : "collapse"}>
                <p>{props.body}</p>
            </article>
        </div>
    )
}

export default Dropdown;