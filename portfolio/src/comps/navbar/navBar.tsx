import "./navBar.css"
import NINE from "../../imgs/ninet/comp.png"

type BackToNine = {
    backToNine: () => void;
}
function NavBar({backToNine}:BackToNine) {

    return (
        <div id="nav">
            <img id="windowsImg" alt=''src={NINE} onClick={backToNine}></img>
            <h1 id="terence">Terence Matsune</h1>
        </div>
    )
}
export default NavBar