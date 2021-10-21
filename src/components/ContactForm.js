import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    background-color: var(--white-alpha-25);
    backdrop-filter: var(--backdrop-filter-blur);
    border: 1.5px solid var(--white-alpha-40);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    width: auto;
    height: auto;
    margin-top: 2rem;

    display: inline-block;
    padding: 1rem 2rem;
    font-size: 1.4rem;
    color: #16bb92;
    outline: none;
    border-radius: 10px;
    background-color: var(--white-alpha-25);
    border: none;
    box-shadow: var(--outer-shadow);
    transition: all 0.3s ease;

    &:hover {
      color: var(--gary-1);
      /* background: linear-gradient(45deg, #16bb92, #1f7c91); */
      box-shadow: var(--inner-shadow);
      transition: all 0.4s ease;
      cursor: pointer;
    }
  }
`;

export default function ContactForm() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [subject, setSubject] = useState('');
  // const form = useRef();
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_pwv0zyi',
        'template_9vbtots',
        e.target,
        'user_mgAcTWNUVqQhFbrvFDllL'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <FormStyle onSubmit={sendEmail}>
        <motion.div
          className="form-group"
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            />
          </label>
        </motion.div>
        <motion.div
          className="form-group"
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.2 }}
        >
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </motion.div>
        <motion.div
          className="form-group"
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.4 }}
        >
          <label htmlFor="subject">
            Your subject
            <input
              type="subject"
              id="subject"
              name="subject"
              // value={subject}
              // onChange={(e) => setSubject(e.target.value)}
            />
          </label>
        </motion.div>
        <motion.div
          className="form-group"
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.6 }}
        >
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              // value={message}
              // onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </motion.div>
        <motion.button
          type="submit"
          value="send"
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.4 }}
        >
          Send
        </motion.button>
      </FormStyle>
    </>
  );
}
