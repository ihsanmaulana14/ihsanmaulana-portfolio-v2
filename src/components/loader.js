import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { motion } from 'framer-motion';

const LoaderStyle = styled.div`
  .bg {
    background: rgba(0, 153, 255, 1);
    animation: bgg 16087ms ease-in alternate infinite;
  }
  @keyframes bgg {
    0% {
      background: rgba(0, 153, 255, 1);
    }
    50% {
      background: rgba(41, 255, 121, 1);
    }
    100% {
      background: rgba(255, 74, 88, 1);
    }
  }
  .loader .circle {
    position: absolute;
    width: 38px;
    height: 38px;
    opacity: 0;
    transform: rotate(225deg);
    animation-iteration-count: infinite;
    animation-name: orbit;
    animation-duration: 5.5s;
  }
  .loader .circle:after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 0 9px rgba(255, 255, 255, 0.7);
  }
  .loader .circle:nth-child(2) {
    animation-delay: 240ms;
  }
  .loader .circle:nth-child(3) {
    animation-delay: 480ms;
  }
  .loader .circle:nth-child(4) {
    animation-delay: 720ms;
  }
  .loader .circle:nth-child(5) {
    animation-delay: 960ms;
  }
  .loader {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1500;
    background-color: var(--dark-bg-2);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: bgg 16087ms ease-in alternate infinite;
  }
  @keyframes orbit {
    0% {
      transform: rotate(225deg);
      opacity: 1;
      animation-timing-function: ease-out;
    }
    7% {
      transform: rotate(345deg);
      animation-timing-function: linear;
    }
    30% {
      transform: rotate(455deg);
      animation-timing-function: ease-in-out;
    }
    39% {
      transform: rotate(690deg);
      animation-timing-function: linear;
    }
    70% {
      transform: rotate(815deg);
      opacity: 1;
      animation-timing-function: ease-out;
    }
    75% {
      transform: rotate(945deg);
      animation-timing-function: ease-out;
    }
    76% {
      transform: rotate(945deg);
      opacity: 0;
    }
    100% {
      transform: rotate(945deg);
      opacity: 0;
    }
  }
  .loader.fade-out {
    opacity: 0;
    transition: all 0.6s ease;
  }

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

export default function loader() {
  return (
    <LoaderStyle>
      <div className="loader">
        <div className="bg" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
      </div>
    </LoaderStyle>
  );
}
