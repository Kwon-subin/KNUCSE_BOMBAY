import React from 'react'

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header'
import Cards2 from '../components/Cards2';
import Footer from '../components/Footer';

import first from '../img/1.png'
import second from '../img/2.png'
import third from '../img/3.png'

import './index.css'
import { Link } from 'react-router-dom';

function Main({ history }) {
    return (
        <>
            <Header history={history}></Header>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={first}
                        alt="First slide"
                        height='250px'
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={second}
                        alt="Second slide"
                        height='250px'
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={third}
                        alt="Third slide"
                        height='250px'
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="main_wrapper">
                <div className="miniTitle">학기제 멘토멘티 신청하기 ＞ </div>
                <div className="gird field">
                <Cards2 btntext='신청하기'></Cards2>
                </div>
            </div>
            <div className="main_wrapper">
                <div className="miniTitle">다양한 멘토를 만나보세요. <Link to='/speedmatch'>＞</Link> </div>
                <div className="gird field">
                <Cards2></Cards2>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Main
