import React, { Component } from "react";
import './attendant.scss';
import $ from 'jquery';
import attendees from '../../../attendees.json';

export default class Attendant extends React.Component {
    componentDidMount() {
        let name, color, id;
        for (let i = 0; i <= 5; i++) {
            name = attendees[i].name;
            color = attendees[i].color;
            id = attendees[i].id;
            $(".attendants-list").append(
                `
                    <li>
                        <span><span className="identifier">Name: </span>${name}</span>
                        <span><span className="identifier">Color: </span>${color}</span>
                        <span><span className="identifier">ID: </span>${id}</span>
                    </li>
                `
            );
        }
    }
    render() {
        return (
            <>
            </>
        );
    }
}