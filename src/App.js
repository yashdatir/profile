import React from 'react';
import Desktop from "./desktop/index";
import { useMainHook } from './hooks/useMainHook';
import Mobile from "./phone/index";
import './styles/main.css';

const App = () => {
  const { mode, cursor } = useMainHook()
  return <div style={{ cursor: `url('${cursor}'), auto`, background: "#191919" }} className='main'>{
    mode === "DESKTOP" ? <Desktop /> : mode === "MOBILE" ? <Mobile /> : ""
  }</div>
}

export default App;