import { Formik } from 'formik';

import {
  SearchIcon,
  SearchForm,
  SearchbarContainer,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchBox.styled';

const initialValues = { search: '' };

export const SearchBox: React.FunctionComponent<{
  onSubmit: (query: string) => void;
  value: string;
}> = ({ onSubmit, value }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.setFieldValue('search', value);
          actions.setSubmitting(false);
          actions.resetForm();
          onSubmit(values.search);
        }}
      >
        {({ isSubmitting }) => {
          return (
            <SearchbarContainer>
              <SearchForm>
                <SearchFormInput
                  type="text"
                  autoComplete="off"
                  name="search"
                  placeholder="Search films and serials"
                />
                <SearchFormButton type="submit" disabled={isSubmitting}>
                  <SearchIcon />
                  <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                </SearchFormButton>
              </SearchForm>
            </SearchbarContainer>
          );
        }}
      </Formik>
    </>
  );
};
