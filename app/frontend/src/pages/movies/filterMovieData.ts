import type { Movie, MovieDetails } from './types';

export { filterMovieData, filterMoviesData, fetchStarWarsMovies };

function filterMovieData(movie: MovieDetails & Record<string, unknown>): MovieDetails {
    const { id, title, release_date, director, producer } = movie;
    movie = { id, title, release_date, director, producer };
    return movie;
}

function filterMoviesData(movies: MovieDetails[]): Movie[] {
    return movies.map((movie: MovieDetails) => {
        const { title, release_date, id } = movie;
        return { title, release_date, id };
    });
}

async function fetchStarWarsMovies(): Promise<MovieDetails[]> {
    const response = await fetch('https://star-wars.brillout.com/api/films.json');
    let movies: MovieDetails[] = ((await response.json()) as any).results;
    movies = movies.map((movie: MovieDetails, i: number) => ({
        ...movie,
        id: String(i + 1)
    }));
    return movies;
}
