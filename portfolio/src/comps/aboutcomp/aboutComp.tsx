import "./aboutComp.css"
import T from "../../imgs/profile/t.png"
import { useState } from "react";
import {motion} from "framer-motion"

function About() {
    const [about, setAbout] = useState<string>('')
    const [about1, setAbout1] = useState('')
    const [emailTxt, setEmail] = useState('')

    const [canStart, setCanStart] = useState(true)

    const [show0, setShow0] = useState(true)
    const [show, setShow] = useState(false)
    const [showInp, setShowInp] = useState(false)
    const txt = "&emsp; cout<< I am a self-taught full-stack developer << endl;<br></br>&emsp; cout<< I have made mutiple websites and have used mutiple frameworks and tech stacks;"
    const txt1 = " cout<< You can reach me by sending an email below, click '0' to send, '9' to reset;"
    // '\u{01f4a1}'
    // '\u{&emsp;}'

    const textFunc = async () => {
        var item: string = '';
        for(let i = 0; i < txt.length; i++) {
            setTimeout(() => {
                const nwText = txt[i]
                item += nwText
                setAbout(item)
            }, i * 60 )
        }
    }
    const textFunc1 = async () => {
        var item1: string = '';
        for( let i = 0; i < txt1.length; i++ ) {
            setTimeout(() => {
                const nwText = txt1[i];
                item1 += nwText;
                setAbout1(item1)
            }, i * 60)
        }
    }

    const callBoth = async () => {  
        setShow0(false)
        textFunc()
        setTimeout(() => {
            textFunc1()
            setShow(true)
        }, 10000)
        setTimeout(() => {
            setShowInp(true)
        }, 15200)

    }
    //    KEYINPUTS
    type UserInputs = {
        keyinputs: string[];
    }
    const inputHanlder: UserInputs = {
        keyinputs: []
    }
    window.addEventListener('keydown', e => {
        if ( (e.key === 'Enter' 
            || e.key === '0'
            || e.key === '9'
            || e.key === '7')
            && inputHanlder.keyinputs.indexOf(e.key) === -1
        ) {
            inputHanlder.keyinputs.push(e.key);
            console.log(inputHanlder.keyinputs)
        }
    })
    window.addEventListener('keyup', e => {
        if ( e.key === "Enter"
            || e.key === "0"     
            || e.key === '9'
            || e.key === "7"
            ) {  
            if(inputHanlder.keyinputs.indexOf('Enter') > -1){
                if (canStart) {
                    callBoth()
                    setCanStart(false)
                }   
            }
            if(inputHanlder.keyinputs.indexOf('0') > -1) {
                send()
            }
            if(inputHanlder.keyinputs.indexOf('9') > -1) {
                reset()
            }
            inputHanlder.keyinputs.splice(inputHanlder.keyinputs.indexOf(e.key), 1)
        }
    })

    const cout = "cout<< "
    const wrap = '{'
    const wrap1 = '}'

    const send = () => {
        var mail = document.createElement("a");
        mail.href = `mailto:matsuneterence@gmail.com?Subject=application&body=${emailTxt}`;
        window.open(mail.href);
    }
    const reset = () => {
        setAbout('')
        setAbout1('')
        setShow(false)
        setShowInp(false)
    }

    return (
        <div id="about">
            <div id="txtWrapper">
                <div id="aboutTxt">
                    <h1>About Me</h1>
                </div>
                <motion.div initial={{opacity: 0, scale: .8, y: 140}} whileInView={{opacity: 1, scale: 1, y:0}} 
                transition={{duration: 1.4}} id="ch">
                    <div id="persWrapper">
                        <div id="persDesc">
                            <p>#include &lt;iostream&gt;</p>
                            <p>#include &lt;string&gt;</p>
                            <p>useing namespace std;</p>
                            <p>int main() {wrap}</p>
                            <p>&emsp; {cout}click 'Enter';

                            {
                                show0 ? (<span id="space">|</span>) : (null)
                            }</p>

                            <p dangerouslySetInnerHTML={{ __html: about }}></p>

                            {
                                show ? (<p>&emsp;{about1}<span id="space">|</span></p>) : (null)
                            }

                            {
                                showInp ? (
                                <div>
                                    <textarea id='inp' placeholder="enter text here..."
                                    value={emailTxt} onChange={(e) => setEmail(e.target.value)}></textarea>
                                </div>
                                ) : (null)
                            }
                            <p id="return">&emsp; return 0; <br></br>{wrap1}</p>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}
/*
    <div id="persDesc">
        <h2>Terence Matsune</h2>
        <h4>Full-Stack Developer</h4>
        <h4>Email: matsuneterence@gmail.com</h4>
    </div>
*/
export default About;