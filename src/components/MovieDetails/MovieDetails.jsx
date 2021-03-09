import moment from 'moment';
import { Button } from 'antd';
import ModalVideo from '../ModalVideo';
import { Fragment, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { apiKey, baseUrl } from '../../utils/movieDb';
import { PlayCircleOutlined } from '@ant-design/icons';

const MovieDetails = ({ movie }) => {

    const { id, title, release_date, overview } = movie;
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const videoMovie = useFetch(`${baseUrl}/${id}/videos?api_key=${apiKey}&language=es-ES`);

    const openModal = () => setIsVisibleModal(true);
    const closeModal = () => setIsVisibleModal(false);

    const renderVideo = () => {
        if (videoMovie.data) {
            if (videoMovie.data.results.length > 0) {
                return (
                    <>
                        <Button type={'primary'} icon={<PlayCircleOutlined />} onClick={openModal}>
                            Trailer
                        </Button>
                        <ModalVideo videoKey={videoMovie.data.results[0].key}
                                    videoPlatform={videoMovie.data.results[0].site}
                                    isOpen={isVisibleModal}
                                    closeModal={closeModal} />
                    </>
                )
            }
        }
    }

    return (
        <Fragment>
            <div className="movie__info-header">
                <h1>
                    {title}
                    <span>
                        {moment(release_date, "YYYY-MM-DD").format("YYYY")}
                    </span>
                </h1>
                {renderVideo()}
            </div>

            <div className="movie__info-content">
                <h3>General</h3>
                <p>{overview}</p>
            </div>
        </Fragment>
    )
}

export default MovieDetails
