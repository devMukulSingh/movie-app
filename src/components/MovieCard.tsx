import { Text, TouchableOpacity } from 'react-native'
import { Movie } from '@/types'
import { Link } from 'expo-router'
import { Image } from 'expo-image'
import { cssInterop } from 'nativewind'

cssInterop(Image, { className: 'style' })

const MovieCard = ({ title, id, poster_path }: Movie) => {
    return (
        <Link href={`/movies/${id}`} asChild className="flex-1 p-2">
            <TouchableOpacity className='w-[30%]'>
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