import './services.scss';
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.div className='services'>
        <motion.div className="textContainer">
            <p>I focus on helping your brand grow and <br /> dominate its space</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer">
            <div className="title">
                <img src="/people.png" alt="" />
                <h1>
                    <b>Unique</b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <b>For Your</b> Business.
                </h1>
                <button>WHAT WE DO</button>
            </div>
        </motion.div>
        <motion.div className="listContainer">
            <div className="box">
                <h2>UX Design</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate excepturi quod, minima et nulla in consectetur libero perspiciatis molestiae tenetur?
                </p>
                <button>Go</button>
            </div>
            <div className="box">
                <h2>Web Development</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate excepturi quod, minima et nulla in consectetur libero perspiciatis molestiae tenetur?
                </p>
                <button>Go</button>
            </div>
            <div className="box">
                <h2>SEO</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate excepturi quod, minima et nulla in consectetur libero perspiciatis molestiae tenetur?
                </p>
                <button>Go</button>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Services