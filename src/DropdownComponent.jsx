import React from "react"

function Dropdown(props){
    return(
        <div className="accordion-dropdown">
            <div className="accordion-header">
                <p>{props.header}</p>
                <img onClick={props.clicked} className="arrow" src="images/icon-arrow-down.svg" alt="Down arrow" />
            </div>
            <article className={props.expand ? "expand" : "collapse"}>
                <p>{props.body}</p>
            </article>
        </div>
    )
}

export default Dropdown;