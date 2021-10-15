import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ButtonStyle = styled(motion.button)`
  margin-top: 2rem;
  /* font-size: 2.2rem;
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    color: #16bb92;
    transition: all 0.4s ease;
    box-shadow: var(--outer-shadow); */
  /* padding: 10px 25px;
    font-size: 2.2rem;
    font-weight: 500;
    color: #16bb92;
    background-color: transparent;
    line-height: 1.5;
    cursor: pointer;
    border-radius: 30px;
    display: inline-block;
    border: none;
    box-shadow: var(--outer-shadow);
    transition: all 0.3s ease; */
  background-color: transparent;
  display: inline-block;
  font-family: 'RobotoMono Regular';
  padding: 1rem 2rem;
  font-size: 2rem;
  color: #16bb92;
  outline: none;
  border-radius: 10px;
  box-shadow: var(--outer-shadow);
  transition: all 0.3s ease;
  border-width: 0;
  border-style: none;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
  cursor: pointer;

  /* &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease;
      z-index: -1;
    } */

  &:hover {
    color: var(--gary-1);
    /* background: linear-gradient(45deg, #16bb92, #1f7c91); */
    box-shadow: var(--inner-shadow);
    transition: all 0.4s ease;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export default function Button({
  btnText = 'test',
  btnLink = 'test',
  outline = false,
}) {
  return (
    <ButtonStyle
      outline={outline}
      // className="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        // className="button"
        to={btnLink}
      >
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
