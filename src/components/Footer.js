import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--white-alpha-25);
  backdrop-filter: var(--backdrop-filter-blur);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--white-alpha-25);
    backdrop-filter: var(--backdrop-filter-blur);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Ihsan Maulana</h1>
          <PText>
            passion for responsive website design and a firm believer in the
            mobilefirst approach. freecodecamp certified. Implemented a new
            responsive website approach which increased mobile, and the ability
            to work with teams.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+62 81318590716',
                path: 'https://wa.me/6281318590716',
              },
              {
                title: 'imaul7853@gmail.com',
                path: 'mailto:imaul7853@gmail.com',
              },
              {
                title: 'Bekasi City, West Java, Indonesia',
                path:
                  'https://www.google.com/maps/place/Bantargebang,+Kota+Bks,+Jawa+Barat/@-6.3361305,106.9571087,13z/data=!3m1!4b1!4m5!3m4!1s0x2e6993cd1cfd5131:0xbc41a51ae9cf5e0e!8m2!3d-6.3396406!4d106.9889904',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Github',
                path: 'https://github.com/ihsanmaulana14',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/ihsanmaulana14/',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2021 - Ihsan Maulana</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
