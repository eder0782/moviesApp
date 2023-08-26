export type ImageProps = {
  height: number;
  width: number;
};

type genreMovie = {
  id: number;
  name: string;
};

export interface Movie {
  adult?: boolean;
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  backdrop_path?: string;
  genre_ids?: number[];
  genres?: genreMovie[];
  original_language?: string;
  popularity?: number;
  release_date?: string;
  video?: boolean;
  vote_count?: number;
  runtime?: number;
}

export interface CardReviewType {
  author: string;
  author_details: AuthorDetailsType;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface AuthorDetailsType {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
}

export interface CastType {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
