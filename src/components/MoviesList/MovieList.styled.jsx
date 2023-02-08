import styled from '@emotion/styled';

export const MovieList = styled.ul`
  display: grid;
  max-width: calc(100% - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 24px;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
