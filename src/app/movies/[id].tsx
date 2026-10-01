import { ThemedText } from '@/components/themed-text'
import { fetchMovieDetails } from '@/services/api'
import { useFetch } from '@/services/useFetch'
import { Image } from 'expo-image'
import { useLocalSearchParams } from 'expo-router'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const MovieDetails = () => {
    const { id } = useLocalSearchParams();
    const { data, loading, error } = useFetch(() => fetchMovieDetails({ movieId: id as string }), true);

    if (loading || !data) {
        return <ActivityIndicator className="mt-4" />
    }
    if (error) {
        return <Text>Error: {error.message}</Text>
    }

    return (
        <SafeAreaView className='h-full w-full flex flex-col pb-5'>
            <ScrollView>
                <Image source={`https://image.tmdb.org/t/p/w500${data.poster_path}`} className='w-full h-[40rem]' />
                <View className='p-3'>
                    <ThemedText className='text-lg'>{data?.title}</ThemedText>
                    <ThemedText className='text-sm text-secondary'>
                        {data?.release_date}
                    </ThemedText>
                    <View className='flex-row rounded-md bg-backgroundSecondary p-2 w-fit mt-2 gap-1'>
                        <ThemedText>{data?.vote_average}</ThemedText>
                        <ThemedText>Rating</ThemedText>
                        <ThemedText className='text-sm'>({data?.vote_count})</ThemedText>
                    </View>
                    <ThemedText className='mt-3 text-lg font-bold'>Overview</ThemedText>
                    <ThemedText className='text-sm text-secondary'>{data?.overview}</ThemedText>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MovieDetails