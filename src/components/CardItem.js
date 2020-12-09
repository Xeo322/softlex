import React from 'react'
import react_img from '../styles/img/react_png.png'
import logo from '../styles/img/logo.png'
import vector from '../styles/img/Vector.svg'
import location from  '../styles/img/location.svg'


export const CardItem = ({data}) => {

    return (
        <div className='card_item'>
            <div className="card_item__container">
                <div className='card_item__img_holder'>
                    <img src={react_img} alt="main_img" className="img_holder__img"/>
                    <div className="img_holder__location">
                        <img src={location} alt="vector" className="location__city"/>
                        <p>{data.location}</p>
                    </div>
                    <img src={logo} alt="logo" className="img_holder__logo"/>
                </div>
                <div className="card_item__main_info">
                    <p className='card_item__title body_copy1'>{data.title}</p>
                    <p className='card_item__content body_copy'>{data.content}</p>
                    <div className='card_item__info'>
                        <div className="info__received">
                            <div className="info_border">
                                <div className='info__progress'>
                                    <div style={{height: data.percentReceived + 20 + '%'}} className='wave_animation'/>
                                    <p style={data.percentReceived > 40 ? {color: '#ffffff'} : {color: '#8dca78'}} className='info__progress_num h5_bold'>{data.percentReceived + '%'}</p>
                                </div>
                            </div>
                            <div className="info__text text_container">
                                <p className="info__need_money body_copy4">необходимо собрать</p>
                                <span className='info__money body_copy3'><span style={{color: '#8dca78'}}>{data.moneyReceived}</span> из 1 000 000 RUB</span>
                            </div>
                            <div className='info__end text_container'>
                                <p className="info__end_date body_copy4">конец</p>
                                <p className='info__date body_copy3'>{data.endDate}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card_item__buttons">
                        {data.tag.map((el,i) => {
                            return <button className='card_button__item body_copy2' key={i}>{el}</button>
                        })}
                    </div>
                </div>
                <div className="card_item__button_holder">
                    <button className="button_holder__button"/>
                    <img src={vector} className='button_holder__logo' alt="vector"/>
                </div>
            </div>
        </div>
    )
}