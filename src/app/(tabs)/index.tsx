import Searchbar from '@/components/Searchbar'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import MovieList from '../../components/MovieList'

const Index = () => {
    return (
        <SafeAreaView className='p-5'>
            <Searchbar
                placeholder="Search"
                onPress={() => router.push('/search')}
            />
            <MovieList />
        </SafeAreaView>
    )
}

export default Index