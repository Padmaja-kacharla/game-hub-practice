import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import UseGenre, { Genre } from "../hooks/UseGenre";
import getCroppedImage from "../Services/image-url";

interface Props {
  onselectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onselectedGenre, selectedGenre }: Props) => {
  const { data, loading, error } = UseGenre();
  if (error) return null;

  if (loading) return <Spinner />;
  return (
    <div>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px" overflow="hidden">
            <HStack>
              <Image
                src={getCroppedImage(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onselectedGenre(genre)}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
