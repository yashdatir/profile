import React, { useEffect } from 'react';
import "../../styles/desktop.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { openDesktopApp } from "../../redux/slices/appConfig";

const Icons = ({ title }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        window.$(`#${title}`).draggable();
    }, [title]);
    return (
        <div onClick={() => dispatch(openDesktopApp(title))} className='desktop-icon' id={title} key={title}>
            <FontAwesomeIcon icon={faFolder} />
            {title}
        </div>
    )
}

export default Icons