import styled from '@emotion/styled';

export const MovieListItemContainer = styled.div`
  max-width: 500px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  overflow: hidden;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const MovieListItemImage = styled.div`
  position: relative;
  margin-bottom: ${props => props.theme.space[3]}px;
  height: 500px;
`;


export const MoviesListData = styled.div`
  padding: 0 10px 10px 10px;
`;

export const MovieHeading = styled.h2`
  margin-bottom: ${props => props.theme.space[2]}px;
`;

export const MovieData = styled.p`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space[1]}px;
`;
