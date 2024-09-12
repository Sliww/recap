import { Links } from "./Links/Links"
import { Logo } from "./Logo/Logo"
import "./navbar.css"
import { Profile } from "./Profile/Profile"


export const Navbar = ()=>{
    return (
        <nav>
            <Logo/>
            <Links/>
            <Profile/>
        </nav>
    )
}