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
