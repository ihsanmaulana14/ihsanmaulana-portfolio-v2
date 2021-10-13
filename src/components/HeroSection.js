import React from 'react';
import styled from 'styled-components';
// import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';
import HeroImg from '../assets/images/ihsan-photo-2.png';
import Button from './Button';
// import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
// import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    /* min-height: 1000px; */
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .content {
    display: flex;
    .hero__heading {
      display: flex;
      flex-direction: column;
      align-self: center;
      justify-content: center;
      font-size: 2rem;
      margin-bottom: 1rem;
      position: relative;
      span {
        display: inline-block;
        width: 100%;
      }
      .hero__name {
        font-family: 'Montserrat SemiBold';
        @media screen and (min-width: 768px) {
          font-size: 7rem;
        }
        color: var(--font-color-1);
      }
    }
    .hero__img {
      width: 100%;
      height: auto;
      margin: 1rem auto;
      padding: 2rem;
      /* border: 2px solid var(--yt-spec-10-percent-layer); */
      border-radius: 50%;
      box-shadow: var(--inner-shadow);

      @media screen and (min-width: 768px) {
        max-width: 400px;
        height: auto;
        order: 1;
      }
      img {
        border-radius: 50%;
        padding: 1rem;
        box-shadow: var(--outer-shadow);
        transition: all 0.4s ease;

        &:hover {
          cursor: pointer;
          box-shadow: var(--inner-shadow);
          /* border: 2px solid var(--yt-spec-10-percent-layer); */
        }
      }
    }
    .hero__info {
      margin-top: 1rem;
    }
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 0px;
  }
  .hero__scrollDown {
    right: 0px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 2.6rem;
          /* transform: rotate(-90deg); */
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .content {
      flex-direction: column;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: auto;
      max-width: 340px;
      width: 300px;
      order: -1;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      top: 45%;
      /* width: 20px; */
      .hero__social__indicator {
        /* width: 20px; */
        p {
          font-size: 1.4rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              /* font-size: 1.4rem; */
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      top: 45%;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          {/* Hero IMG */}
          <div className="content">
            <div className="hero__img">
              <img src={HeroImg} alt="" />
            </div>
            {/* Hero HEADING */}
            <h1 className="hero__heading">
              <span>Hello, I'am</span>
              <span className="hero__name">Ihsan Maulana</span>
              <Button btnText="see my works" btnLink="/projects" />
            </h1>
          </div>

          {/* Hero SCROLL DOWN */}
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
