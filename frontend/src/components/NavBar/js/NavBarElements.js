import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa/index.js';

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  min-height: 10vh;
  background-color: #263a7f;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  box-shadow: 5px 0 10px #222;
  position: relative;
  z-index: 1;
`;

export const NavLinkLogo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 0 4rem;
  color: #fff;
  font-size: 1.7rem;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  text-decoration: none;
  margin: 1.5rem;
  padding-bottom: 5px;
  font-size: 1.7rem;
  font-weight: bold;

  &:hover {
    transition: border-bottom 0.2s ease-in-out;
    border-bottom: #fff 3px solid;
  }

  &.active {
    border-bottom: #fff 3px solid;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 1.5rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavAccount = styled.nav`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
`;

export const NavBtnLinkPublic = styled(Link)`
  border-radius: 5px;
  background: #fff;
  padding: 10px 22px;
  color: #222d65;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 1.7rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #222d65;
    color: #fff;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 5px;
  background: #222d65;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 1.7rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
