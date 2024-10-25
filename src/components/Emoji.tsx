import { Image, ImageProps } from "@chakra-ui/react";
import bulleye from "../assets/bulleye.png";
import meh from "../assets/sad.png";
import thumbImage from "../assets/thumbImageFile.jpg";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: bulleye, alt: "recommended", boxSize: "35px" },
    5: { src: thumbImage, alt: "exceptional", boxSize: "25px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
