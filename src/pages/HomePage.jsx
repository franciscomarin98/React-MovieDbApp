
import { Row, Col } from 'antd'
import useFetch from '../hooks/useFetch';
import MovieList from '../components/MovieList';
import SliderMovies from '../components/SliderMovies';
import { urlMoviesNowPlaying, urlMoviesPopular } from '../utils/listaPeticionesAPI';

export const HomePage = () => {

    const moviesNowPlaying = useFetch(urlMoviesNowPlaying);
    const moviesPopular = useFetch(urlMoviesPopular);

    return (
        <>
            <SliderMovies movies={moviesNowPlaying} />
            <Row>
                <Col span={12}>
                    <MovieList title={'Peliculas populares'}  
                               movies={moviesPopular} />
                </Col>
                <Col span={12}>
                    {/* <MovieList /> */}
                </Col>
            </Row>
        </>
    )
}
