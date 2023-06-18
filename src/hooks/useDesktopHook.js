import { useDispatch, useSelector } from 'react-redux';

const useDesktopHook = () => {
    const dispatch = useDispatch();
    const { backgroundColor, backgroundImage, taskbarOrientation, taskBarApps } = useSelector(({ desktopConfig }) => desktopConfig);
  return ({ backgroundColor, backgroundImage, taskbarOrientation, taskBarApps, dispatch })
}

export default useDesktopHook