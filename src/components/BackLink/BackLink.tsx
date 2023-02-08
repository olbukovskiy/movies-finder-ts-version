import React from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './BackLink.styled';

export const BackLink: React.FunctionComponent<{
  to: string;
  children?: React.ReactNode;
}> = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
