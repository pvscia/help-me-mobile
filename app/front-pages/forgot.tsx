import { Button, ButtonText } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from "expo-router";
import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";


export default function Forgot() {
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1">

            <ScrollView className="flex-1 bg-primary-0" contentContainerClassName="p-10 mb-20">
                <TouchableOpacity onPress={() => router.back()} >
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Image source={require('../../assets/images/Forgot Password.png')} alt="Landing page" resizeMode="contain" className="h-[60vh] w-screen mb-8 " />
                <Text className="text-4xl text-secondary-0 font-bold mb-2">Forgot Password</Text>
                <Text className="text-xl text-secondary-200 font-normal mb-4">Enter your email to reset password</Text>


                <Input
                    variant="outline"
                    size="xl"
                    className="rounded-lg h-16 mb-4 p-2">
                    <InputField placeholder="Enter Email..." />
                </Input>

                


                <Link href={{ pathname: '/front-pages/email', params: { msg: "Check your email to reset password" } }} className="mb-2" asChild>
                    <Button className="bg-tertiary-500 rounded-full h-16 lg w-100">
                        <ButtonText className="text-white text-lg sm:text-md font-semibold py-4">Reset Password</ButtonText>
                    </Button>
                </Link>

            </ScrollView>
        </SafeAreaView>
    );
}

