import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../styles/actores.css'

const Actores = () => {


    const funtionmodal = () => {


        const d = document;
        const modal = d.querySelector('.modal_actors')
        const clsflecha = d.querySelector('.flecha_up_class')
        const fleshapadre = d.querySelector('.modal_ubp')


        const elementoTouch = document.querySelector('.bx-fade-up')
        elementoTouch.addEventListener('touchstart', function (event) {
            if (event.targetTouches.length == 1) {

                modal.classList.toggle('mostrar_modal')
                clsflecha.classList.toggle('up_modal_container')
                fleshapadre.classList.toggle('up_clas_padre')
            }
        }, false);
    }


    const imgpreviLink = 'https://image.tmdb.org/t/p/original/'

    const { castid } = useParams()
    console.log(castid);
    const key_api = 'api_key=442a13190cbd173b3f5645d87fe8aebf'
    
    const cast = ` https://api.themoviedb.org/3/person/${castid}?${key_api}&language=es`
    const muviDetallaActors = ` https://api.themoviedb.org/3/person/${castid}/combined_credits?${key_api}&language=es `

    useEffect(() => {
        pedirActores()
        funtionmodal()
        pedirPeliculasActores()
    }, [])

    const [castDataCAst, setcastdata] = useState([])
    const [muvieActor, setMUvieACtor] = useState([])


    const pedirActores = async () => {
        const castactores = await fetch(cast)
        const datacast = await castactores.json()
  
        setcastdata(datacast)
    }



    

    const pedirPeliculasActores = async () => {
        const castactores = await fetch(muviDetallaActors)
        const dataMUbieACtor = await castactores.json()
        setMUvieACtor(dataMUbieACtor.cast)
    }

    const dosmuvies = muvieActor.slice(5, 7)

    const reducirMuvies = muvieActor



    return (

        <section className="padreCtors_container">


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
                <div className="modal_ubp">
                    <div className="  flecha_up_class">
                        <i className='bx bx-chevrons-up bx-fade-up'></i>
                    </div>
                </div>
            </div>


            <div className='modal_actors'>
                <div className="actor_modal_conteiner">
                    <div className="separador_modal"></div>

                    <span className='actorname_modal'>{castDataCAst.name} </span>
                    <div className="peliculas_container"></div>

                    <div className="actor_muvie_modal_continer">
                        <span className='tex_protagonisa_modal'>protagonisa</span>



                        <div className="protagonisa_car_mubie_nanner">
                            {
                                dosmuvies.map((carMUvie =>

                                    <div className="carmuvie_conted">
                                        <div className="car_img_muvie">
                                            <img src={'https://image.tmdb.org/t/p/w500/' + carMUvie.poster_path} alt="" />
                                        </div>
                                        <div className="metadata_actor_slider">
                                            <div className="muvie_name_slider_conted">
                                                <span className="name_car_muvie_banner">{carMUvie.title}</span>
                                            </div>
                                            <div className="slider_muvie_metadata">
                                                <span className='Populariti_satrt_muvie'><i className='bx bxs-star ratingstart'></i> {carMUvie.popularity} </span>
                                                <span>{carMUvie.release_date}</span>
                                                <span className='Muvie_type_banner_slider'>{carMUvie.media_type}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>


                        <span className="biografioa tex_protagonisa_modal">biografia</span>

                        <div className="biografia_slider_conted">
                            <p>
                               {
                                castDataCAst.biography
                               }
                            </p>
                        </div>


                        

                    </div>

                </div>

            </div>

            <h3 className='participa'> Participa en  </h3>

            <div className="slider_padre_conted1">
                <div className="slider_item1">
                    {
                        reducirMuvies.map((MuvieActoresRlacionadas =>
                            <Link to={` /lcast/${MuvieActoresRlacionadas.id}`}>
                                <div className="sliderSubconted1">
                                    <img src={'https://image.tmdb.org/t/p/w500/' + MuvieActoresRlacionadas.poster_path} alt="" />
                                </div>

                            </Link>

                        ))
                    }

                </div>

            </div>






        </section>

    )
}

export default Actores









