import "./nine.css"
import "./navbottom.css"

import WIN from '../../imgs/ninet/comp.png'
import WIN1 from "../../imgs/ninet/fold.png"
import WIN2 from "../../imgs/ninet/ga.png"
import WIN3 from "../../imgs/ninet/gam.png"
import LOGO from "../../imgs/ninet/windo.png"

import NineFile from "./ninefile"

import { useState } from "react"

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
]
function Ninety( {toMainPage}: Toggle ) {
    const [showFile, setShowFile] = useState(false)

    const toggleFile = () => {
        setShowFile(!showFile)
    }
    const temp = () => {
    }
    //https://github.com/tmatsune/portfolio.git
    return (
        <div id="nine">
            <div id="static"></div>
            <div id="static1"></div>
            <img alt='' id="mainLogo" onClick={toMainPage} src={LOGO}></img>
            <Icon obj={WINDOWICONS[0]} toggle={toMainPage}></Icon>
            <Icon obj={WINDOWICONS[1]} toggle={toggleFile}></Icon>
            <Icon obj={WINDOWICONS[2]} toggle={temp}></Icon>  
            <Icon obj={WINDOWICONS[3]} toggle={temp}></Icon>
            {
                showFile ? (<NineFile toggle={toggleFile} toMainPage={toMainPage}></NineFile>) : (null)
            }
            <NavBottom toMainPage={toMainPage}></NavBottom>
        </div>  
    )
}
function NavBottom({toMainPage}:Toggle) {
    return (
        <div id="navbottom" onClick={toMainPage}>
            <button id='navBtmBtn'>
                <img alt='' id="windLogo" src={LOGO}></img>Start
            </button>
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
export default Ninety