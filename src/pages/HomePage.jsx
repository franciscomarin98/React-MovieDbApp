
import { Row, Col } from 'antd'
import useFetch from '../hooks/useFetch';
import MovieList from '../components/MovieList';
import SliderMovies from '../components/SliderMovies';
import { urlMoviesNowPlaying, urlMoviesPopular, urlMoviesTopRated } from '../utils/listaPeticionesAPI';
import Footer from '../components/Footer';


export const HomePage = () => {

    const moviesNowPlaying = useFetch(urlMoviesNowPlaying);
    const moviesPopular = useFetch(urlMoviesPopular);
    const moviesTopRated = useFetch(urlMoviesTopRated);

    return (
        <>
            <SliderMovies movies={moviesNowPlaying} />
            <Row>
                <Col span={12}>
                    <MovieList title={'Peliculas populares'}  
                               movies={moviesPopular} />
                </Col>
                <Col span={12}>
                <MovieList title={'Peliculas populares'}  
                               movies={moviesTopRated} />
                </Col>
            </Row>
            <Footer />
        </>
    )
}
