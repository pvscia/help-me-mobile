import { Button, ButtonText } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { Link, useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";

export default function Email() {
    const { msg } = useLocalSearchParams();

    return (
        <ScrollView className="flex-1 bg-primary-0 " contentContainerClassName="justify-center items-center align-center h-full">
            <Image source={require('../../assets/images/Email Sent.png')} alt="Landing page" resizeMode="contain" className="h-[50vh] w-screen mb-15" />
            <Text className="text-5xl text-secondary-0 font-bold mb-2">Email Sent!</Text>
            <Text className="text-xl text-secondary-200 font-normal mb-3">{msg}</Text>
            <Link href={"/"} asChild>
                <Button className="bg-tertiary-500 rounded-full h-16 lg w-[80vw]  ">
                    <ButtonText className="text-white text-lg sm:text-md font-semibold py-4">Back</ButtonText>
                </Button>
            </Link>
        </ScrollView>
    );
}