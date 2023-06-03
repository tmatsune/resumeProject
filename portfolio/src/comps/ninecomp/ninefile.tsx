

import "./ninefile.css"
import T from "../../imgs/profile/t.png"

type Toggle = {
    toggle: () => void;
    toMainPage: () => void;
}
function NineFile({toggle, toMainPage}: Toggle) {
    return(
        <div id="ninefile">
            <div id="nineTop">
                <h1>Terence's Porfolio</h1>
                <button id="exitBtn" onClick={toggle}>X</button>
            </div>
            <div id="ninePortfolio">
                <h1 style={{marginLeft: '22.6%'}}>Terence's Resume</h1>
                <h1>Full-Stack Developer</h1>
                <h2>Projects:</h2>
                <h2 style={{marginLeft: '6%'}}>-Ecommerce Website</h2>
                <h2 style={{marginLeft: '6%'}}>-Portfolio Website</h2>
                <h2 style={{marginLeft: '10%'}} id="portLink" onClick={toMainPage}>Click Here to View</h2>
                <h2>Languages:</h2>
                <h2 style={{marginLeft: '6%'}}>-Javascript</h2>
                <h2 style={{marginLeft: '6%'}}>-Golang</h2>
                <h2 style={{marginLeft: '6%'}}>-Python</h2>
                <h2 style={{marginLeft: '6%'}}>-TypeScript</h2>
                <h2>About</h2>
                <h3 style={{marginLeft: '6%'}}>Full-stack Developer, Familiar with both frontend and backend</h3>
                <img id="ninePic" alt='' src={T}></img>
            </div>
        </div>
    )
}
export default NineFile;