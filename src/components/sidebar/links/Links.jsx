import { motion } from "framer-motion";

const variants = {
  open:{
    transition:{
      staggerChildren: 0.05,
      stahherDirection: 1,
    },
  },
  closed:{
    transition:{
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
open:{
  y: 0,
  opacity: 1, 
},
closed:{
  y: 50,
  opacity: 0, 
  },
};

const Links = () => {

  const items = [
    "Homepage",
    "Services",
    "Portfolio",
    "Contact",
    // "About",
   ];

    return (
      <div className="links" variants={variants}>
          {items.map(item=> (
          <motion.a href={`#${item}`} key={item} variants= {itemVariants} whileHover={{ scale:1.1 }} whileTap={{ scale:0.90 }}>
            {item}
          </motion.a>))}
      </div>
    )
  }
  
  export default Links
