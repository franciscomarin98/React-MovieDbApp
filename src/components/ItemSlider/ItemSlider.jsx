import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { baseImgUrl } from './../../utils/movieDb';

const ItemSlider = ({ movie }) => {
    const { id, backdrop_path, title, overview } = movie;
    const background_image = `${baseImgUrl}${backdrop_path}`;
    return (
        <div className="slider-movies__movie"
            style={{ backgroundImage: `url('${background_image}')` }}>
            <div className="slider-movies__movie-info">
                <div>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                    <Link to={`/movie-detail/${id}`}>
                        <Button type="primary">Ver más</Button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ItemSlider
