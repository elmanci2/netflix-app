import React from 'react'
import Banner from '../banner/Banner'
import Menu from '../menu/Menu'
import Slider from '../slider/Slider'

const Homen = () => {
    return (
        <div>
            
            <Menu />
            <Banner />
            <h1 className="subtex suntex1">nuevos lansamientos </h1>
            <Slider />

        </div>
    )
}

export default Homen