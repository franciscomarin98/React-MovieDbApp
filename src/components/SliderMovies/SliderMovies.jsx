
import './SliderMovies.scss';
import { Carousel } from 'antd';
import ItemSlider from '../ItemSlider';


const SliderMovies = ({ movies }) => {

    if (movies.loading || movies.data === null) {
        return 'Loading...';
    }

    const { results } = movies.data;
    console.log(results);

    return (
        <Carousel autoplay className="slider-movies">
            {
                results.map(m => (
                    <ItemSlider key={m.id} movie={m}/>
                ))
            }
        </Carousel>
    )
}

export default SliderMovies
