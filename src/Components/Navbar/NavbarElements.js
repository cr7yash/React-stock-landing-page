import styled from "styled-components";

export const Nav = styled.nav`
  background: #000;
  margin-top: -80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  font-size: 1rem;
  position: sticky;
  top: 0;

  @media screen and (max-width: 960px) {
    transition: 0.8s ease all;
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  padding: 0 24px;
  max-width: 1100px;
`;
