import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavItemsList = styled.ul`
  display: flex;
  gap: 16px;
  font-size: 24px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: black;
    background-color: orangered;
  }

  &:not(.active):hover {
    color: orangered;
  }
`;
