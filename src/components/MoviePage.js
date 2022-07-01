import React from 'react'
import Navbar from './Navbar'
import'./moviepage.css'
const MoviePage = (props) => {
    const {addmovie}= props
    const authtoken = localStorage.getItem('authtoken')
    console.log(addmovie)
    const addProduct = async () => {
        const response = await fetch('https://gentle-woodland-13143.herokuapp.com/api/v1/addmovie', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authtoken
            },
            body: JSON.stringify(addmovie)
        })
        const data = await response.json();
        console.log(data)
        window.alert("Movie Added Sucessfully")

    }
  return (
    <>
    <Navbar/>
    <div className="container">
        <div className="moviedescription">
        <h1>{addmovie.title}</h1>
        <div className="poster">
                <img src={`https://image.tmdb.org/t/p/w500/${addmovie.poster_path}`} alt="img" />
            </div>
            <div className="votes">
                <h6> Ratings {addmovie.vote_average} ✨✨ </h6>
            </div>
            <div className="release date">
                <h6> Release Date: {addmovie.release_date} </h6>
            </div>
            <div className="overview">
                <p>{addmovie.overview}</p>
            </div>
            <button className='addmovie' onClick={addProduct}>Add</button>
        </div>
        
    </div>
    
    </>
  )
}

export default MoviePage