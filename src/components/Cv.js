import React from 'react';
import styled from 'styled-components';
// import PText from './PText';
// import Button from './Button';
// import AboutImg from '../assets/images/ihsan-photo-2.png';
// import AboutInfoItem from './AboutInfoItem';
// import ContactBanner from '../components/ContactBanner';

const CvPageStyles = styled.div`
  padding: 10rem 0 10rem 0;
  .container {
    justify-content: center;
    display: flex;

    iframe {
      width: 960px;
      height: 768px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;

    iframe {
      width: 960px;
      height: 768px;
    }
  }
`;

export default function Cv() {
  return (
    <>
      <CvPageStyles>
        <div className="container">
          <iframe
            title="This is a unique title"
            src="https://drive.google.com/file/d/1-5_XtzJ_dGBaQxA-ESVTnTJeKsbFJ9cs/preview"
            allow="autoplay"
          />
        </div>
      </CvPageStyles>
    </>
  );
}
