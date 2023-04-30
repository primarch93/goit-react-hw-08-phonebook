import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 15px;
  background-color: #20232a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  margin-left: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-align: start;
  text-decoration: none;
  color: #f1f1f1;
  font-size: 18px;
  padding: 5px 10px;
  transition: all 0.3s ease;

  &.active {
    background-color: #fff;
    border-radius: 25px;
    color: #20232a;

    &:hover {
      opacity: 0.8;
    }
  }
  &:hover {
    color: #fff;
  }
`;