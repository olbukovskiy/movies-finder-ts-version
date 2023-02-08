import styled from '@emotion/styled';

export const CastCatalogue = styled.ul`
  display: grid;
  max-width: calc(100% - 48px);
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 18px;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const CastCatalogueTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  margin-bottom: 18px;
`;
