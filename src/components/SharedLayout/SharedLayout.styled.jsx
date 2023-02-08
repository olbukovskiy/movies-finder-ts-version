import styled from '@emotion/styled';

export const AppContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
  padding: 32px 48px;

  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;

  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
