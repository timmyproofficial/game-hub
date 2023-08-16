import useData from './useData';
import { Genre } from './useGenre';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }

const useGames = (seelectedGenre: Genre | null) =>
  useData<Game>('/games', { params: { genres: seelectedGenre?.id } }, [
    seelectedGenre?.id,
  ]);

export default useGames;
