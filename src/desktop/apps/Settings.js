import React from 'react';
import "../../styles/app.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const Settings = ({ id, onClose }) => {
  return (
    <div key={id} className='menu-main p-absolute'>
      <div className='menu-main-1'>
        <div className='menu-header'>
          <button className='close-icon' onClick={onClose}><FontAwesomeIcon icon={faClose} /></button>
          <span className='p-10'>Settings</span>
        </div>
        <div className='menu-body'>
          <div>
            System Info
            <div>{window.navigator.onLine ? 'Online' : 'Offline'}</div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Settings