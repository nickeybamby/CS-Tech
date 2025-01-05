import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <Sidebar />
        <div className="wrapper">
             <motion.span 
             initial={{opacity:0, scale:0.5}} 
             animate={{opacity:1, scale:1}} 
             transition={{duration:0.5}} 
             >Clinicraft Studios</motion.span>
            <div className="social">
{/*                 <a href="#"> <img src="/linkedin.svg" alt="" /></a> */}
                <a href="https://www.instagram.com/clinicraftstudios/" target="_blank"> <img src="/instagram.svg" alt="" /></a>
{/*                 <a href="#"> <img src="/twitter.svg" alt="" /></a> */}
                <a href="https://web.facebook.com/clinicraftstudiostech/" target="_blank"> <img src="/facebook.svg" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
