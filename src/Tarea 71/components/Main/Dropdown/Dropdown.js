import React from 'react';
import style from "Tarea 71/components/Main/Dropdown/dropdown.module.scss";


const Dropdown = ({ }) => {
    return (
        <select id={`${style.dropdown}`}>
            <option value="All">All Courses</option>
        </select>
    )
}

export default Dropdown
