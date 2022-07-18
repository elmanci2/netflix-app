import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import '../styles/previw.css'
import midata from './api.json'




const Previw = () => {


  const { id } = useParams()



  const midataur = midata[0]

  console.log(midataur);

  // =========== const urls  =============
  const imagenlinker = 'https://image.tmdb.org/t/p/w500/'
  const imgpreviLink = 'https://image.tmdb.org/t/p/original/'
  const tmdburl = 'https://api.themoviedb.org/3/'
  const urlTV = 'tv'
  const muvie = 'movie/'
  const api_key = '442a13190cbd173b3f5645d87fe8aebf'


  const lurlPreviw = ` ${tmdburl}${muvie} ${id}?api_key=${api_key}&language=es-mx `
  const trailerpreviw = ` ${tmdburl}${muvie}${id}/videos?api_key=${api_key}&language=es-mx `
  const cast = ` ${tmdburl}${muvie}${id}/credits?api_key=${api_key}&language=en-US`


  // =========== estados =============
  const [datapreviw, setpreviw] = useState([])
  const [videosYT, setTrailer] = useState([])
  const [keyVideo, setKeyvideo] = useState([])
  const [datosActores, setcast] = useState([])
  const [generos, setgeneros] = useState([])


  // =========== usefects =============
  useEffect(() => {
    peticionofdata()
    pedirVidos()
    pedirActores()

  }, []);




  useEffect(() => {

    const d = document;
    const sivideo = d.querySelector('.videopreviw_conted')
    const novideo = d.querySelector('.poster_conted_previw')


    if (keyVideo.length === 0) {
      sivideo.classList.add('show_video')

    } else {
      novideo.classList.add('show_video')
      sivideo.classList.remove('show_video')

    }

  })


  const detener = datosActores.slice(0, 7);
  const datageneros = generos.slice(0, 4)



  // =========== peticiones =============
  const peticionofdata = async () => {
    const resdata = await fetch(lurlPreviw)
    const datapreviw = await resdata.json()
    setpreviw(datapreviw)
    setgeneros(datapreviw.genres)
  }

  const pedirVidos = async () => {
    const catsdat = await fetch(trailerpreviw)
    const trailerdata = await catsdat.json()
    setTrailer(trailerdata)
    setKeyvideo(trailerdata.results[0].key)
  }


  const pedirActores = async () => {
    const castactores = await fetch(cast)
    const datacast = await castactores.json()

    setcast(datacast.cast)
  }

  // mi jotason 



  // =========== const youtube  =============
  const ytparams = '?rel=0&fs=0&modestbranding=1&?showinfo=0&autoplay=1'
  const keyYoutube = `https://www.youtube.com/embed/${keyVideo}${ytparams}`



  return (

    <section className='SubcontenPreviw'>
      <Link to={-1}>
        <div className="atras_conted" >
          <i className='bx bx-chevrons-left'></i>
        </div>
      </Link>


      <div className="banner_conted_previw">
        <div className="videopreviw_conted  ">
          <div class="plyr__video-embed" id="player">
            <iframe src={keyYoutube} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  ></iframe>
          </div>
        </div>

        <div className="poster_conted_previw  ">
          <img src={imgpreviLink + datapreviw.backdrop_path} alt="" />
        </div>
      </div>

      <div className="previw_matadata">

        <h1 className='eltitulo_previ'> {datapreviw.title} </h1>
        <div className="metadata_previw_item">
          <span className="yer">2022</span>
          <span className="votos">{datapreviw.vote_average}</span>
          <span className="run_time">{datapreviw.runtime + 'min'}</span>
          <span className="calidad_previw">HD</span>

        </div>
      </div>




      <div className="previw_play_botoom">

        <div className="previw_botomplay_item">
          <i className="bx bx-play"></i>
          <span>ver</span>
        </div>
      </div>


      <div className="overviw_previw">
        <p> {datapreviw.overview}</p>
      </div>

      <ul className="categorias">
        {
          datageneros.map((generos =>
            <li> <span>{generos.name}  </span></li>
          ))
        }
      </ul>

      <h2>actores</h2>

      <div className="slider_padre_conted1">
        <div className="slider_item1">
          {
            detener.map((actores =>

              <Link to={` /lcast/${actores.id}`}>
                <div className="sliderSubconted1">
                  <img src={imagenlinker + actores.profile_path} alt="" />
                </div>
              </Link>

            ))
          }

        </div>

      </div>



    </section>

  )
}

export default Previw   