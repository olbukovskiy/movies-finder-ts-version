import { ICastItem } from '../../types';
import { picturePathPlace } from '../services/API';
import {
  CastItemPictureThumb,
  CastItemTextThumb,
  CastThumb,
} from './CastItem.styled';

export const CastItem: React.FunctionComponent<ICastItem> = ({
  name,
  character,
  profile_path,
}) => {
  return (
    <CastThumb>
      <CastItemPictureThumb>
        <img src={picturePathPlace(profile_path)} alt={name} />
      </CastItemPictureThumb>
      <CastItemTextThumb>
        <p>Name: {name}</p>
        <p>Character: {character}</p>
      </CastItemTextThumb>
    </CastThumb>
  );
};
