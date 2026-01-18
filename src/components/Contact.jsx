import React, {useState} from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import emailjs from "@emailjs/browser";
import "../scss/Contact.scss"


export default function Contact() {

  const [formData, setFormData] = useState({name: "", email: "", message: ""})
  const [error, setError] = useState({name: "", email: "", message: ""})
  const [snack, setSnack] = useState({ severity: "success", msg: "" });
  const [open, setOpen] = useState(false);


  const validateForm = (name, value) => {
    let errors = {...error};

    switch(name) {
      case "name":
        if (!value.trim()) {
          errors.name = "Name is required";
        } else {
          errors.name = "";
        }
        break;
      case "email":
        if (!value.trim()) {
          errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          errors.email = "Email is invalid";
        } else {
          errors.email = "";
        }
        break;
      case "message":
        if (!value.trim()) {
          errors.message = "Message is required";
        } else {
          errors.message = "";
        }
        break;
      default:
        break;
    }
    setError(errors);
  };

   const isValid =
  formData.name?.trim() &&
  formData.email?.trim() &&
  formData.message?.trim() &&
  !error.name &&
  !error.email &&
  !error.message;
  
  const handleChange = (e) => { 
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    validateForm(name, value);
  }

  const handleSubmit = async (e) => {
    if(isValid){
    e.preventDefault();

    try {
      // 1) Send to you
      await emailjs.send(
        "service_nsn0t69",
        "template_4n4spuq",
        {
          from_name: formData.name,
          from_email: formData.email,
          from_message: formData.message,
        },
        "0jwwqe9zMHSHRs48T"
      );

      // 2) Auto-reply to sender
      await emailjs.send(
        "service_nsn0t69",
        "template_hgrg53e",
        {
          to_name: formData.name,
          to_email: formData.email, // must match template "To Email"
        },
        "0jwwqe9zMHSHRs48T"
      );


    setOpen(true);
    setSnack({ severity: "success", msg: "The message has been sent successfully!" });
    setFormData({ name: "", email: "", message: "" });
    }
     catch (err) {
      setOpen(true);
      setSnack({ severity: "error", msg: "Something went wrong, please try again later." });
    }
  }
  };

  return (
    <div id="contact" className="contact-container">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Let's discuss your next project or just say hello!
      </p>

      <div className="contact">
        {/* Left Side */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>vivekshegde2001@gmail.com</span>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <span>+1 (210)-544-1384</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>San Antonio, TX, USA</span>
          </div>

          <h3 className="follow-title">Follow Me</h3>

          <div className="social-icons">
            <a
              href="https://github.com/HEGDEVIVEK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-s-hegde-2001/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form">
          <h3>Send Message</h3>
          {/* <form action="https://formsubmit.co/vivekshegde2001@gmail.com" method="POST"> */}
          {/* <form action="https://formspree.io/f/mkooodjg" method="POST"> */}
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your name"
              onChange={handleChange}
            />
            <p className="errorMsg">{error.name}</p>

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="your.email@example.com"
              onChange={handleChange}
            />
            <p className="errorMsg">{error.email}</p>

            <label>Message</label>
            <textarea
              placeholder="Your message..."
              name="message"
              value={formData.message}
              rows="5"
              onChange={handleChange}
            ></textarea>
            <p className="errorMsg">{error.message}</p>

            <button type="submit" disabled={!isValid}>
              Send Message
            </button>
          </form>

          <Snackbar open={open} autoHideDuration={3000}  onClose={() => setOpen(false)}>
            <Alert 
              severity={snack.severity} 
              variant="filled" 
              onClose={() => setOpen(false)}
              sx={{ width: "100%" }}>
              {snack.msg}
            </Alert>
          </Snackbar>
          
        </div>
      </div>
    </div>
  );
}
