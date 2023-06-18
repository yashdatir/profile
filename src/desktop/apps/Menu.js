import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../styles/app.css";
import { faClose } from '@fortawesome/free-solid-svg-icons';

const Menu = ({ id, onClose }) => {
  return (
    <div key={id} className='menu-main p-absolute'>
      <div className='menu-main-1'>
      <div className='menu-header'>
        <button className='close-icon' onClick={onClose}><FontAwesomeIcon icon={faClose} /></button>
        <span className='p-10'>Apps</span>
      </div>
      <div className='menu-body'>
        hello world
      </div>
      </div>
    </div>
  )
}

export default Menu