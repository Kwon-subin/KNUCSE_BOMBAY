import React, {useState, useEffect} from 'react'

import axios from 'axios'
import { Carousel } from 'react-bootstrap';
import {Space} from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header'
import Cards2 from '../components/Cards2';
import Footer from '../components/Footer';

import './index.css'
import { Link } from 'react-router-dom';

function Main({ history }) {
    const [data, setData] = useState([])
    useEffect(() => {
        axios
          .get('/user/speedmatch')
          .then(({ data }) => {
              setData(data.posts)
              if(data.posts.length>4) setData(data.posts.slice(0,4))
            }).catch((err) => {});
      }, []);

    return (
        <>
            <Header history={history}></Header>
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
            <div className="main_wrapper">
                <div className="miniTitle">학기제 멘토멘티 신청하기 ＞ </div>
                <div className="girdfield">
                    현재 모집되고 있는 멘토링은 2022.01학기입니다.
                    지금 바로 신청해보세요~
                </div>
            </div>
            <div className="main_wrapper">
                <div className="miniTitle">다양한 멘토를 만나보세요. <Link to='/speedmatch'>＞</Link> </div>
                <div className="gird field">
                    <Space size={[16, 16]} wrap>
                        {data.map((item) => (
                            <Cards2 className="speedycard"title={item.title} content={item.content} num={item.count} btntext='참여하기' goto='/user/speed' ids={item._id} ></Cards2>
                        ))}
                    </Space>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Main
