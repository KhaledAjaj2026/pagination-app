import React from "react";
import './attendant.scss';
import attendees from '../../../attendees.json';

function Attendant() {
    let name, color, id;
    for (let i = 0; i <= 5; i++) {
        let newSpan = document.createElement("li");
        name = attendees[i].name;
        color = attendees[i].color;
        id = attendees[i].id;
    }
    return (
        <>
            <li>
                <span><span className="identifier">Name: </span>{ name }</span>
                <span><span className="identifier">Color: </span>{ color }</span>
                <span><span className="identifier">ID: </span>{ id }</span>
            </li>
            <hr />
        </>
    )
}

export default Attendant;