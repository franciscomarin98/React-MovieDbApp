import { Fragment } from 'react';
import moment from 'moment';

const MovieDetails = ({ movie }) => {
    const { id, title, release_date, overview, genres } = movie;
    return (
        <Fragment>
            <div className="movie__info-header">
                <h1>
                    {title}
                    <span>
                        {moment(release_date, "YYYY-MM-DD").format("YYYY")}
                    </span>
                </h1>
                <button>
                    Trailer
                </button>
            </div>

            <div className="movie__info-content">
                <h3>General</h3>
                <p>{overview}</p>

                <h3>Generos</h3>
                <ul>
                    {genres.map(ge => (
                        <li keys={ge.id}>{ge.name}</li>
                    ))}
                </ul>
            </div>
        </Fragment>
    )
}

export default MovieDetails
