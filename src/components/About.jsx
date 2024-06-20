import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "../assets/pic.jpg";



const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] max-blend-lighten bg-top"
          >
            <img src={Image} alt="" className=""/>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">Euducation</h2>

            <p className="mb-6">
              Rajamangala University of technology Krungthep
              <br /> Faculty : Busyiness Administration
              <br /> Major : Information Systems <br />
              GPA : 2.43
            </p>
            <p className="mb-6">
              Weerapat Marit <br />
              Phone : 0960619040 <br />
              Line ID : itongmarit <br />
              Email : tongweerapat1996@gmail.com <br />
              Address : 18/22 Samut prakan  Road Kingkeaw 42

            </p>
          </motion.div>
          <div className="flex gap-x-6 lg:gap-x-10 mb-12">
            <div>
              <div className="text-[40px] font-tertiary text-gradient mb-2">
                {inView ? <CountUp start={0} end={3} duration={5} /> : null}
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                years of <br />
                Experience
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Wordpress</button>
              {/* <a href="" className="text-gradient btn btn-link">
                My Portforlio
              </a> */}
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
    
    
  );
};

export default About;
