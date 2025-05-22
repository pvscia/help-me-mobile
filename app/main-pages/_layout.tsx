import { Tabs } from "expo-router"
import { History, Home, User } from "lucide-react-native"
import { useColorScheme } from 'react-native';



export default () => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveBackgroundColor: isDark ? '#000000' : '#ffffff',
            tabBarInactiveBackgroundColor: isDark ? '#000000' : '#ffffff',
            tabBarActiveTintColor: isDark ? '#ffffff' : '#000000',
            tabBarInactiveTintColor: isDark ? '#aaaaaa' : '#555555',
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