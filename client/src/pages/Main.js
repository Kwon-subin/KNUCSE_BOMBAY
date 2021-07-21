import React, { useState } from 'react'

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header'
import Cards2 from '../components/Cards2';

function Main({ history }) {
    return (
        <>
            <Header button_text='로그인' where='/login'></Header>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://img.etoday.co.kr/pto_db/2020/12/20201216104325_1555515_710_340.jpg"
                        alt="First slide"
                        height='250px'
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://w.namu.la/s/74496e0b4e6cdb298f96940aca377a2252e5325048cf982d48d50321ea5d7de4b1bc98bf7391a6a1c2d93f53aac74c2ac5c976e3fcfaeca62c099ccb3334c66d26e11a14d4fc9b6c2a105e1134b0b6cba99540569eee546f6ac0f05f9e7b59b9"
                        alt="Second slide"
                        height='250px'
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://mblogthumb-phinf.pstatic.net/MjAyMDAzMTNfMjA2/MDAxNTg0MDI3MzA1MTM1.ziQdHXjoSVpswgl7MkBXPOamMHIiKQKPpqjtQNkw6IMg.rkebY82ViYlYz83X1y5B7Fm6qyQkC2ZZlmHgRyJw1vAg.JPEG.d_hye97/1.jpg?type=w800"
                        alt="Third slide"
                        height='250px'
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>
                <div>학기제 멘토멘티 신청하기 ＞ </div>
                <div className="gird field">
                <Cards2 btntext='신청하기'></Cards2>
                </div>
            </div>
            <div>
                <div>다양한 멘토를 만나보세요. </div>
                <div className="gird field">
                <Cards2 btntext='더 알아보기'></Cards2>
                </div>
            </div>
        </>
    );
}

export default Main
