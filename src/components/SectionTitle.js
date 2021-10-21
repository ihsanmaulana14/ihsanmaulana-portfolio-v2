import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-size: 2rem;
  }
  h2 {
    font-size: 6rem;
    margin-top: 0.5rem;
    margin-bottom: 3rem;
    text-transform: uppercase;
    color: var(--font-color-1);
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <SectionTitleStyle className="section-title">
      <motion.p
        variants={fadeLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        {subheading}
      </motion.p>
      <motion.h2
        variants={fadeLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.2 }}
      >
        {heading}
      </motion.h2>
    </SectionTitleStyle>
  );
}
