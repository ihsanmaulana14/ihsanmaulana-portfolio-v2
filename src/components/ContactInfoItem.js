import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  padding: 2rem;
  background-color: var(--white-alpha-25);
  backdrop-filter: var(--backdrop-filter-blur);
  border: 1.5px solid var(--white-alpha-40);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    color: var(--white);
    background-color: var(--white-alpha-25);
    backdrop-filter: var(--backdrop-filter-blur);
    border: 1.5px solid var(--white-alpha-40);
    padding: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
  link = 'it is link',
}) {
  return (
    <a href={link} alt="linkcontact" target="_blank" rel="noreferrer">
      <ItemStyles>
        <div className="icon">{icon}</div>
        <div className="info">
          <PText>{text}</PText>
        </div>
      </ItemStyles>
    </a>
  );
}
