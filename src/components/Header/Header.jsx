import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "../Nav";

const MainHeder = styled.header`

  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  }
`;
const Header = () => {
  return (
    <MainHeder>
      <NavLink to={""}>
        <img src="" alt=""/>
      </NavLink>
      <Nav/>
    </MainHeder>
  );
};

export default Header;
