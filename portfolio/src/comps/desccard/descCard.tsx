
import "./descCard.css"

import {motion}from "framer-motion"

type descript = {
    obj: {
        title: string;
        desc: string;
        imgSrc: string;
    }
}
function DescCard({obj}:descript) {
    const {title, desc, imgSrc} = obj
    return (
        <motion.div initial={{opacity: 0, scale: 0.8, x: -200}} whileInView={{opacity: 1, scale:1, x:0}} 
            transition={{duration: 1.8}}>
        <div id="descCard">
            <div>
                <h1 >{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
        </motion.div>

    )
}
export default DescCard;