import "./portfolio.scss"
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import softouch from '../../../public/soft.png'
import unotelos from '../../../public/unotelos.png'
import gpt3 from '../../../public/gpt3.webp'
import luxuryHotel from '../../../public/luxuryHotel.png'

const items = [
    {
        id:1,
        title: "Softouch Clothing",
        img: softouch, 
        desc: "A MERN Stack e-Commerce website with user-auth, admin dashboard, cart and checkout integration",
        link: "",
    },
    {
        id:2,
        title: "Uno Telos",
        img: unotelos, 
        desc: "A full website design and development of a multi-national cutting-edge technology and service company",
        link: "https://uno-website-alpha.vercel.app/",
    },
    {
        id:3,
        title: "GPT 3 React",
        img: gpt3, 
        desc: "An innovative and modern website design showcasing the capabilities of GPT-3. Featuring a sleek, minimalist interface",
        link: "https://what-gpt3.vercel.app/",
    },
    {
        id:4,
        title: "Hotel De'zani",
        img: luxuryHotel, 
        desc: "A luxury hotel design featuring modern website practices with WhatsApp integration for bookings. ",
        link: "https://www.hoteldezani.com/",
    },
    {
        id:5,
        title: "Biko App",
        img: "", 
        desc: "An app for social good — Coming Soon",
        link: "",
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    const handleButtonClick = () => {
        if (item.link) {
            window.open(item.link, '_blank');
        } else {
            alert("Link not available");
        }
    };

    return ( 
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button className="prtfolio__btn" onClick={handleButtonClick}>View Website</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref= useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1 className="font-bold">Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
