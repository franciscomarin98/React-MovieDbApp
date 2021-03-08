import { baseUrl, apiKey } from './movieDb';

export const urlMoviesNowPlaying = `${baseUrl}/now_playing?api_key=${apiKey}&language=es-ES&page=1`;

export const urlMoviesPopular = `${baseUrl}/popular?api_key=${apiKey}&language=es-ES&page=1`;
