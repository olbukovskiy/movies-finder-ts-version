import { CastItem } from '../CastItem/CastItem';
import { ICastItem } from '../../types';
import { CastCatalogue, CastCatalogueTitle } from './CastList.styled';

export const CastList: React.FunctionComponent<{ cast: ICastItem[] }> = ({
  cast,
}) => {
  return (
    <>
      <CastCatalogueTitle>Full cast</CastCatalogueTitle>
      <CastCatalogue>
        {cast.map(({ name, character, profile_path }) => {
          return (
            <CastItem
              key={name}
              name={name}
              character={character}
              profile_path={profile_path}
            />
          );
        })}
      </CastCatalogue>
    </>
  );
};
