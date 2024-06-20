import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: " Wordpress",
    description:
      " - Creating landing pages for various websites",
    text: "Learn more",
    link: "https://www.ryuseiss.co.jp/",
  },
  {
    name: " UX/UI Design",
    description:
      "Adjusted website, on-page and off-page, according to SEO",
      text: "Learn more",
      link: "https://www.xn--42cfd1cras6ch7aw4g0ddb0b9jsb9h.com/",
  },

];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row">
          <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}

          className=" flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
            Now i learn full stack Reactjs and  Nodejs
            </h3>
            {/* <button className="btn btn-sm">See my work</button> */}
          </motion.div>
          {/*services*/}
          <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          
          className="flex-1">
            <div>
              {services.map((service, index) => {
                const { name, description,text, link } = service;

                return (
                  <div className="border-b border-white/20 h-[146px] mb-[38px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a href={link} className="btn w-9 h-9 mb-[42px] flex justify-center items-center"><BsArrowUpRight/></a>
                      <a href={link} className="text-gradient text-sm">{text}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
