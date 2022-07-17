import React, { useEffect, useState } from 'react'
import '../styles/slider.css'
import { Link } from 'react-router-dom'

const Slider = () => {

    useEffect(() => {
        popularpeticion()
    }, [])

    const [popular, setpapipopular] = useState([])

    const popularurl = 'https://api.themoviedb.org/3/movie/popular?api_key=442a13190cbd173b3f5645d87fe8aebf&language=en-US&page=2'
    const imgLink = 'https://image.tmdb.org/t/p/w500/'

    const popularpeticion = async () => {
        const Popularapi = await fetch(popularurl)
        const getpopular = await Popularapi.json()
        setpapipopular(getpopular.results)

    }



    return (

        <div className='slider_padre_conted'>
            <div className="slider_item">
                {
                    popular.map((itemPopular =>
                        <Link to={` /previw/${itemPopular.id}`}>

                            <div className="item_slider_img">
                                <div className="sliderSubconted">
                                    <img src={imgLink + itemPopular.poster_path} alt="" />
                                </div>
                            </div>

                        </Link>

                    ))
                }
            </div>
        </div>

    )
}

export default Slider   