
import "./internet.css"
import EXP from "../../imgs/ninet/explore.png"
import { useState } from "react"
import useDragger from "../../context/useDragger"

const int = require('../../sound/intcut.mp3')
const launch = require('../../sound/launch2.mp3')

type Toggle = {
    toggle: () => void;
    toMainPage: () => void;
}

const sound1 = new Audio(int)


function Internet({toggle, toMainPage}:Toggle) {
    
    const [show, setShow] = useState(false)

    const launchInterent = () => {
        setShow(true)
        sound1.play()
        setTimeout(() => {
            toMainPage()
            toggle()
        }, 2900);
    }
    useDragger('nine', 'InineTop', 'internet')

    return (
        <div id='internet'>
            <div id="InineTop">
                <h1>Internet</h1>
                <button id="exitBtn" onClick={toggle}>X</button>
            </div>

            {
                show ? (
                    <div>
                        <img alt='' id='exp' src={EXP}></img>
                    </div>
                ) : (
                    <div id="gotoint">
                        <div id="popup">
                            <h1>Welcome</h1>
                            <button id="exitBtn" onClick={launchInterent}>X</button>
                        </div>
                        <div id="popupdet">
                            <p>Welcome to Interet Click to Launch</p>
                            <button id="launchInt" onClick={launchInterent}> Start</button>
                        </div>
                    </div>  
                )
            }

        </div>
    )
}
export default Internet