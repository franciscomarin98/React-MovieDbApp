import { useState, useEffect } from 'react';
import { Modal } from 'antd';
import ReactPlayer from 'react-player'

const ModalVideo = ({videoKey, videoPlatform, isOpen, closeModal}) => {
    return (
        <Modal className="modal-video"
               visible={isOpen}
               centered
               onCancel={closeModal}
               footer = {false}>
            Hola :v
        </Modal>
    )
}

export default ModalVideo
