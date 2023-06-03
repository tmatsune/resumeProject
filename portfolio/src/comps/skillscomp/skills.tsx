import "./skills.css"
import { LOGOS } from "../../utils/logos"
import {motion} from "framer-motion"


const SKILLNAMES = ["Typescript", "React", "Github", "Golang", "CSS", "HTML", "Javascript", "NestJs","MongoDb", "Postgres",
"Python", "Flask", "Firebase", "GraphQl"]
function Skills() {

    return (
        <div id="skills">
            <div id="skillsTxt">
                <h1>Languages/Tools</h1>
                <p></p>
            </div>
            <div id="allSkills">
                {
                    LOGOS.map((item, idx) => {
                        return (
                        <motion.div id="logoImgWrapper" initial={{opacity:0, scale: .6}} 
                        whileInView={{opacity:1, scale: 1}} transition={{duration: 1.2}} key={idx}>
                             <img alt="" key={idx} id="logosImg" src={item}></img>
                             <p>{SKILLNAMES[idx]}</p>
                        </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Skills;