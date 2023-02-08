export interface ICastItem {
  name: string;
  character: string;
  profile_path: string;
}

export interface IMovie {
  id: number;
  poster_path: string;
  title: string;
  name: string;
  genre_ids: number[];
  release_date: string;
  first_air_date: string;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IReview {
  author: string;
  content: string;
}
