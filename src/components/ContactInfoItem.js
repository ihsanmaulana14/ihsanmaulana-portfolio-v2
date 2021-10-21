import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PText from './PText';

const ItemStyles = styled(motion.div)`
  padding: 2rem;
  background-color: var(--white-alpha-25);
  backdrop-filter: var(--backdrop-filter-blur);
  border: 1.5px solid var(--white-alpha-40);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    color: var(--white);
    background-color: var(--white-alpha-25);
    backdrop-filter: var(--backdrop-filter-blur);
    border: 1.5px solid var(--white-alpha-40);
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
  link = 'it is link',
}) {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <a href={link} alt="linkcontact" target="_blank" rel="noreferrer">
      <ItemStyles
        variants={fadeLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.4 }}
      >
        <div className="icon">{icon}</div>
        <div className="info">
          <PText>{text}</PText>
        </div>
      </ItemStyles>
    </a>
  );
}
