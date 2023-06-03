import "./projects.css"
import "./projdesc.css"
import { Link } from "react-router-dom"
import { LOGOS } from "../../utils/logos"
import GIT from "../../imgs/icons/git.svg"
import PAGE from "../../imgs/icons/logout.svg"

import P0 from "../../imgs/proj/housify.png"
import P01 from "../../imgs/proj/housify1.png"
import P from "../../imgs/proj/path.png"
import PA1 from "../../imgs/proj/path1.png"
import P1 from "../../imgs/proj/stoigol.png"
import P11 from "../../imgs/proj/stoigoal1.png"
import P2 from "../../imgs/proj/katsue.png"
import P21 from "../../imgs/proj/katsue1.png"

import { motion } from "framer-motion"
import { useState } from "react"

const PROJECTS = [
    {name:"Housify", projDesc: "A house reservation web applicatio with calendar system",
    imgSrc:`${P0}`, git:"https://github.com/tmatsune/housifyfront", demo:"", techs: [ LOGOS[0], LOGOS[13], LOGOS[7], LOGOS[1], LOGOS[12], LOGOS[9] ], emoji:"&#127968;"
    , prImgs:[P0, P01]},

    {name:"PathFinder", projDesc: "A pathfinding website using slgorithms such as A*, dijkstra, DFS to find the shortest path in any given maze user makes.", 
    imgSrc:`${P}`, git:"https://github.com/tmatsune/JSpathfinder", demo:"https://tmatsune.github.io/JSpathfinder/", 
    techs: [ LOGOS[6], LOGOS[5], LOGOS[4], ] , emoji:"&#127968;" , prImgs:[P, PA1]}, 

    {name:"GoalTracker", projDesc: "A habit tracking website where users can add trackable habits, save documents, track hours for each day of the year, and time their study hours",
    imgSrc:`${P1}` , git:"https://github.com/tmatsune/goals", demo:"", techs: [ LOGOS[0],LOGOS[3], LOGOS[9], LOGOS[1] ], emoji:"&#127968;"
    , prImgs:[P1, P11]},

    {name:"Katuse Clothing", projDesc: "An ecommerce website with modern design. Connected to stripe to make payments and built with gin framework", 
    imgSrc:`${P2}`, git:"https://github.com/tmatsune/katseuwebapp", demo:"https://chic-starlight-700937.netlify.app", techs: [ LOGOS[0], LOGOS[3], LOGOS[8], LOGOS[1],], emoji:"&#127968;"
    , prImgs:[P2, P21]}
]
type projectDesc = {
    obj: {
        name: string;
        projDesc: string;
        imgSrc: string;
        git: string;
        demo: string;
        techs: string[];
        emoji: string;
        prImgs: string[]
    }
    margin: number
}
type ProjImg = {
    prImgs: string[];
    imgSrc: string;
}
const colors = ['rgb(176, 196, 222)']

function Projects() {

    return (
        <div id="projects">
            <div id="title">
                <h1>Featured Projects </h1>
                <h2>Unique Websites with unique design <br></br>and backend services</h2>
            </div>
            {
                PROJECTS.map((item, idx) => {
                    return (
                        <div id="projectsWrapper" key={idx}>
                            <div id="proj1" >
                           <ProjectImg imgSrc={item.imgSrc} prImgs={item.prImgs}></ProjectImg>
                            <ProjDesc obj={item} margin={-8}></ProjDesc>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        
    )
}
function ProjectImg({imgSrc, prImgs}: ProjImg) {
    const [num, setNum] = useState(0)
    const [img, setImg] = useState(prImgs[num])
    const check = () => {
        console.log(num, img)
    }
    const option1 = () => {
        setImg(prImgs[0])
    }
    const option2 = () => {
        setImg(prImgs[1])
    }
    
    return (
            <motion.div initial={{opacity: 0, scale: .8, x: -200}} whileInView={{opacity: 1, scale: 1, x:0}} 
                transition={{duration: 1.8}} id="ch">
                <img src={`${img}`} alt="" id="projImg"></img>
                <div id="choose">
                    <p onClick={option1}>&#8636;</p>
                    <p onClick={option2}>&#8640;</p>
                </div>
            </motion.div>
    )
}
function ProjDesc({obj, margin}:projectDesc,) {
    const {name, projDesc, git, demo, techs, emoji} = obj

    return (  //marginLeft: `${margin}%`
        <div id="projDesc" style={{}}>
            <h1 >{name}</h1>
            <p>{projDesc}</p>
            <div>
            {
                techs.map((item, idx) => {
                    return ( <img id="techs" alt='' src={item} key={idx}></img>)
                })
            }
            </div>
            <div id="linksDiv">
            <span id="gitBtn"><Link to={`${git}`}>Code</Link><img src={GIT} alt='' id="techs"></img></span>
            {
                demo === "" ? (null) 
                : (<span id="gitBtn"><Link to={`${demo}`}>Demo</Link><img src={PAGE} alt='' id="techs"></img></span>)
            }                
            </div>
        </div>
    )
}
function Box() {
    return (
    <motion.div
    style={{height: '200px', width: '200px', background:'blue', marginTop: '30%'}}
    initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}}>
    </motion.div>
    )
}
export default Projects