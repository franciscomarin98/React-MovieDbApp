import { useState, useEffect } from 'react';
import { Modal } from 'antd';
import ReactPlayer from 'react-player'

import './ModalVideo.scss';

const ModalVideo = ({ videoKey, videoPlatform, isOpen, closeModal }) => {
    const [urlVideo, setUrlVideo] = useState('');

    useEffect(() => {
        switch (videoPlatform) {
            case 'YouTube':
                setUrlVideo(`https://www.youtube.com/watch?v=${videoKey}`);
                break;
            case 'Vimeo':
                setUrlVideo(`https://www.vimeo.com/${videoKey}`);
                break;
            default:
                break;
        }
    }, [videoKey, videoPlatform]);

    return (
        <Modal className="modal-video"
            visible={isOpen}
            centered
            onCancel={closeModal}
            footer={false}>
            <ReactPlayer url={urlVideo} controls />
        </Modal>
    )
}

export default ModalVideo
