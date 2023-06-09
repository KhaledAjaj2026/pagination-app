"use client";

import attendees from '../../json/attendees.json'
import { useEffect } from 'react';
import styles from '../../styles/Home.module.css'

export default function Attendant() {
    useEffect(() => {
    let name, color, id;
    for (let i = 0; i < 5; i++) {
        name = attendees[i].name;
        color = attendees[i].color;
        id = attendees[i].id;
        document.getElementById('attendants_list').innerHTML += 
            `
                <li>
                    <span><span className="identifier">Name: </span>${name}</span>
                    <span><span className="identifier">Color: </span>${color}</span>
                    <span><span className="identifier">ID: </span>${id}</span>
                </li>
            `;
        }
    });
}