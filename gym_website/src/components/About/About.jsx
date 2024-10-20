import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import AboutImg from "../../assets/images/img4.jpg";
import PurpleBtn from "../PurpleBtn/PurpleBtn";

const About = () => {
  return (
    <div className="bg-black text-light py-4 py-sm-5" id="about">
      <div className="container">
        <div className="flex-column-reverse flex-lg-row row">
          <motion.div
            className="col-lg-6 d-flex justify-content-center"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img className="img-fluid w-75 mt-4 mt-lg-0" src={AboutImg} alt="about us img" />
          </motion.div>
          <motion.div
            className="col-lg-6 d-flex flex-column justify-content-center align-items-center"
            initial={{ opacity: 0, x: 350 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="section-title text-capitalize fw-bold">
              About <span className="text-purple">us</span>
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed cum sapiente fugit nihil corporis incidunt esse vero, velit
              deleniti, quae quisquam repudiandae animi eius temporibus recusandae neque dolores mollitia aliquam consectetur in possimus
              at. Voluptates soluta neque velit molestias excepturi beatae, magnam, voluptatibus ipsum nemo illum debitis autem numquam
              quae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sint alias tempora quam ab totam quasi iure excepturi
              voluptates nam, id ea repellendus, obcaecati incidunt exercitationem quo laudantium nostrum, ut animi fugit dicta consequatur
              vel! Incidunt cum voluptatibus ipsam mollitia.
            </p>
            <PurpleBtn btnTitle="More about us" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
