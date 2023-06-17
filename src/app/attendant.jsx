"use client";

import attendees from '../../json/attendees.json'
import { useEffect } from 'react';
import styles from '../../styles/Home.module.scss'

export default function Attendants() {
    useEffect(() => {
    let name, color, id;
    for (let i = 0; i < 10; i++) {
        name = attendees[i].name;
        color = attendees[i].color;
        id = attendees[i].id;
        document.getElementById('attendants_list').innerHTML += 
            `
                <li className='attendants_item'>
                    <p><span>Name: </span>${name}</p>
                    <p><span>Color: </span>${color}</p>
                    <p><span>ID: </span>${id}</p>
                </li>
            `;
        }
    });
}