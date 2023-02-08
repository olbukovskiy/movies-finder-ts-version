import styled from '@emotion/styled';

export const CastThumb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-bottom: ${props => props.theme.space[4]}px;
  height: 100%;
`;

export const CastItemPictureThumb = styled.div`
  position: relative;
  height: 370px;
`;

export const CastItemTextThumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: ${props => props.theme.space[1]}px;
  padding: 6px 12px;
  flex-grow: 1;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;

  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;
