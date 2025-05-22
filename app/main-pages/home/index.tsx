import { Text } from "@/components/ui/text";
import { Helper } from "@/model/helper";
import HelperCard from "@/ui-components/helperCard";
import { FlatList,  SafeAreaView,  ScrollView } from "react-native";


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

            <ScrollView className="flex-1 bg-primary-0 " contentContainerClassName="p-10">

                <Text className="text-4xl font-bold text-secondary-0">Homeeee</Text>
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