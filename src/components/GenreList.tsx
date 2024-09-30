import UseGenre from "../hooks/UseGenre";

const GenreList = () => {
  const { genres } = UseGenre();
  return (
    <div>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </div>
  );
};

export default GenreList;
