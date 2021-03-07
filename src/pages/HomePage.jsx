
import useFetch from '../hooks/useFetch'
import { baseUrl, apiKey } from '../utils/movieDb';
import SliderMovies from '../components/SliderMovies';

export const HomePage = () => {
    const moviesNowPlaying = useFetch(`${baseUrl}/now_playing?api_key=${apiKey}&language=es-ES&page=1`);

    return (
        <>
            <SliderMovies movies={moviesNowPlaying} />
        </>
    )
}
