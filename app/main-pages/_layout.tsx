import { Tabs } from "expo-router"
import { History, Home, User } from "lucide-react-native"


export default () => {
    return (
        <Tabs screenOptions={{
            headerShown: false
        }}>
            <Tabs.Screen name="home/index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => (<Home size={24} color={color} />),
                }}
            />

            <Tabs.Screen name="history/index"
                options={{
                    title: 'History',
                    tabBarIcon: ({ color }) => (<History size={24} color={color} />),
                }}
            />

            <Tabs.Screen name="profile/index"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => (<User size={24} color={color} />),
                }}
            />

        </Tabs>
    )
}