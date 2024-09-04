import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

function Navbar(){
    return (
    <nav className="mb-20 flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
            <h1 className="mx-2 text-4xl"><a href="/"><b>Ghani.</b></a></h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/mohammed-ghani-pro/" target="_blank"><FaLinkedin/></a>
            <a href="https://github.com/Ghanipro" target="_blank"><FaGithub/></a>
            <a href="https://www.instagram.com/" target="_blank"><FaInstagram/></a>
        </div>
    </nav>
);
}
export default Navbar