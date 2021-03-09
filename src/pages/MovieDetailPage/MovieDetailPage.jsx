
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import MovieInfo from '../../components/MovieInfo'; 
import { baseUrl, apiKey } from '../../utils/movieDb';

import './MovieDetailPage.scss';

const MovieDetailPage = () => {

    const { id } = useParams();
    const movieInfo = useFetch(`${baseUrl}/${id}?api_key=${apiKey}&language=es-ES`);
    if(movieInfo.loading || !movieInfo.data){
        return <Loading />;
    }

    return (
        <MovieInfo movieInfo={movieInfo} />
    )
}

export default MovieDetailPage

