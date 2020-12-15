import React, {useState} from 'react'
import {CardItem} from "./CardItem"
import SwiperCore, {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export const CardList = () => {
    const[card] = useState([
        {
            percentReceived: 30,
            location: 'Омск',
            moneyReceived: '45 194',
            endDate: 'завтра',
            title: 'Сбор средств для постройки школ в Индонезии',
            content: 'Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена',
            tag: ['помощь нуждающимся', 'закят']
        },
        {
            location: 'Омск',
            percentReceived: 80,
            moneyReceived: '45 194',
            endDate: 'завтра',
            title: 'Поможем дедушке построить пекарню',
            content: 'Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена',
            tag: ['помощь нуждающимся', 'закят']
        },
        {
            location: 'Омск',
            percentReceived: 10,
            moneyReceived: '45 194',
            endDate: 'завтра',
            title: 'Сбор для Арифулиной Дианы',
            content: 'Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена',
            tag: ['помощь нуждающимся', 'закят']
        }
    ])

    const [params,setParams] = useState({
        autoHeight: true,
        slidesPerView: 3,
        updateOnWindowResize: true,
        pagination: {clickable: true},
        loop: false,
        breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 1,
                allowTouchMove: true,
                spaceBetween: 50,
            },
            // when window width is >= 480px
            655: {
                slidesPerView: 2,
                allowTouchMove: false,
                spaceBetween: 38,
            },
            // when window width is >= 640px
            953: {
                slidesPerView: 3,
                allowTouchMove: false,
                spaceBetween: 51
            }
        }
    })
    SwiperCore.use([Pagination]);

    const breakpointHandler = (swiper) => {
        if ( window.innerWidth <= 655) {
            setParams({...params, loop: true})
        } else {
            setParams({...params, loop: false})
        }
        swiper.update()
    }

    return (
        <div className='card_list'>
            <Swiper
                onBreakpoint={swiper => breakpointHandler(swiper)}
                className="main_swiper _container"
                {...params}>
                {card.map((el, i) => {
                    return (
                        <SwiperSlide key={`slide-${i}`}>
                            <CardItem  data={el}/>
                        </SwiperSlide>
                        )
                })}
            </Swiper>
        </div>
    )
}