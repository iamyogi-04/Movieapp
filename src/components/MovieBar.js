import React from 'react'
import { useNavigate } from 'react-router-dom';

const MovieBar = (props) => {
    const key = "1db4e2c685edf6c26476d15fc7071884"
    const apilocation = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=horror`
    const{movie,setAddmovie} = props;
    const navigate= useNavigate()
  return (
    
    <>
        <div className="moviecard" onClick={()=>{
            setAddmovie(movie);
            navigate('/prod')
        }}>
            <div className="heading">
               <h5>{movie.title}</h5> 
            </div>
            <div className="poster">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="img" />
            </div>
            <div className="release date">
                <h6> Ratings {movie.vote_average} ✨✨ </h6>
            </div>
            
        </div>
    </>
  )
}

export default MovieBar