import React from 'react'
import { useState , useEffect } from 'react'
import MovieBar from './MovieBar'
import './lastpage.css'
import Navbar from './Navbar'
const LastPage = ({setAddmovie}) => {
  const key = "1db4e2c685edf6c26476d15fc7071884"
  localStorage.setItem('apikey', key)
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])

  const handleQuery = (e) => {
    console.log(e.target.value);
    const {  value } = e.target
    setQuery( value )
  }
  const handleSearch=()=>{
    fetchMovies()
  }

  
  
  const fetchMovies= async()=>{
    const apilocation = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${query}`
    const response = await fetch(apilocation, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response)
    const json = await response.json();
    console.log(json.results);
    setMovies(json.results);
  };
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [])

  
  return (
    <>
    <Navbar/>
      <div className='LastPage'>
        <h1>Movies</h1>
        <span> Search<input type="search" onChange={handleQuery} /><button onClick={handleSearch}>search</button></span>
      </div>
      <div className="movies">
      {movies && movies.map((movie)=>{return <MovieBar  movie={movie} key={movie.id} setAddmovie={setAddmovie} />})}
      </div>
    </>
  )
  }

export default LastPage