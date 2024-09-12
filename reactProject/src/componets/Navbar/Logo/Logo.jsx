import "./logo.css"
import imgLogo from "../../../assets/01.jpeg"

export const Logo = ()=>{
    return(
        <a className="logo">
            <img src={imgLogo} alt="" />
        </a>
    )
}