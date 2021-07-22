import React from 'react'
import './index.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

import 'antd/dist/antd.css';
import { Popover, Button } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';

function Chatting({history}) {
    return (
        <div>
            <Header history={history}></Header>
            <div>
                <Popover className='chattingbot' placement="leftTop" title='오늘의 추천 주제!' content='오늘은 당신의 고교생활에 대하여 대화를 나눠보는건 어떨까요?' trigger="click">
                    <Button><NotificationOutlined /></Button>
                </Popover>
                <div className="chattingbox">
                    <div className="otherchat"><div className="chatbox">안녕하세요~</div></div>
                    <div className="otherchat"><div className="chatbox">안녕하세요~</div></div>
                    <div className="mychat"><div className="chatbox">안녕하세요~</div></div>
                </div>
                <div className="inputbox">
                    <input type='text'></input>
                    <Button>전송</Button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Chatting
