import { List } from 'antd';
import ItemList from '../ItemList';
import Loading  from '../Loading';

import './MovieList.scss'


const MovieList = ({movies, title}) => {

    if(movies.loading || !movies.data){
        return <Loading />
    }

    return (
        <List className="movie-list" 
              size="default"
              header={<h2>{title}</h2>}
              bordered
              dataSource={movies.data?.results}
              renderItem={movie => <ItemList key={movie.id} 
                                             movie={movie} />}>
        </List>
    )
}

export default MovieList;
