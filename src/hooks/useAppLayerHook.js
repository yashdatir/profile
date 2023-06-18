import { useDispatch, useSelector } from "react-redux"

const useAppLayerHook = () => {
    const dispatch = useDispatch();
    const appConfig = useSelector(({appConfig}) => appConfig);
  return ({ appConfig, dispatch })
}

export default useAppLayerHook