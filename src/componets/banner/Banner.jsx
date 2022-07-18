import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/banner.css'

const Banner = () => {

    const imagenlinker1 = 'https://image.tmdb.org/t/p/original/'
    const lurlPreviw = ` https://api.themoviedb.org/3/movie/667739?api_key=442a13190cbd173b3f5645d87fe8aebf `

    useEffect(() => {
        pedirbanner()

    }, [])


    const [banner, setbanner] = useState([])
    const [genersBanner, setGenerwsBanner] = useState([])

    const pedirbanner = async () => {
        const resdata = await fetch(lurlPreviw)
        const datapreviw = await resdata.json()
        setbanner(datapreviw)
        setGenerwsBanner(datapreviw.genres)
    }


    let generos = genersBanner.slice(0 , 4)




    return (

        <div>
            <div className="banner_conted">
                <div className="banner_intems_conted">
                    <div className="banner_img_conted">
                        <img src={imagenlinker1 + banner.poster_path} alt="" />
                    </div>

                    <div className="sombra_banner"></div>
                    <div className="categoria_conted_banner">
                        <ul className="list_categoria">
                            {
                                generos.map((losgenerosSon =>
                                    <li> <span>{losgenerosSon.name}</span></li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="title_serie_banner">
                        <h1> {banner.title} </h1>
                    </div>

                    <div className="botones_item_conted">
                        <div className="banner_iconst">
                            <i className='bx bx-plus'></i>
                            <span>mi lista</span>
                        </div>

                        <Link to={` /previw/${banner.id}`}>
                            <div className="play_icon_banner">
                                <i className='bx bx-play'></i>
                                <span>reproducir</span>
                            </div>
                        </Link>


                        <div className="banner_iconst">
                            <i className='bx bx-error-circle'></i>
                            <span>informacion</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner