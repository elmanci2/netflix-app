import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/actores.css'


const Actores = () => {

    const imgpreviLink = 'https://image.tmdb.org/t/p/original/'

    const { castid } = useParams()
    console.log(castid);

    const cast = ` https://api.themoviedb.org/3/person/${castid}?api_key=442a13190cbd173b3f5645d87fe8aebf&language=es`

    useEffect(() => {
        pedirActores()

    }, [])

    const [castDataCAst, setcastdata] = useState([])

    const pedirActores = async () => {
        const castactores = await fetch(cast)
        const datacast = await castactores.json()
        console.log(datacast);
        setcastdata(datacast)
    }


    return (


        <div>

            <div className="data_actor">
                <div className="shadow_actors"></div>
                <div className="actor_img_conted">
                    <img src={imgpreviLink + castDataCAst.profile_path} alt="" />
                </div>

                <span className='actorname'>{castDataCAst.name}</span>

                <div className="actor_metadata">
                    <span className='actorratingConted'> <i className='bx bxs-star ratingstart'></i> {castDataCAst.popularity} </span>
                    <span>{castDataCAst.birthday}</span>
                    <span className='profecionActor'>{castDataCAst.known_for_department}</span>

                </div>

            </div>


        </div>

    )
}

export default Actores









