import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      borderRadius="4px"
      fontSize="14px"
      paddingX="8px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
