import { Card, Col } from 'antd';
import { Link } from 'react-router-dom';

import { baseImgUrl } from '../../utils/movieDb';
import { EyeOutlined } from '@ant-design/icons';

import './MovieCatalog.scss'

const MovieCatalog = ({ movies: { results } }) => {
  return results.map(movie => (
    <Col key={movie.id} xs={6} className="catalog">
      <MovieCard movie={movie} />
    </Col>
  ));
}

const MovieCard = ({ movie }) => {
  const { id, title, poster_path } = movie;
  const { Meta } = Card;
  const urlImg = baseImgUrl + poster_path;
  return (
    <Link to={`/movie-detail/${id}`}>
      <Card
        className="animate__animated animate__fadeIn"
        hoverable
        style={{ width: 240 }}
        cover={<img alt={title} src={ (poster_path) ? urlImg : 'https://cdn.bioguia.com/embed/2f92537db76b292d01d5b1977a085551498560800/empty.png' } />}
        actions={[<EyeOutlined />]}
      >
        <Meta title={title} />
      </Card>
    </Link>
  );
}

export default MovieCatalog
