
import "./homePage.css"
import Main from "../../comps/main/main";
import NavBar from "../../comps/navbar/navBar";
import Bring from "../../comps/bringcomp/bring";
import Projects from "../../comps/projectscomp/projects";
import Skills from "../../comps/skillscomp/skills";
import About from "../../comps/aboutcomp/aboutComp";
import Code from "../../comps/codecomp/code";
import Ninety from "../../comps/ninecomp/nine";

import { useState } from "react";

function HomePage() {
    const [show, setShow] = useState(false)
    const toggle = () => {
        setShow(!show)
    }
    return (
        <div id ="homeMain">
            <NavBar backToNine={toggle}></NavBar>
            {
                show ? (<Ninety toMainPage={toggle}></Ninety>) : (
            <div>
            <Main></Main>
            <Bring></Bring>
            <Projects></Projects>
            <Code></Code>
            <Skills></Skills>
            <About></About>
            </div>
            )
        }
        </div>
    )
}

export default HomePage;