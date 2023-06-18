import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "../../styles/desktop.css"
import { addApp } from '../../redux/slices/appConfig';

const Taskbar = ({ width, height, apps, dispatch }) => {
  return (
    <div className='taskbar-bg' style={{ width, height }}>
      {
        apps?.map(({ appId, icon }) => <FontAwesomeIcon key={appId} onClick={() => dispatch(addApp(appId))} className='icon ripple' icon={icon} />)
      }
    </div>
  )
}

export default Taskbar