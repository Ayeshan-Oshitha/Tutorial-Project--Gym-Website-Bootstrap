import React from "react";
import "./ContactForm.css";
import { motion } from "framer-motion";
import Form from "react-bootstrap/Form";
import PurpleBtn from "../PurpleBtn/PurpleBtn";

const ContactForm = () => {
  return (
    <motion.form className="contact-form" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <Form.Group className="mb-3">
        <Form.Label className="text-capitalize"> Full Name</Form.Label>
        <Form.Control className="rounded-0" type="text"></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="text-capitalize">Email Address</Form.Label>
        <Form.Control className="rounded-0" type="email"></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="text-capitalize">Your message</Form.Label>
        <Form.Control className="rounded-0" type="textarea" rows={3}></Form.Control>
      </Form.Group>
      <PurpleBtn btnTitle="Submi" />
    </motion.form>
  );
};

export default ContactForm;
