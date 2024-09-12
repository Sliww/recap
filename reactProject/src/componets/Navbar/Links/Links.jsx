import "./links.css"
import { navLink } from "../../../data/navlinks"

export const Links = ()=>{
    return (
        <ul className="menuLinks">
            {navLink.map(link=>(
                <li><a href={link.href}>{link.text}</a></li>
            ))}
        </ul>
    )
}