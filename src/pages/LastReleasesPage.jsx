import React from 'react';
import { Row, Col } from 'antd';
import { baseUrl, apiKey } from '../utils/movieDb';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import MovieCatalog from '../components/MovieCatalog';
import PaginationMovies from '../components/Pagination/PaginationMovies';

export const LastReleasesPage = () => {

    const [movieList, setMovieList] = React.useState([]);
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        (async () => {

            const response = await fetch(`${baseUrl}/upcoming?api_key=${apiKey}&language=es-ES&page=${page}`);
            const movies = await response.json();
            setMovieList(movies);

        })();
    }, [page]);

    const onChangePage = (page) => {
        setPage(page)
    }

    return (
        <Row>
            <Col span="24" style={{ textAlign: 'center', marginTop: 25 }}>
                <h1 style={{ fontSize: 35, fontWeight: 'bold' }}>
                    Últimos lanzamientos
                </h1>
            </Col>
            {movieList.results ? (
             <>
                <Col span="24">
                    <MovieCatalog movies = {movieList}/>
                    
                </Col>
                <Col span="24">
                    <PaginationMovies currentPage={movieList.page}
                                      totalItems={movieList.total_results}
                                      onChangePage={onChangePage}/>
                </Col>
             </>
            ) : (
                <Col span="24">
                    <Loading />
                </Col>
            )}
            <Col span="24">
                <Footer />
            </Col>
        </Row>
    );
}
