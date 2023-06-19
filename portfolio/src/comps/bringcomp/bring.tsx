
import "./bring.css"
import D from "../../imgs/desc/api2.svg"
import D1 from "../../imgs/desc/database.svg"
import D2 from "../../imgs/desc/react.svg"
import D3 from "../../imgs/desc/html.svg"
import DescCard from "../desccard/descCard"

import {motion} from "framer-motion"

const DESC = [
    {"title":"API", "desc":"Familar with API requests from both backend and frontend.", 
    "imgSrc": `${D}`},
    {"title":"Backend", "desc": "I can connect with databases and have made projects with sql and non-sql databases", 
    "imgSrc": `${D1}`},
    {"title":"Frontend", "desc": "I have make mutiple projects using react and familiar with hooks, state, and typescript",
     "imgSrc": `${D2}`},
]

function Bring() {
    return (
        <div id="bring">
            <div id="text">
                <h1>My <span style={{textDecoration: ''}}>Skills</span></h1>
                <p>I am a full-stack developer and I <br></br>
                make modern frontend designs with effeicent backend services</p>
            </div>
            <div id="descWrapper">
                {
                    DESC.map((item, idx) => {
                        return (
                            <DescCard key={idx} obj={item}></DescCard>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Bring