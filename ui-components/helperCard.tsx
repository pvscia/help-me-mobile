import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Helper } from "@/model/helper";
import { FontAwesome } from '@expo/vector-icons';
import { useColorScheme } from "react-native";



type HelperCardProps = {
    helper: Helper;
};

const HelperCard: React.FC<HelperCardProps> = ({ helper }) => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
    return (
        <HStack className="bg-secondary-800 mb-2 rounded-lg px-4 py-2 align-center items-center">
            <FontAwesome name="user-circle-o" size={50} color={isDark ? '#ffffff' : '#000000'} className="py-3 pr-2" />
            <VStack className="ml-1">
                <Text className="text-secondary-0 text-2xl font-bold">{helper.name}</Text>
                <HStack>
                    <Text style={{ color: '#FFD700'}} className="mr-2">★</Text>
                    <Text className="font-bold">{helper.rating}</Text>
                </HStack>
            </VStack>
        </HStack>
    );
};
export default HelperCard;


