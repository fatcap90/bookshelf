import React from "react";

const Header =() => (
    <header className="header">
        <img className="header__icon" src="https://cdn.icon-icons.com/icons2/1129/PNG/512/fileinterfacesymboloftextpapersheet_79740.png" alt="Иконка книги"/>
        <h1 className="header__title">Книжная полка</h1>
        <div className="header__search">
            <input/>
            <button>Найти</button>
        </div>
    </header>
);

export default Header;