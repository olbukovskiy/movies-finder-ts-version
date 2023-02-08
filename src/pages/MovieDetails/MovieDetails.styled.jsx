import styled from '@emotion/styled';

export const MovieDetailsContainer = styled.div`
  margin-top: 14px;
  margin-left: auto;
  margin-right: auto;

  max-width: calc(100% - 96px);
`;

export const MovieWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-bottom: 32px;
`;

export const MovieDetailsImage = styled.div`
  height: 600px;
`;

export const MovieDetailsWrapper = styled.div`
  width: 60%;
  max-width: 800px;
`;

export const MovieDetailsInfo = styled.div``;

export const MovieDetailsTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 18px;
`;

export const MovieDetailsSubsectionTitle = styled.h3`
  margin-top: 26px;
  margin-bottom: 16px;
  font-size: 24px;
`;

export const MovieDetailsText = styled.p`
  font-size: 18px;
  margin-bottom: 12px;
  line-height: 1.5;
`;

export const MovieDetailsTextModifier = styled.span`
  color: orangered;
  font-weight: 600;
`;

export const MovieDetailsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;
`;

export const MovieDetailsListItem = styled.li`
  font-size: 28px;
  text-decoration: underline;
  font-weight: 500;
  line-height: 1.5;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: orangered;
  }
`;
