import MovieCard from '@/components/MovieCard'
import Searchbar from '@/components/Searchbar'
import { ThemedText } from '@/components/themed-text'
import { fetchMovies } from '@/services/api'
import { useFetch } from '@/services/useFetch'
import { Movie } from '@/types'
import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'

const Search = () => {
    const [query, setQuery] = useState("")
    const { data, loading, error, refetch } = useFetch<Movie[]>(() => fetchMovies({ query: query }), false)
    useEffect(() => {
        if (!query) return;
        const timer = setTimeout(() => {
            refetch();
        }, 500)
        return () => {
            clearTimeout(timer);
        }
    }, [query])
    return (
        <View>
            <Searchbar
                value={query}
                onChangeText={setQuery}
                placeholder="Search"
            />
            <View>
                {query && loading ? (
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
        </View>
    )
}

export default Search