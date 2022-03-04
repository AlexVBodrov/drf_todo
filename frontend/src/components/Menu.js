import React from "react";

import './components.css';


const MainMenu = ({user}) => {
    return(
        // возвращаем верстку
        <div class="div-menu">
                <ul class="menu-main">
                <li><a href="#">Главная</a></li>
                <li><a href="#">Все пользователи</a></li>
                <li><a href="#">Проекты</a></li>
                <li><a href="#">TODO листы</a></li>
                </ul>

        </div>
    )
}

export default MainMenu