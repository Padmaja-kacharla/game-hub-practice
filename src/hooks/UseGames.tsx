import UseData from "./UseData";
import { Genre } from "./UseGenre";
export interface PlatForm {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatForm }[];
  metacritic: number;
}

const UseGames = (selectedGenre: Genre | null) =>
  UseData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default UseGames;
