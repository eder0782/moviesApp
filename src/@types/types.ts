export type ImageProps = {
  height: number;
  width: number;
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
  original_language?: string;
  popularity?: number;
  release_date?: string;
  video?: boolean;
  vote_count?: number;
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
