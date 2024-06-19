import './services.scss';
import { motion } from 'framer-motion';

const variants = {
    initial: {
        x: -200,
        y: 0,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {
  return (
    <motion.div 
    className='services'
    variants={variants}
    initial="initial"
    whileInView="animate"
       
    >
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on helping your brand grow <br /> and dominate its space</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.png" alt="" />
                <h1>
                    <motion.b whileHover={{color:"wheat"}}>Unique</motion.b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"wheat"}}>For Your</motion.b> Business.
                </h1>
                <button>WHAT WE DO</button>
            </div>
        </motion.div> 
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                <h2>UX Design</h2>
                <p>
                At CS Tech, we specialize in UX Design, crafting digital products that prioritize user-centered design. Our team of experts combines creativity and strategy to deliver exceptional experiences that engage and delight users.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{ background: "lightgray", color: "black",  }}>
                <h2>Web Development</h2>
                <p>
                    Our website development services combine cutting-edge technology with creative design to deliver impactful and user-friendly websites. We work closely with our clients to understand their unique goals and create tailored solutions that drive results.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                <h2>SEO</h2>
                <p>
                    Improve your website's search engine rankings and attract more organic traffic by implementing effective on-page SEO practices. From content optimization to meta tags and internal linking strategies, we have you covered.    
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services