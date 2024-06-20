import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import relogo from "../assets/relogo.png"
import tail from "../assets/tailwind.png";
import css from "../assets/css.webp";
import java from "../assets/java.webp";
import wp from "../assets/wp.png";





Date = [
  { id: 1, image: css },
  { id: 1, image: java },
  { id: 1, image: relogo },
  { id: 1, image: tail },
  { id: 1, image: wp }

];

const Contact = () => {
  return (
    <section id="contact" className="section">

        

      {Date.map((item) => {
        return (
          <div key={item.id} className="container mx-auto ">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex gap-10 justify-center flex-wrap items-center py-10 "
            >
              <div className=" group/item  w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg  shadow-greyIsh-400/700 hover:shadow-lg '">
                <div className="flex justify-center gap-2">
                  <img src={item.image} alt="" className="w-[auto] h-[100px]" />
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
};

export default Contact;
