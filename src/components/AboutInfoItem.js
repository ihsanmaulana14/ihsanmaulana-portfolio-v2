import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import PText from './PText';

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  gap: 2rem;
  margin-top: 3rem;
  .title {
    font-size: 1.8rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    /* position: absolute; */
    left: 18rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;

    .item-detail {
      font-size: 1.4rem;
      margin-top: 1rem;
      text-align: justify;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
      .item {
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 8px;

        }

        .item-detail {
          font-size: 1.4rem;
          margin-top: 1rem;
          text-align: justify;
        }
      }
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem({
  title = 'Title',
  items = ['HTML', 'CSS'],
  itemDetail = '',
  itemDetail2 = '',
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
            <p className="item-detail">{itemDetail}</p>
            <p className="item-detail">{itemDetail2}</p>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
