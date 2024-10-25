import {
  Button,
  Heading,
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
  const { data, isLoading, error } = UseGenre();
  if (error) return null;

  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <div>
        <List>
          {data.map((genre) => (
            <ListItem key={genre.id} paddingY="5px" overflow="hidden">
              <HStack>
                <Image
                  src={getCroppedImage(genre.image_background)}
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                />
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
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
    </>
  );
};

export default GenreList;
