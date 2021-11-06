import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}
function Accordion(props: AccordionPropsType) {
    if (props.collapsed) {
        return <div>
            <AccordionTittle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    } return <div>
        <AccordionTittle title={props.titleValue}/>
    </div>
    }


type AccordionTittleType = {
    title: string
}
function AccordionTittle(props: AccordionTittleType) {
    return <h3>-- {props.title} --</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;