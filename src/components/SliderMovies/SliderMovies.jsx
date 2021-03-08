
import './SliderMovies.scss';
import { Carousel } from 'antd';
import ItemSlider from '../ItemSlider';
import Loading  from '../Loading';


const SliderMovies = ({ movies }) => {

    if (movies.loading || movies.data === null) {
        return <Loading />
    }

    const { results } = movies.data;
    console.log(results);

    return (
        <Carousel autoplay className="slider-movies animate__animated animate__fadeIn">
            {
                results.map(m => (
                    <ItemSlider key={m.id} movie={m}/>
                ))
            }
        </Carousel>
    )
}

export default SliderMovies
