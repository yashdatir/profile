import { faClose, faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch } from 'react-redux'
import { closeDesktopApp } from '../../redux/slices/appConfig'

const File = ({ metaData }) => {
  const dispatch = useDispatch();
  console.log(metaData);
  return metaData && (<>
    <div className='menu-main p-absolute'>
       <div className='menu-main-1'>
      <div className='menu-header'>
        <button className='close-icon' onClick={() => dispatch(closeDesktopApp())}><FontAwesomeIcon icon={faClose} /></button>
        <span className='p-10'>{metaData?.label}</span>
      </div>
      <div className='menu-body'>
        {
          metaData?.files?.map((src) => <FontAwesomeIcon icon={faImage} />)
        }
      </div>
      </div>
    </div>
    </>
  );
}

export default File