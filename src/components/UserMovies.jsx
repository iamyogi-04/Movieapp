import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import UserSingle from './UserSingle'

const UserMovies = () => {
    const authtoken = localStorage.getItem('authtoken')
    const [getMovie, setGetMovie] = useState([])
    const getMovies = async () => {
        const response = await fetch("https://gentle-woodland-13143.herokuapp.com/api/v1/movie",{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "auth-token": authtoken
            },
        })
        const data = await response.json();
        console.log(data);
        setGetMovie(data);
    }
    useEffect(() => {
      getMovies();
      //eslint-disable-next-line
    }, [])
    
  return (
    <>
    <Navbar/>
    <div className='UserMovies'>
        {getMovie.map((item)=>{ return <UserSingle item={item} key={item._id}/>})}
    </div>
    </>
  )
}

export default UserMovies