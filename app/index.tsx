import { Button, ButtonText } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-primary-0 " contentContainerClassName="justify-center items-center align-center h-full">
      <Image source={require('../assets/images/Landing Page.png')} alt="Landing page" resizeMode="contain" className="h-[50vh] w-screen mb-15" />
      <Text className="text-5xl text-secondary-0 font-bold mb-2">Help Me!</Text>
      <Text className="text-xl text-secondary-200 font-normal mb-3">Get Help Anywhere, Anytime</Text>

      <Link href="/front-pages/login" className="mb-2" asChild>
        <Button className="bg-tertiary-500 rounded-full h-16 lg w-[80vw] sm:w-[60vw] md:w-[40vw] xl:w-[20vw]  ">
          <ButtonText className="text-white text-lg sm:text-md font-semibold py-4">Login</ButtonText>
        </Button>
      </Link>

      <Link href="/front-pages/register" className="mb-2" asChild>
        <Text className="text-md text-secondary-400 text-center mb-5">Don't have an account? <Text className="text-md text-secondary-0 font-bold">Register Here!</Text></Text>
      </Link>
    </ScrollView>

  );
}
