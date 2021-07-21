import React from 'react';

import 'antd/dist/antd.css';
import './index.css';
import { Card } from 'antd';

import Header from '../components/Header'
import Footer from '../components/Footer';

function Mypage() {
    return (
        <div style={{backgroundColor:'#F3F3F3'}}>
        <Header></Header>
        <div>
            <div>
                    <Card style={{borderRadius:'10px', width: '90%', margin:'20px auto' }}>
                        <p>OOO 멘토님 환영합니다!</p>
                        <p>번개모임 진행 횟수</p>
                        <p>?</p>
                    </Card>
            </div>
        </div>
        <Footer></Footer>
        </div>
    )
}

export default Mypage
