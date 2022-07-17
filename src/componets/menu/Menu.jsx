import React, { useEffect } from 'react'
import '../styles/menu.css'
import logoNetflix from '../../img/netflix.png'
import userNetflix from '../../img/userIcon.jpg'
const Menu = () => {

    var lastScrollTop = 0;
    const d = document;
    const menulogos = d.querySelector('.menu_top_conted');
    const backgratopmenu = d.querySelector('.top_padre_conted');



        window.addEventListener("scroll", function () {
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                menulogos.classList.add('menu_sow')
                backgratopmenu.classList.add('colorriseinden')
            } else {
                menulogos.classList.remove('menu_sow')
                backgratopmenu.classList.remove('colorriseinden')
            }
            lastScrollTop = st;
        }, false);
        

    return (

        <section>
            <div className="top_padre_conted">
                <div className="menu_top_conted">
                    <div className="sombramenuconted"></div>
                    <div className="logo_menu_conted">
                        <div className="neflixLogo">
                            <img src={logoNetflix} alt="" />
                        </div>
                        <div className="searchmenu">
                            <i className="bx bx-search" ></i>
                            <div className="userIcon">
                                <img src={userNetflix} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tex_menu_top">
                    <div className="tex_menu_top_item_span">
                        <span>muvies</span>
                        <span>series</span>
                        <span>categorias</span>

                    </div>
                </div>
            </div>

            <header>
                <div className="menu_conted">
                    <div className="menuitem">
                        <i className='bx bxs-home'></i>
                        <span>inicio</span>
                    </div>

                    <div className="menuitem">
                        <i className='bx bx-search'></i>
                        <span>buscar</span>
                    </div>

                    <div className="menuitem">
                        <i className='bx bx-tv'></i>
                        <span>videos</span>
                    </div>

                    <div className="menuitem">
                        <i className='bx bxs-user-circle'></i>
                        <span>mas</span>
                    </div>
                </div>
            </header>
        </section>


    )
}

export default Menu