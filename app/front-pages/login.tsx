import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";
import { Image } from "@/components/ui/image";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";


export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    return (
        <SafeAreaView className="flex-1">

            <ScrollView className="flex-1 bg-primary-0" contentContainerClassName="p-10">
                <TouchableOpacity onPress={() => router.back()} >
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Image source={require('../../assets/images/Login Register.png')} alt="Landing page" resizeMode="contain" className="h-[30vh] w-screen mb-12 " />
                <Text className="text-4xl text-secondary-0 font-bold mb-2">Login</Text>
                <Text className="text-xl text-secondary-200 font-normal mb-4">Please sign in to continue</Text>


                <Text className="text-xl text-secondary-0 font-medium mb-2">Email</Text>
                <Input
                    variant="outline"
                    size="xl"
                    className="rounded-lg h-16 mb-4 p-2">
                    <InputField placeholder="Enter Email..." />
                </Input>

                <Text className="text-xl text-secondary-0 font-medium mb-2">Password</Text>
                <Input
                    variant="outline"
                    size="xl"
                    className="rounded-lg h-16 p-2 ">
                    <InputField secureTextEntry={!showPassword} placeholder="Enter Password..." />
                    <InputSlot>
                        <Button className="bg-transparent p-0" onPress={() => setShowPassword(!showPassword)}>
                            <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                        </Button>
                    </InputSlot>
                </Input>

                <Link href="/front-pages/forgot" className="mb-5" asChild>
                    <Text className="text-md text-secondary-200 text-right font-medium  p-1">Forgot Password</Text>
                </Link>


                <Link href="/main-pages/home" className="mb-2" asChild>
                    <Button className="bg-tertiary-500 rounded-full h-16 lg w-100  ">
                        <ButtonText className="text-white text-lg sm:text-md font-semibold py-4">Login</ButtonText>
                    </Button>
                </Link>

                <Link href="/front-pages/register" className="mb-2" asChild>
                    <Text className="text-md text-secondary-400 text-center mb-5">Don't have an account? <Text className="text-md text-secondary-0 font-bold">Register Here!</Text></Text>
                </Link>

                <Text className="text-md text-secondary-500 text-center mb-4">or sign in with</Text>

                <HStack className="items-center justify-center mb-10">
                    <Box className="bg-primary-0 dark:bg-secondary-0 rounded-full h-16 w-16 justify-center items-center p-1 mr-6">
                        <Image
                            source={require('../../assets/images/google.png')}
                            alt="Google logo"
                            resizeMode="contain"
                            className="h-full w-full rounded-full"
                        />
                    </Box>
                    <Box className="bg-primary-0 dark:bg-secondary-0 rounded-full h-16 w-16 justify-center items-center p-2">
                        <Image
                            source={require('../../assets/images/apple.png')}
                            alt="Apple logo"
                            resizeMode="contain"
                            className="h-full w-full rounded-full"
                        />
                    </Box>
                </HStack>

            </ScrollView>
        </SafeAreaView>
    );
}

