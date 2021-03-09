 import { baseImgUrl  } from '../../utils/movieDb';
 
 const PosterMovie = ({imgMovie}) => {
     const posterPathUrl = baseImgUrl + imgMovie;
     return (
         <div style={{ backgroundImage: `url('${ posterPathUrl}')` }} />
     )
 }
 
 export default PosterMovie
 