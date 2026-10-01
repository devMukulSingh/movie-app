
import { Movie, MovieResponse } from '@/types/movie';

export const TMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.EXPO_PUBLIC_MOVIE_API_KEY
    }
}


export const fetchMovies = async ({ query }: { query?: string }): Promise<Movie[]> => {
    const endpoint = query ?
        `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :
        `${TMDB_CONFIG.BASE_URL}/movie/popular?language=en-US&page=1`;

    const result = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    })

    if (!result.ok) {
        //@ts-ignore
        throw new Error("Failed to fetch movies ", result)
    }

    const data: MovieResponse = await result.json();
    return data.results
}

export const fetchMovieDetails = async ({ movieId }: { movieId?: string }): Promise<Movie> => {
    const endpoint = `${TMDB_CONFIG.BASE_URL}/movie/${movieId}`;

    const result = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    })

    if (!result.ok) {
        //@ts-ignore
        throw new Error("Failed to fetch movies ", result)
    }

    const data: Movie = await result.json();
    return data
}