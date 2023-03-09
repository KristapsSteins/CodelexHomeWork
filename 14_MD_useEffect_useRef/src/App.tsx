import InputWithFocus from './components/InputWithFocus';
import InputWithArray from './components/InputWithArray';
import ColorDropDown from './components/ColorDropDown';
import FirstBox from './components/FirstBox';
import SecondBox from './components/SecondBox';
import ThirdBox from './components/ThirdBox';
import FourthBox from './components/FourthBox';
import FifthBox from './components/FifthBox';
import './App.css'
import CountDisabledButton from './components/CountDisabledButton';
import { useEffect } from 'react'
function App() {
  useEffect(() => {
    console.log('FIRST RENDER')
  }, [])
  

  return (
    <div className="container-xxl">
      <InputWithFocus />
      <InputWithArray />
      <CountDisabledButton />
      <ColorDropDown />
      <div className="box mt-3 ms-2">
        <FirstBox />
      </div>
      <div className="box mt-3 ms-2">
        <SecondBox />
      </div>
      <div className="box mt-3 ms-2">
          <ThirdBox />
        </div>
        <div className="box mt-3 ms-2">
          <FourthBox />
        </div>
      <div className="box mt-3 ms-2">
          <FifthBox />
        </div>
    </div>
  );
}

export default App
