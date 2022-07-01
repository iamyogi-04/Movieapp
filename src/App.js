import React from 'react'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import UserState from './context/UserState'
import LastPage from './components/LastPage'
import MoviePage from './components/MoviePage'
import { useState } from 'react'
import UserMovies from './components/UserMovies'
const App = () => {
  const [addmovie, setAddmovie] = useState(null)
  return (
    <>
      <BrowserRouter>
        
        <UserState>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/lastpage" element={<LastPage setAddmovie={setAddmovie} />} />
            <Route path='/prod' element={<MoviePage addmovie={addmovie}/>} />
            <Route path='/usermovies' element={<UserMovies />}/>

          </Routes>
        </UserState>
      </BrowserRouter>
    </>
  )
}

export default App