import { fetchMovies } from '@/services/api'
import { useFetch } from '@/services/useFetch'
import { Movie } from '@/types'
import { ActivityIndicator, FlatList, View } from 'react-native'
import MovieCard from './MovieCard'
import { ThemedText } from './themed-text'

const MovieList = () => {
    const { data, loading, error } = useFetch<Movie[]>(() => fetchMovies({ query: undefined }), true)

    return (
        <View className="mt-4">
            <ThemedText className='text-2xl font-semibold mb-3'>Latest Movies</ThemedText>
            {loading ? (
                <ActivityIndicator className="mt-4" />
            ) : error ? (
                <ThemedText className="text-red-500">Failed to load movies</ThemedText>
            ) : (
                <FlatList
                    data={data}
                    renderItem={({ item }) => <MovieCard {...item} />}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                />
            )}
        </View>
    )
}

export default MovieList