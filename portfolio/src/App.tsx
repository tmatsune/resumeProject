import './App.css';
import HomePage from './pages/homepage/homePage';
import { useState } from 'react';
import MOON from "../src/imgs/icons/moon6.png"
import SUN from "../src/imgs/icons/sun.png"

function App() {
  const [dark, setDark] = useState(false)

  function toggle() {
    setDark(!dark)
  }

  return (
    <div className={dark ? 'dark' : 'light'}>
      
        <span onClick={toggle} id={dark ? 'darkBtn' : 'lightBtn'}>
          {
            dark ? (<img id="sun" src={SUN} alt=''></img>) : (
              <img id="moon" src={MOON} alt=''></img>
            )
          }
        </span>
        <div className="App">
          <HomePage></HomePage>
        </div>
    </div>  
  );
}

export default App;
