import React, {useEffect, useState} from 'react';
import axios from 'axios';

import 'antd/dist/antd.css';
import './index.css';
import { Card } from 'antd';

import Header from '../components/Header'
import Footer from '../components/Footer';
import SkeletonInput from 'antd/lib/skeleton/Input';

function Mypage() {
    const body = {
        uid : window.localStorage.getItem('uid')
    }
    let meto = '멘티'
    let data = {isMentor:true, name:'a', count:3}
    // let data 
    // axios.post('/user/mypage', body)
    // .then()
    
    // setUser()
   
    // while(!data){}
    
    return (
        <div style={{backgroundColor:'#F3F3F3'}}>
        <Header></Header>
        <div>
            <div>
                    <Card style={{borderRadius:'10px', width: '90%', margin:'20px auto' }}>
                        <p>{data.name} {meto} 님 환영합니다!</p>
                        <p>번개모임 진행 횟수</p>
                        <p>{data.count} 회</p>
                    </Card>
            </div>
        </div>
        <Footer></Footer>
        </div>
   
    )}

export default Mypage
