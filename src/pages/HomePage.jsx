
import { baseUrl, apiKey } from '../api/movieDb';
import useFetch from '../hooks/useFetch'

export const HomePage = () => {
    const movies = useFetch(`${baseUrl}/now_playing?api_key=${apiKey}&language=es-ES&page=1`);

    console.log(movies)

    return (
        <div>
            Hola desde el HomePage
        </div>
    )
}
