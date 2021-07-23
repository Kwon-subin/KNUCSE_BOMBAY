import React, {useState, useEffect} from 'react'

import axios from 'axios'
import { Carousel } from 'react-bootstrap';
import {Space} from 'antd'
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
                            <Cards2 key={item._id} className="speedycard"title={item.title} content={item.content} num={item.count} btntext='참여하기' goto='/user/speed' ids={item._id} ></Cards2>
                        ))}
                    </Space>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Main
