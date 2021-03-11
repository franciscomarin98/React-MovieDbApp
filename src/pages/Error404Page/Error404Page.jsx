import { Link } from 'react-router-dom';

import './Error404Page.scss'

const Error404Page = () => {
    return (
        <div className="error">
            <h1>Error 404</h1>
            <h2>Página no encontrada</h2>
            <Link to="/">Volver al inicio</Link>
        </div>
    )
}


export default Error404Page