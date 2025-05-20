import { Text } from "@/components/ui/text"
import { ScrollView } from "react-native"


export default ()=>{
    return(
        <ScrollView className="flex-1 bg-primary-0 " contentContainerClassName="justify-center items-center align-center h-full">

            <Text className="text-4xl font-bold text-secondary-0">Home</Text>
        </ScrollView>
    )
}