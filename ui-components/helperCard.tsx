import { Text } from "@/components/ui/text";
import { Helper } from "@/model/helper";
import { View } from "react-native";


type HelperCardProps = {
  helper: Helper;
};

const HelperCard: React.FC<HelperCardProps> = ({ helper }) => {
  const { name, categories, rating } = helper;

  return (
    <Text>{helper.name}</Text>
  );
};
export default HelperCard;


