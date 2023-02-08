import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(Link)`
  position: sticky;
  z-index: 10000;
  top: 100px;
  left: 48px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border-radius: 5px;
  border: 1px solid #000;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  background-color: #fff;

  :hover {
    color: orangered;
  }
`;
