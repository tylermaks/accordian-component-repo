import React, {useState} from 'react'
import Dropdown from './DropdownComponent'
import dropdownContent from "./dropdown-details"



function Accordion() {
    const [expand, setExpand] = useState(false)
    // const[selected, setSelected] = useState(null)

    const handleClick = () => { 
        setExpand(!expand)
    }


    return(
        <section className="accordion">
            <h1>FAQ</h1>
            {dropdownContent.map( (obj, index) => (
                <Dropdown
                    header= {obj.header}
                    body={obj.body}
                    clicked={handleClick}
                    expand={expand}
                    // setSelected={() => setSelected(index)} 
                    // selected={selected === index}
                />
            ))}
        </section>
    )
}

export default Accordion;