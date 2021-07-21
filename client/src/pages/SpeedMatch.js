import React from 'react'
import {Link} from 'react-router-dom'
import { FormOutlined } from '@ant-design/icons';
import {Button} from 'antd'
import axios from 'axios';

import './index.css'

import Header from '../components/Header'
import Cards2 from '../components/Cards2'
import Footer from '../components/Footer'
function SpeedMatch() {
    let posts;
    axios.get('/user/speedmatch').then(function(res){
        console.log('start')
        if(res.status===200){
            posts = res.data;
            console.log(posts)
        }else{
            posts=[]
        }
    })
    return (
        <div style={{backgroundColor:'#F3F3F3'}}>
        <Header where='/login' button_text='로그인'></Header>
        <div style={{backgroundColor:'#FAEB78', color:'black', padding:'10px 15px'}}>
            <strong>일일 멘티를 찾습니다!</strong> 
            <p>다양한 주제로 하루 동안 멘토링 진행!</p>
            <p>멘토라면 멘티를 구하는 글을 작성하고 멘티라면 다양한 멘토링에 참여 신청을 해 보세요~</p>
        </div>
        <div>
            <Link to='/newPost'>
                <Button type="primary" shape="circle" icon={<FormOutlined/>} style={{float:'right', margin:'10px'}} />
            </Link>
        </div>
        <div className='smallBox' style={{clear:'both', padding:'20px'}}>
            <Cards2 btntext='더 알아보기' ></Cards2>
            <Cards2 btntext='더 알아보기' ></Cards2>
            <Cards2 btntext='더 알아보기' ></Cards2>
            <Cards2 btntext='더 알아보기' ></Cards2>

        </div>
        <Footer></Footer>
        </div>
    )
}

export default SpeedMatch
