import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { TextareaInput } from "@/components/ui/textarea";
import { Helper } from "@/model/helper";
import HelperCard from "@/ui-components/helperCard";
import { EyeOffIcon, Search } from "lucide-react-native";
import { FlatList, SafeAreaView, ScrollView, TextInput } from "react-native";


export default () => {
    const helpers: Helper[] = [
        { id: '1', name: 'Jane', categories: ['Cleaning', 'Plumbing'], rating: 4.2 },
        { id: '2', name: 'John', categories: ['Electric', 'Random'], rating: 4.7 },
        { id: '3', name: 'Nick', categories: ['Date', 'Hospital'], rating: 4.3 },
        { id: '4', name: 'Sam', categories: ['Doctor', 'Courier'], rating: 4.4 },
        { id: '5', name: 'Justin', categories: ['Vet'], rating: 4.5 },
    ];
    return (
        <SafeAreaView className="flex-1">

            <ScrollView className="flex-1 bg-primary-0 " contentContainerClassName="px-8 mt-10">

                <Text className="text-3xl font-bold text-secondary-0 mb-3">Welcome </Text>
                <Input
                    variant="outline"
                    size="xl"
                    className="rounded-full h-16 mb-3">
                    <InputField placeholder="Search for help..." />
                    <InputSlot>
                            <InputIcon as={Search} className="mr-2"/>
                    </InputSlot>
                </Input>
                <Text className="text-2xl font-semibold text-secondary-0 mb-3">Recomended Helper</Text>

                <FlatList
                    scrollEnabled={false}
                    data={helpers}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        // <TouchableOpacity
                        //     onPress={() =>
                        //         router.push({
                        //             pathname: '/home-pages/[id]',
                        //             params: { id: item.id },
                        //         })
                        //     }
                        // >
                        <HelperCard helper={item} />
                        // </TouchableOpacity>
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    )
}