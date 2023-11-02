import "./main.css"
import { LOGOS } from "../../utils/logos"
import T from "../../imgs/profile/S.png"

import G from "../../imgs/icons/github copy 2.svg"
import IG from "../../imgs/icons/instagram.svg"
import IN from "../../imgs/icons/linkedin.svg"
import { Link } from "react-router-dom";

import { useRef } from "react"
import {motion} from "framer-motion"


const CONTACT = [G, IG, IN]

const LINKS = ["https://github.com/tmatsune", "https://github.com/tmatsune", "https://www.linkedin.com/in/terence-matsune-bb4957195/e"]
function Main() {  //<img alt="" id="T" src={T}></img>

    const scrollDiv = useRef<HTMLDivElement|null>(null)

    const scrollToTop = () => {
        if(scrollDiv){
            scrollDiv.current?.scrollIntoView({behavior:"smooth"})
        }
    }
    const right = '<'
    const left = '>'
    
    return (
 
        <div id="mainDiv">  
            <div id="dummyDiv" ref={scrollDiv}></div>
            <div id="name">
                <h1 id="fullname">Terence Matsune</h1>
                <h2>Computer Science Major</h2>
                <div id="blob"></div>
                <div id="contactDiv">
                {
                    CONTACT.map((item, idx) => {
                        return (
                            <Link to={`${LINKS[idx]}`} key={idx}>
                                <img id="logoImg" key={idx} src={item} alt=""></img>
                            </Link>
                        )
                    })
                }
                </div>
            </div> 
            <div id="scroll"></div>

        </div>
    )
}

export default Main
/*
                {
                    LOGOS.map((item, idx) => {
                        const h = idx * Math.floor(Math.random() * 8);
                        const l = idx * Math.floor(Math.random() * 50);
                        console.log(h, l)
                        return (
                            <img key={idx} alt="" 
                            id="logoImg" 
                            style={{marginTop: `${h}px`, 
                            marginLeft: `${l}px`}}
                            src={item}></img>
                        )
                    })
                }
*/
