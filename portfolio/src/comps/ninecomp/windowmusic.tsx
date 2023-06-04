import "./windowmusic.css"
import { useState, useEffect } from "react";

const song = require("../../sound/song1.mp3");

type Toggle = {
    toggle: () => void;
}
let audio = new Audio(song);
function WindowMusic({toggle}: Toggle) {
    const [num, setNum] = useState(0)
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [num3, setNum3] = useState(0)
    const [play, setPlay] = useState(false)
    const [timer, setTimer] = useState(30)

    const [currSong, setCurrSong] = useState(audio)

    useEffect(() => {
        const x = setInterval(() => {
            setTimer(timer - 1);
            if(play) {
                if(timer > 1){
                    console.log(timer)
                    const n = Math.random() * (40 - 2) + 2;
                    const n1 = Math.random() * (40 - 2) + 2;
                    const n2 = Math.random() * (40 - 2) + 2;
                    const n3 = Math.random() * (40 - 2) + 2;
                    setNum(n)
                    setNum1(n1)
                    setNum2(n2)
                    setNum3(n3)
                }
                if(timer < 1){
                    setPlay(false)
                }
            }
        }, 200 )

        return () => clearInterval(x);
    }, [play])

    const startMusic = () => {
        setPlay(true)
        currSong.play()
    }
    const stopMusic = () => {
        currSong.pause();
        setPlay(false)
    }
    const toggleBoth = () => {
        toggle();
        currSong.pause();
        setPlay(false)
    }
    
    return (
        <div id='music'>
            <div id="nineTop" style={{marginTop: '1%'}}>
                <h1>Music Player</h1>
                <button id="exitBtn" onClick={toggleBoth}>X</button>
            </div>
            <div id="musicTitle">
                <div id="musicTitle1">
                    <h1>You Make My Dreams</h1>
                    <p>hall and oates</p>
                </div>
                <div id="soundWrapper">
                    <div id="beat" style={{height: `${num}px`}}></div>
                    <div id="beat" style={{height: `${num1}px`}}></div>
                    <div id='beat' style={{height: `${num2}px`}}></div>
                    <div id='beat' style={{height: `${num3}px`}}></div>
                </div>
            </div>
            <div>
                <button onClick={startMusic} id="startsong">&#x25B6;</button>
                <button onClick={stopMusic} id="endsong" >
                    <div id='pause' style={{display:'flex'}}>
                        <div id='pause1'></div>
                        <div id='pause1'></div>
                    </div>
                </button>
                <button onClick={stopMusic} id="endsong"><div id="stop"></div></button>
            </div>
            <div id='songDetails'>
                <p>Artist: Hall and Oates</p>
            </div>
            <div id='songDetails' style={{marginTop: '.4%'}}>
                <p>Song: You Make My Dreams Come True</p>
            </div>
        </div>  
    )
}
export default WindowMusic;