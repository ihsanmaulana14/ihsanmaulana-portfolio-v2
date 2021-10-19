import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--white-alpha-25);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem
              icon={<MdLocalPhone />}
              text="+6281318590716"
              link="tel:6281318590716"
            />
            <ContactInfoItem
              icon={<FaWhatsapp />}
              text="+6281318590716"
              link="https://wa.me/6281318590716"
            />
            <ContactInfoItem
              icon={<MdEmail />}
              text="imaul7853@gmail.com"
              link="mailto:imaul7853@gmail.com"
            />
            <ContactInfoItem
              text="Bekasi City, West Java, Indonesia"
              link="https://www.google.com/maps/place/Bantargebang,+Kota+Bks,+Jawa+Barat/@-6.3361305,106.9571087,13z/data=!3m1!4b1!4m5!3m4!1s0x2e6993cd1cfd5131:0xbc41a51ae9cf5e0e!8m2!3d-6.3396406!4d106.9889904"
            />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
