
import { Row, Col, Button } from 'antd';
import { baseImgUrl } from '../../utils/movieDb';
import PosterMovie from '../PosterMovie';
import MovieDetails from '../MovieDetails';

const MovieInfo = ({ movieInfo }) => {
    const { data: { backdrop_path, title, poster_path } } = movieInfo;
    const fondo = `${baseImgUrl}${backdrop_path}`
    return (
        <div className="movie" style={{ backgroundImage: `url('${fondo}')` }}>
            <div className="movie__dark"></div>
            <Row>
                <Col span={8} offset={3} className="movie__poster">
                    <PosterMovie imgMovie={poster_path} />
                </Col>
                <Col span={10} className="movie__info">
                    <MovieDetails movie={movieInfo.data} />
                </Col>
            </Row>
        </div>
    )
}

export default MovieInfo
