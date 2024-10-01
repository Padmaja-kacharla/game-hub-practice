import UseGenre from "../hooks/UseGenre";

const GenreList = () => {
  const { data } = UseGenre();
  return (
    <div>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </div>
  );
};

export default GenreList;
