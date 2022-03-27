import React from "react";

import './components.css';


const MainMenu = ({user}) => {
    return(
        // возвращаем верстку
        <div className="div-menu">
                <ul className="menu-main">
                <li><a href="#">Главная</a></li>
                <li><a href="#">Все пользователи</a></li>
                <li><a href="#">Проекты</a></li>
                <li><a href="#">TODO листы</a></li>
                </ul>

        </div>
    )
}

export default MainMenu