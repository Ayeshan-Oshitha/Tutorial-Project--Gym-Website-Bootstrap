import React from "react";
import "./JoinSection.css";
import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";
import PurpleBtn from "../PurpleBtn/PurpleBtn";

const JoinSection = () => {
  return (
    <div className="join-section py-5 text-light">
      <Container className="h-100">
        <div className="h-100 d-flex flex-column align-items-center justify-content-center">
          <motion.h2
            className="section-title text-capitalize fw-bold"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-purple">Shape</span> your body
          </motion.h2>
          <motion.p
            className="text-center w-75"
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo vel maxime, cum est iusto, sunt facere repudiandae veniam quae
            quis obcaecati. Tempora ullam deleniti beatae molestiae praesentium quos quaerat ducimus aliquam delectus? Repellendus et ab
            necessitatibus facilis molestiae, omnis ullam?
          </motion.p>
          <motion.div>
            <PurpleBtn btnTitle="Join now" />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default JoinSection;
