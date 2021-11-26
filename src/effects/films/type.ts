export interface FilmState {
  status: Status;
  films: Film[];
  page: number;
  sortBy: string;
}

type Status = 'idle' | 'loading' | 'failed';

interface Film {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IData {
  sortBy: string;
  page: number;
}
