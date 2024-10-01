import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import UseGenre from "../hooks/UseGenre";
import getCroppedImage from "../Services/image-url";

const GenreList = () => {
  const { data, loading, error } = UseGenre();
  if (error) return null;

  if (loading) return <Spinner />;
  return (
    <div>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImage(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
