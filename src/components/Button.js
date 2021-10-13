import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
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
    display: inline-block;
    font-family: 'RobotoMono Regular';
    padding: 1rem 2rem;
    font-size: 2rem;
    color: #16bb92;
    outline: none;
    border-radius: 10px;
    box-shadow: var(--outer-shadow);
    transition: all 0.3s ease;

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
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({
  btnText = 'test',
  btnLink = 'test',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
