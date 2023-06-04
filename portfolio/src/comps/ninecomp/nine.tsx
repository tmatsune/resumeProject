import "./nine.css"
import "./navbottom.css"

import WIN from '../../imgs/ninet/comp.png'
import WIN1 from "../../imgs/ninet/fold.png"
import WIN2 from "../../imgs/ninet/ga.png"
import WIN3 from "../../imgs/ninet/gam.png"
import WIN4 from "../../imgs/ninet/internet.png"
import LOGO from "../../imgs/ninet/windo.png"

import NineFile from "./ninefile"
import WindowMusic from "./windowmusic"
import WindowGame from "./windowgame"
import Internet from "./interent"

import { useState, useEffect } from "react"
const launchsound = require('../../sound/launch.mp3');
const launch = require("../../sound/launch2.mp3");

type Toggle = {
    toMainPage: () => void
}
type Window = {
    obj: {
        imgSrc: string;
        title: string;
    }
    toggle: () => void
}
const WINDOWICONS = [
    {imgSrc: WIN, title: 'My Computer'},
    {imgSrc: WIN1, title: 'My Resume'},
    {imgSrc: WIN2, title: 'Music'}, 
    {imgSrc: WIN3, title: 'Games'}, 
    {imgSrc: WIN4, title: 'Internet'}, 
]


function Ninety( {toMainPage}: Toggle ) {
    
    const [showFile, setShowFile] = useState(false)
    const [showMusic, setShowMusic] = useState(false)
    const [showGame, setShowGame] = useState(false)
    const [showInt, setShowInt] = useState(false)

    const [loadPage, setLoad] = useState(false)
    let audio = new Audio(launchsound)
    let audio2 = new Audio(launch)

    const toggleFile = () => {
        setShowFile(!showFile)
    }
    const toggleMusic = () => {
        setShowMusic(!showMusic)
    }
    const toggleGame = () => {
        setShowGame(!showGame)
    }
    const toggleInt = () => {
        setShowInt(!showInt)
    }

    const loadUp = () => {
        setLoad(!loadPage)
        Launch()
    }
    const Launch = () => {
        audio.load()
        audio.play();
    }
    const MainPage = () => {
        toMainPage()
        audio2.play()
    }
    

    return (
        <div id="nine">
            <div id="static"></div>
            <div id="static1"></div>
            {
                loadPage ? (
                    <div id="windowicons">
                        <img alt='' id="mainLogo" onClick={MainPage} src={LOGO}></img>
                        <Icon obj={WINDOWICONS[0]} toggle={MainPage}></Icon>
                        <Icon obj={WINDOWICONS[1]} toggle={toggleFile}></Icon>
                        <Icon obj={WINDOWICONS[2]} toggle={toggleMusic}></Icon>  
                        <Icon obj={WINDOWICONS[3]} toggle={toggleGame}></Icon>
                        <InternetIcon obj={WINDOWICONS[4]} toggle={toggleInt} ></InternetIcon>
                    </div>
                ) : (   //<button onClick={loadUp} id="startBtn" >Start</button>
                    <div id="startup" onClick={loadUp}> 
                        <h1 >Terence Matsune Porfolio</h1>
                        <h2> Interactive portfolio you can stay on this screen</h2>
                        <h2> Or click on Internet/ My Computer Icon to View Resume</h2>
                        <h2> Click on the screen to view <span id="space">|</span></h2>

                    </div>
                 )
            }
            
            {   // shows resume
                showFile ? (<NineFile toggle={toggleFile} toMainPage={MainPage}></NineFile>) : (null)
            }

            {   // shows music player
                showMusic ? (<WindowMusic toggle={toggleMusic}></WindowMusic>) : (null)
            }

            {   // shows game 
                showGame ? (<WindowGame toggle={toggleGame}></WindowGame>) : (null)
            }

            {   //show Internet
                showInt ? (<Internet toggle={toggleInt} toMainPage={MainPage}></Internet>) : (null)
            }
            <NavBottom toMainPage={MainPage}></NavBottom>
        </div>  
    )
}

function NavBottom({toMainPage}:Toggle) {
    return (
        <div id="navbottom" onClick={toMainPage}>
            <button id='navBtmBtn'>
                <img alt='' id="windLogo" src={LOGO}></img>Start
            </button>
            <h1 id='time'>7:20 PM</h1>
        </div>
    )
}
function Icon({obj, toggle}:Window) {
    const {imgSrc, title} = obj
    const [col, setCol] = useState('none')
    const click = () => {
        toggle()
    }
    return (
        <div id='windowsFile' >
            <img id="windowsIcon" src={imgSrc} alt='' style={{backgroundColor: `${col}`}} onClick={click}></img>
            <p onClick={click}>{title}</p>
        </div>
    )
}
function InternetIcon({obj, toggle}:Window) {
    const {imgSrc, title} = obj
    const [col, setCol] = useState('none')
    const click = () => {
        toggle()
    }
    return (
        <div id='IntwindowsFile' >
            <img id="windowsIcon" src={imgSrc} alt='' style={{backgroundColor: `${col}`}} onClick={click}></img>
            <p onClick={click}>{title}</p>
        </div>
    )
}
export default Ninety