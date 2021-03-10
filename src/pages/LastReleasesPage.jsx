import React from 'react';
import { Row, Col } from 'antd';
import { baseUrl, apiKey } from '../utils/movieDb';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';

export const LastReleasesPage = () => {

    const [movieList, setMovieList] = React.useState([]);
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        (async () => {

            const response = await fetch(`${baseUrl}/now_playing?api_key=${apiKey}&language=es-ES&page=${page}`);
            const movies = await response.json();
            setMovieList(movies);

        })();
    }, [page]);

    return (
        <Row>
            <Col span='24' style={{ textAlign: 'center', marginTop: 25 }}>
                <h1 style={{ fontSize: 35, fontWeight: 'bold' }}>
                    Últimos lanzamientos
                </h1>
            </Col>
            {movieList.results ? (
                <Col span="24"></Col>
            ) : (
                <Loading />
            )
            }
            <Col span="24">
                <Footer />
            </Col>
        </Row>
    )
}
