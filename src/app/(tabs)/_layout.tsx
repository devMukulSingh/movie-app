import { Tabs } from 'expo-router'

const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen name='index' options={{ title: "Home", headerShown: false }} />
        </Tabs>
    )
}

export default Layout