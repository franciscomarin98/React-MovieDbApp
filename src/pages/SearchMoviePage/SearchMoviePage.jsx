
import { Row, Col, Input } from 'antd';
import { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import MovieCatalog from '../../components/MovieCatalog/MovieCatalog';
import { apiKey } from '../../utils/movieDb';

import './SearchMoviePage.scss'


const SearchMoviePage = ({ location, history }) => {
    const [moviesSearched, setMoviesSearched] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        (async () => {
            if(searchValue !== ''){
                const searchValue = queryString.parseUrl(location.search);
                const { s } = searchValue.query;
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-Es&query=${s}&include_adult=true&page=1`);
                const data = await response.json();
                setSearchValue(s);
                setMoviesSearched(data);
            }
        })();
    }, [location.search, searchValue]);

    const onChangeSearchValue = e => {
        const urlParams = queryString.parse(location.search);
        urlParams.s = e.target.value;
        history.push(`?${queryString.stringify(urlParams)}`);
        setSearchValue(e.target.value);
    }

    return (
        <Row>
            <Col span="24" className="search">
                <h1>Encuentra tu pelicula</h1>
                <Input value={searchValue} onChange={onChangeSearchValue} />
            </Col>
            {moviesSearched?.results ? (
                <Row>
                    <Col span="24">
                        <MovieCatalog movies={moviesSearched} />
                    </Col>
                </Row>
            ): null}
        </Row>
    )
}


export default withRouter(SearchMoviePage);