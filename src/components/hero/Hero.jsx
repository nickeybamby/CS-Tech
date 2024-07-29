import { motion } from "framer-motion"
import "./hero.scss"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        },
    },
};
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-550%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 25,
        },
    },
};

const Hero = () => {

    const items = [
        "Portfolio",
        "Contact",
    ];

  return (
    <div className="hero">
        <div className="wrapper">

            <motion.div className="textContainer" variants={textVariants} initial="initial" animate = "animate">
                <motion.h2 variants={textVariants} >NICHOLAS WILLIAMS</motion.h2>
                <motion.h1 variants={textVariants} >Web developer and UI designer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants} >See Latest Works</motion.button>
                    <motion.button className="butt" variants={textVariants} a href>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate= "scrollButton" src="/scroll.svg
                  " alt="" />
            </motion.div>
        </div>
        <motion.div  className="slidingTextContainer" variants= {sliderVariants} initial="initial" animate="animate"> Clinicraft Studios Technologies </motion.div>
        <div className="imageContainer">
            <img src="/hero.svg" alt="" />
        </div>
    </div>
  )
}

export default Hero