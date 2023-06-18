import React from 'react';
import "../../styles/desktop.css";
import { info } from '../../info';
import Icons from './Icons';

const Desktop = () => {
  return (
    <div className='desktop-bg'>
      <div className='desktop-bg-icons'>
        {
          Object.keys(info.desktop).map((title) => <Icons key={title} title={title} />)
        }
      </div>
      <div className='desktop-bg-icons'>
        hello
      </div>
    </div>
  )
}

export default Desktop