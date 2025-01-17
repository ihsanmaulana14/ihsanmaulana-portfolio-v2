import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import MyLogo from '../assets/images/im-logo-512px.png';

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  /* background: var(--dark-bg-2); */
  background-color: var(--white-alpha-25);
  border: 1.5px solid var(--white-alpha-40);
  /* backdrop-filter: var(--backdrop-filter-blur); */

  .__header {
    display: flex;
    justify-content: space-between;
  }

  .logo {
    width: 40px;
    height: 40px;
    margin-top: 0.85rem;
  }
  ul {
    max-width: 1200px;
    /* margin: 0 auto;
    width: 90%; */
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      /* &:hover {
        background-color: var(--deep-dark);
      } */
    }
    a {
      display: inline-block;
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--blue-light);
      outline: none;
      border-radius: 10px;

      transition: all 0.3s ease;

      /* &:hover {
        color: gray;
      } */
    }
    .active {
      color: var(--font-color-1);
    }
  }
  .mobile-menu-icon {
    /* position: absolute; */
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems {
    .copyright {
      display: none;
    }
    .closeNavIcon {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    /* padding: 0; */
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .logo {
      width: 30px;
      height: 30px;
      margin-top: 0.85rem;
    }
    .navItems {
      border: 2.5px solid var(--white-alpha-40);
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--white-alpha-25);
      /* background-image: linear-gradient(
        to bottom right,
        var(--pink-light),
        var(--cyan-light)
      ); */
      padding: 2rem;
      width: 100%;
      height: 90vh;
      border-radius: 10px;
      position: absolute;
      right: 0;
      left: 0;
      top: var(--top);
      display: flex;
      flex-direction: column;
      gap: 5rem;
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
        transition: all 0.4s ease;
        a {
          /* background-image: linear-gradient(
            to bottom right,
            var(--pink-light),
            var(--cyan-light)
          ); */
          background-color: var(--white-alpha-40);
          box-shadow: var(--outer-shadow);
          transition: all 0.4s ease;
          &:hover {
            color: gray;
            /* background-color: #22232763; */
            transition: all 0.4s ease;
            box-shadow: var(--inner-shadow);
          }
          .active {
            color: var(--font-color-1);
            box-shadow: var(--inner-shadow);
          }
        }
      }
      .copyright {
        display: block;
        position: absolute;
        top: 50%;
        font-size: 15px;
        color: var(--text-black-600);
        transform: translateY(-50%) rotate(90deg);
        left: -60px;
      }
    }
  }
`;

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavStyles className={!showNav ? 'blur' : ''}>
      <div className="container-l">
        <div className="__header">
          <div className="logo">
            <img src={MyLogo} alt="" />
          </div>
          <div
            className="mobile-menu-icon"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            <MdMenu />
          </div>

          <ul className={!showNav ? 'navItems hide-item' : 'navItems blur'}>
            <div
              className="closeNavIcon"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              <MdClose />
            </div>
            <li>
              <NavLink
                to="/"
                exact
                onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
              >
                Contact
              </NavLink>
            </li>
            <p className="copyright">© 2021 - Ihsan Maulana</p>
          </ul>
        </div>
      </div>
    </NavStyles>
  );
}
