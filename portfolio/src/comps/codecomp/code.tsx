import "./code.css"
import C from "../../imgs/coding/c0.png"
import C1 from "../../imgs/coding/c1.png"
import C2 from "../../imgs/coding/c2.png"
import {motion} from "framer-motion"

type codeDets = {
    obj: {
        imgSrc: string
        desc: string
        title: string
        type: string
    }
}
const CodeSnipit = [ {imgSrc: `${C}`, title: 'PathFinder', desc:'Example of how to implement dijkstra algorithm', type:'algorithms'}, 
                    {imgSrc: `${C1}`, title: 'GoalTracker', desc:'Code here is how data is sent from postgres to frontend', type:'backend'},
                    {imgSrc: `${C2}`, title: 'GoalTracker React', desc:'This is how the data is implemented to html with react', type: 'frontend'},]

function Code() {
    return (
        <div id="code">
        <div id="codeh1">
            <h1>Code Snipits</h1>
            <p>Code examples of how previous work</p>
        </div>
            {
                CodeSnipit.map((item, idx) => {
                    return (
                        <CodeDetails obj={item} key={idx}></CodeDetails>
                    )
                })
            }
        </div>  
    )
}
function CodeDetails({obj}: codeDets) {
    const {imgSrc, desc, title, type} = obj;

    return (
        <div id="codeDetails">
            <motion.div initial={{opacity: 0, scale: .8, y: 100}} whileInView={{opacity: 1, scale: 1, y:0}} 
            transition={{duration: 1.4}}>
            <div id='codeImgWrapper'>
                <img alt='' src={imgSrc} id="codeImg"></img>
            </div>
            </motion.div>

            <div id="codeDesc">
                <h1>{title}</h1>
                <h3>&#9899; {type}</h3>
                <p>{desc}</p>
            </div>
            
        </div>
    )
}

export default Code;