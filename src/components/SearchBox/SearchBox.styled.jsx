import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { GoSearch } from 'react-icons/go';

export const SearchIcon = styled(GoSearch)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const SearchbarContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #e9e8e8;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
`;

export const SearchFormButton = styled.button`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled(Field)`
  display: inline-block;
  width: 100%;
  height: 48px;
  font: inherit;
  font-size: 20px;
  outline: none;
  border: none;
  padding-left: 16px;
  padding-right: 16px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
