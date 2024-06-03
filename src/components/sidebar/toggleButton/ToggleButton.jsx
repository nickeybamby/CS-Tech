import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={()=> setOpen((prev)=> !prev)}>
      <svg width="31" height="22" viewBox="0 0 31 22" fill="black" xmlns="http://www.w3.org/2000/svg">
      <motion.path d="M2 1.5H25" stroke="#111010" stroke-width="6" stroke-linecap="round" 
        variants={{ 
          closed: { d: "M 2 2.5 L 20 2.5"}, 
          open: {d: "M 3 16.5 L 17 2.5"}
          }} />
        <motion.path d="M2 10.5H25" stroke="#111010" stroke-width="6" stroke-linecap="round" 
        variants={{ 
          closed: { opacity: 1}, 
          open: {opacity: 0} 
        }}/>
        <motion.path d="M2 19.5H25" stroke="#111010" stroke-width="6" stroke-linecap="round" 
        variants={{ 
          closed: { d: "M 2 16.346 L 20 16.346", fill: "black"}, 
          open: {d: "M 3 2.5 L 17 16.346"}, 
        }} />
      </svg>

    </button>
  )
}
 
export default ToggleButton