import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/ihsan-photo-2.png';
import AboutInfoItem from '../components/AboutInfoItem';
// import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
    padding: 2rem;
    box-shadow: var(--inner-shadow);
    /* box-shadow: var(--inner-shadow); */
    border-radius: 0 50px 0;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    text-align: justify;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      padding: 2rem;
      box-shadow: var(--outer-shadow);
      border-radius: 0 50px 0;
      transition: all 0.4s ease;

      &:hover {
        box-shadow: var(--inner-shadow);
        cursor: pointer;
      }
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .about__info__heading3 {
    font-size: 2.6rem;
    /* text-transform: uppercase; */

    a {
      font-family: 'Montserrat SemiBold';
      margin-left: 1rem;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .about__info__heading3 {
      font-size: 2rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Ihsan Maulana</span>
              </p>
              <h2 className="about__heading">A front-end developer</h2>
              <div className="about__info">
                <PText>
                  I am Ihsan Maulana, a graduate of Computer and Network
                  Engineering at Bekasi City 2 Vocational High School in 2021.
                  Passion for responsive website design and a firm believer in
                  the mobilefirst approach. freecodecamp certified. Implemented
                  a new responsive website approach which increased mobile, and
                  the ability to work with teams.
                </PText>
              </div>
              <Button btnText="See CV" btnLink="/Cv" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="Primary School"
                items={['2009-2015', 'SD Negeri Bantargebang 3']}
              />
              <AboutInfoItem
                title="Junior High School"
                items={['2015-2018', 'Bekasi City 8 State Junior High School']}
              />
              <AboutInfoItem
                title="Vacation High School"
                items={[
                  '2018-2021',
                  'Computer and Network Engineering',
                  'Bekasi City 2 Vocational High School',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Languages"
                items={['HTML & CSS', 'JavaScript', 'PHP']}
              />
              <AboutInfoItem
                title="Frameworks"
                items={['React JS', 'Node Js', 'CodeIgniter']}
              />
              <AboutInfoItem
                title="Design"
                items={['Photoshop', 'Adobe Ilustrator', 'Figma']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>
              <br />
              <h3 className="about__info__heading3">
                Online Cource
                <a
                  href="https://freecodecamp.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  freecodecamp.org
                </a>
              </h3>

              <AboutInfoItem
                title="July 18 – July 31, 2021"
                items={['Responsive Web Design']}
                itemDetail="
                - complete the courses given such as, HTML, CSS,
                Aplied Visual Design, Aplied Accessibility and
                Responsive Web Design Principles."
                itemDetail2="- Completing the Responsive Web Design Projects"
              />
              <AboutInfoItem
                title="June 18 – June 31, 2021"
                items={['Front End Development']}
                itemDetail="
                 - complete the courses given such as, Bootstrap,
                 SASS, React and Redux"
                itemDetail2="- Completing the Front End Libraries Projects"
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Certificates</h1>
              <br />
              <h3 className="about__info__heading3">
                Online Cource at
                <a
                  href="https://freecodecamp.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  freecodecamp.org
                </a>
              </h3>

              <a
                href="https://www.freecodecamp.org/certification/ihsanmaulana141002/responsive-web-design"
                target="_blank"
                rel="noreferrer"
              >
                <AboutInfoItem
                  title="July 31, 2021"
                  items={['Responsive Web Design']}
                />
              </a>
              <a
                href="https://www.freecodecamp.org/certification/ihsanmaulana141002/responsive-web-design"
                target="_blank"
                rel="noreferrer"
              >
                <AboutInfoItem
                  title="July 11, 2021"
                  items={['Front End Development']}
                />
              </a>
              <br />
              <br />
              <br />
              <h3 className="about__info__heading3">
                Online Cource at
                <a
                  href="https://sololearn.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  sololearn.com
                </a>
              </h3>

              <a
                href="https://www.sololearn.com/Certificate/1059-22757114/jpg/"
                target="_blank"
                rel="noreferrer"
              >
                <AboutInfoItem title="July 15,2021" items={['PHP Course ']} />
              </a>
              <br />
              <br />
              <br />
              <h3 className="about__info__heading3">
                Online Cource at
                <a
                  href="https://codepolitan.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  codepolitan.com
                </a>
              </h3>

              <a
                href="https://www.codepolitan.com/c/NL6PDMF/"
                target="_blank"
                rel="noreferrer"
              >
                <AboutInfoItem
                  title="June 20, 2021"
                  items={['Basic HTML and CSS ']}
                />
              </a>
              <a
                href="https://www.codepolitan.com/c/DNGJ6CN"
                target="_blank"
                rel="noreferrer"
              >
                <AboutInfoItem
                  title="June 23, 2021"
                  items={['Basic JavaScript']}
                />
              </a>
              <a
                href="https://www.codepolitan.com/c/B48XWLT"
                target="_blank"
                rel="noreferrer"
              >
                <AboutInfoItem
                  title="June 24, 2021"
                  items={['Basic JQuery ']}
                />
              </a>
              <a
                href="https://www.codepolitan.com/c/3B8RITH"
                target="_blank"
                rel="noreferrer"
              >
                <AboutInfoItem
                  title="August 14, 2021"
                  items={['Learn JavaScript Async']}
                />
              </a>
              <a
                href="https://www.codepolitan.com/c/QDGQ5SL"
                target="_blank"
                rel="noreferrer"
              >
                <AboutInfoItem
                  title="August 3, 2021"
                  items={['Learn GIT beginners']}
                />
              </a>
            </div>
          </div>
        </div>
        {/* <ContactBanner /> */}
      </AboutPageStyles>
    </>
  );
}
