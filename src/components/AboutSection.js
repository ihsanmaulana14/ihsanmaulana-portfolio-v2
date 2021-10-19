import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/ihsan-photo-2.png';

// import SocialMediaArrow from '../assets/images/social-media-arrow.svg';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .glass {
    margin: 0 5rem 0 5rem;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    gap: 1.5rem;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .aboutSection__right {
    box-shadow: var(--inner-shadow);
    padding: 2rem;
    border-radius: 0 20% 0;
    max-width: 400px;
    order: -1;
    .aboutImg {
      border-radius: 0 20% 0;
      box-shadow: var(--outer-shadow);
      padding: 2rem;
    }
  }
  .section-title {
    text-align: center;
  }
  .para {
    margin-left: 0;
    text-align: justify;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    order: -2;
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
    text-align: center;
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
    display: flex;
    justify-content: center;
    ul {
      li {
        margin: 1rem 0 1rem 0;
        a {
          display: inline-block;
          font-size: 2.6rem;
          letter-spacing: 5px;
          transition: transform 0.2s;

          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .glass {
      margin: 0 2rem 0 2rem;
    }
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
      max-width: 360px;
    }
    .aboutSection__right {
      margin-top: 3rem;
      order: -1;

      .aboutImg {
        max-width: 400px;
      }
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: row;
      gap: 3rem;
      justify-content: center;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
    .hero__social {
      width: 100%;
      left: 0px;
      order: -1;
      .hero__social__indicator {
        p {
          font-size: 1.4rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          display: flex;
          gap: 2rem;
          li {
            margin: 0 1rem 0 1rem;
            a {
            }
          }
        }
      }
    }
  }
`;

export default function AboutSection() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeTop = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };
  const fadeBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <AboutSectionStyles>
      <SectionTitle subheading="Let me introduce myself" heading="About Me" />
      <div className="glass">
        <div className="container">
          <div className="aboutSection__left">
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
            >
              <PText>
                passion for responsive website design and a firm believer in the
                mobilefirst approach. freecodecamp certified. Implemented a new
                responsive website approach which increased mobile, and the
                ability to work with teams.
              </PText>
            </motion.div>
            <motion.div
              className="aboutSection__buttons"
              variants={fadeBottom}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
            >
              <Button btnText="Project" btnLink="/projects" />
              <Button btnText="Read More" btnLink="/about" outline />
            </motion.div>
          </div>
          <motion.div
            className="aboutSection__right"
            variants={fadeTop}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            <img className="aboutImg" src={AboutImg} alt="Img" />
          </motion.div>
          {/* Hero SOCIAL */}
          <motion.div
            className="hero__social"
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.1 }}
          >
            {/* <div className="hero__social__indicator">
            <p>Social</p>
            <img src={SocialMediaArrow} alt="icon" />
          </div> */}
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://github.com/ihsanmaulana14"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ihsanmaulana14/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="http://isntagram.com/san.m_tech"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/6281318590716"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </AboutSectionStyles>
  );
}
