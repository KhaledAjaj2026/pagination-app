"use client";

import attendees from '../../json/attendees.json'
import { useEffect } from 'react';
import styles from '../../styles/Home.module.css'

export default function Attendants() {
    useEffect(() => {
    let name, color, id;
    for (let i = 0; i < 5; i++) {
        name = attendees[i].name;
        color = attendees[i].color;
        id = attendees[i].id;
        document.getElementById('attendants_list').innerHTML += 
            `
                <li className=${styles.attendants_item}>
                    <span><span className=${styles.identifier}>Name: </span>${name}</span>
                    <span><span className=${styles.identifier}>Color: </span>${color}</span>
                    <span><span className=${styles.identifier}>ID: </span>${id}</span>
                </li>
            `;
        }
    });
}