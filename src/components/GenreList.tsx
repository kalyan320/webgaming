import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenre";
import getImageCroppedUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useData<Genre>("/genres");

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getImageCroppedUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
