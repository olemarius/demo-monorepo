
import { filterMovieData, filterMoviesData, fetchStarWarsMovies } from './filterMovieData';
import type { Movie, MovieDetails } from './types';

async function onBeforeRender() {
    const movies = await fetchStarWarsMovies();
    return {
        pageContext: {
            pageProps: {
                // We remove data we don't need because we pass `pageContext.movies` to
                // the client; we want to minimize what is sent over the network.
                movies: filterMoviesData(movies)
            },
            // The page's <title>
            documentProps: { title: getTitle(movies) }
        }
    };
}

async function prerender() {
    const movies = await fetchStarWarsMovies();
    return [
        {
            url: '/star-wars',
            // We already provide `pageContext` here so that `vite-plugin-ssr`
            // will *not* have to call the `onBeforeRender()` hook defined
            // above in this file.
            pageContext: {
                pageProps: {
                    movies: filterMoviesData(movies)
                },
                documentProps: { title: getTitle(movies) }
            }
        },
        ...movies.map((movie) => {
            const url = `/star-wars/${movie.id}`;
            return {
                url,
                // Note that we can also provide the `pageContext` of other pages.
                // This means that `vite-plugin-ssr` will not call any
                // `onBeforeRender()` hook and the Star Wars API will be called
                // only once (in this `prerender()` hook).
                pageContext: {
                    pageProps: {
                        movie: filterMovieData(movie)
                    },
                    documentProps: { title: movie.title }
                }
            };
        })
    ];
}

function getTitle(movies: Movie[] | MovieDetails[]): string {
    const title = `${movies.length} Star Wars Movies`;
    return title;
}

export { onBeforeRender };
export { prerender };