import { Movie } from '@/types'
import { Image } from 'expo-image'
import { Link } from 'expo-router'
import { cssInterop } from 'nativewind'
import { Text, TouchableOpacity } from 'react-native'

cssInterop(Image, { className: 'style' })

const MovieCard = ({ title, id, poster_path }: Movie) => {
    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className='flex-1 p-2'>
                <Image
                    contentFit='cover'
                    className='h-52 w-full rounded-md'
                    source={{
                        uri: poster_path ?
                            `https://image.tmdb.org/t/p/w500${poster_path}` :
                            `https://placehold.co/600x400/1a1a1a/ffffff.png`
                    }}
                    transition={200}
                />
                <Text className="text-text font-medium mt-1 text-xs" numberOfLines={2}>
                    {title}
                </Text>
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard