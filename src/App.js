import React from 'react'
import './styles/main.scss'
import {CardList} from "./components/CardList";
import {Footer} from "./components/Footer";

export default function App() {


    return (
        <div>
            <header className="header">
                <div className='header__container _container'>
                    <div className="header__funding_text"/>
                </div>
            </header>
            <CardList/>
            <div className="main__center_button _container">
                <div>
                    <button className='main__button'>
                        <h4>Смотреть все проекты</h4></button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
