import "./fancyGallery.scss";
import { useState } from "react";

const FancyGallery = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const panels = [
    {
      image:
        "https://res.cloudinary.com/dt7fmvznd/image/upload/v1736669917/Instagram_post_-_1_au1uey.png",
      desc: "ad",
    },
    {
      image:
        "https://res.cloudinary.com/dt7fmvznd/image/upload/v1736714291/sop_fi5atk.png",
      desc: "school of programming and software development web design",
    },
    {
      image:
        "https://res.cloudinary.com/dt7fmvznd/image/upload/v1736713110/ledge_wzim75.png",
      desc: "ledge roofing",
    },
    {
      image:
        "https://res.cloudinary.com/dt7fmvznd/image/upload/v1736669211/bling_wkjnuy.png",
      desc: "bling and dazz website design and branding",
    },
    {
      image:
        "https://res.cloudinary.com/dt7fmvznd/image/upload/v1736666696/itamateks_zbupku.png",
      desc: "itamateks website design",
    },
    {
      image:
        "https://res.cloudinary.com/dt7fmvznd/image/upload/v1736665664/regal_iock0m.png",
      desc: "regal plastic surgery web design",
    },
    {
      image:
        "https://res.cloudinary.com/dt7fmvznd/image/upload/v1736616273/avatar_iryaav.png",
      desc: "avatar works web design",
    },
    {
      image:
        "https://res.cloudinary.com/dt7fmvznd/image/upload/v1736613078/guye_zddx04.png",
      desc: "psychotheraphy website design",
    },
  ];

  const handleClick = (index) => {
    setExpandedIndex(index);
  };

  return (
    <>
      <section className=" h-screen overflow-hidden">
        <div
          className="h-full w-full overflow-hidden flex flex-col justify-center items-center relative"
          style={{
            backgroundImage: `url(${panels[expandedIndex].image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="inset-0 absolute bg-[rgba(0,0,0,0.3)] z-0 backdrop-blur-md "></div>
          <div className="mt-5 mb-9 z-10 prjts"> Previous Projects </div>
          <div className="medium__screen "
          style={{
            backgroundImage: `url(${panels[expandedIndex].image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          ></div>
          <div className="fancy__cont max-w-[1050px] h-[75vh] flex items-center justify-center gap-2 z-10 ">
            {panels.map((panel, index) => (
              
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`fancy__img h-full rounded-2xl bg-black cursor-pointer transition-all duration-500 ease-in-out overflow-hidden ${
                  expandedIndex === index ? "w-[60%]" : "w-[10%] block"
                }`}
              >
                <img
                  src={panel.image}
                  alt={panel.desc}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FancyGallery;
