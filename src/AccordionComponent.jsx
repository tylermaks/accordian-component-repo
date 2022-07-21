import React, {useState} from 'react'
import Dropdown from './DropdownComponent'
import dropdownContent from "./dropdown-details"



function Accordion() {
    const [expand, setExpand] = useState(null)

    const toggle = i => {
        if(expand === i){
            return setExpand(null)
        }

        setExpand(i)
    }

    return(
        <section className="accordion">
            <h1>FAQ</h1>
            {dropdownContent.map(obj => (
                <Dropdown
                    key={obj.key}
                    header= {obj.header}
                    body={obj.body}
                    id={obj.key}
                    clicked={() => toggle(obj.key)}
                    expand={expand}
                />
            ))}
        </section>
    )
}

export default Accordion;