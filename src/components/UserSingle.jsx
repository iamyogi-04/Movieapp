import React from 'react'
import'./usersingle.css'
const UserSingle = (props) => {
    const { item } = props
    return (
        <div className='UserSingle'>
            <div className="container-single">
                <div className="head">
                <h3>{item.title}</h3>
                </div>
                
                <div className="image">
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="img" />
                </div>
                <div className="overview">
                    {item.overview}
                </div>
                <div className="rating">
                    {item.vote_average}

                </div>


            </div>

        </div>
    )
}

export default UserSingle