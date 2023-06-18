import React from 'react'
import DesktopBG from "./elements/Desktop";
import Taskbar from './elements/Taskbar';
import useDesktopHook from '../hooks/useDesktopHook';
import AppLayer from './elements/AppLayer';

const Desktop = () => {
  const { backgroundColor, backgroundImage, taskbarOrientation, taskBarApps, dispatch } = useDesktopHook();
  return (
    <div style={{ backgroundColor, backgroundImage }} className='desktop-main'>
      <AppLayer />
      {
        taskbarOrientation === "TOP" && <Taskbar dispatch={dispatch} apps={taskBarApps} />
      }
      <DesktopBG backgroundColor={backgroundColor} backgroundImage={backgroundImage} />
      {
        taskbarOrientation === "BOTTOM" && <Taskbar dispatch={dispatch} apps={taskBarApps} />
      }
    </div>
  )
}

export default Desktop