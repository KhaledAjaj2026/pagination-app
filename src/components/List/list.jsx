import React from "react";
import Attendant from "./Attendant/attendant";
import './list.scss';

function List() {
    return (
        <>
            <h1 className="list-title">List of Attendees:</h1>
            <div className="list-body">
                <ul id="attendants-list">
                    <Attendant />
                </ul>
            </div>
        </>
    )
}

export default List;