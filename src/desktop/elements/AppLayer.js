import React from 'react'
import useAppLayerHook from '../../hooks/useAppLayerHook'
import Menu from '../apps/Menu';
import Info from '../apps/Info';
import About from '../apps/About';
import Games from '../apps/Games';
import Settings from '../apps/Settings';
import "../../styles/app.css";
import { removeApp } from '../../redux/slices/appConfig';
import { info } from '../../info';
import File from '../apps/File';

const AppLayer = () => {
    const { appConfig, dispatch } = useAppLayerHook();
    return (
        <div className='app-area'>
            <File metaData={info.desktop[appConfig.desktopApp]} />
            {
                appConfig?.openApps?.map((appId) => <React.Fragment key={appId}>
                    {appId === "TASKBAR_MENU" ? <Menu id={appId} onClose={() => dispatch(removeApp(appId))} />
                        : appId === "TASKBAR_INFO" ? <Info id={appId} onClose={() => dispatch(removeApp(appId))} />
                            : appId === "TASKBAR_ABOUT" ? <About id={appId} onClose={() => dispatch(removeApp(appId))} />
                                : appId === "TASKBAR_GAMES" ? <Games id={appId} onClose={() => dispatch(removeApp(appId))} />
                                    : appId === "TASKBAR_SETTINGS" ? <Settings id={appId} onClose={() => dispatch(removeApp(appId))} /> : null}
                </React.Fragment>)
            }
        </div>
    )
}

export default AppLayer;