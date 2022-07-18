import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Actores from './actoresPreviw/actores'
import Homen from './home/Homen'
import Previw from './previw/Previw'
import VideoPlayer from './videoPlayer/VideoPlayer'

const Rutas = () => {
  return (
    <div>

      <Routes>
        <Route path='/%20/previw/:id/%20/lcast/:castid' element={<Actores />} />
        <Route path='/%20/previw/:id/%20/lcast/:id/%20/lcast/:id' element={<Previw />} />
        <Route path='/%20/previw/:id' element={<Previw />} />
        <Route path='/videplay' element={<VideoPlayer />} />
        <Route path='*' element={<Homen />} />
      </Routes>

    </div>
  )
}

export default Rutas