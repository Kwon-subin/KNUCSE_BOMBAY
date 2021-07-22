import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { FormOutlined } from '@ant-design/icons';
import {Space,Button} from 'antd'
import axios from 'axios';

import './index.css'

import Header from '../components/Header'
import Cards2 from '../components/Cards2'
import Footer from '../components/Footer'

function SpeedMatch({history}) {
    const [data, setData] = useState([])
    let ismentor = window.localStorage.getItem('isMentor')
    useEffect(() => {
        axios
          .get('/user/speedmatch')
          .then(({ data }) => setData(data.posts))
          .catch((err) => {});
      }, []);
    return (
        <div style={{backgroundColor:'#F3F3F3'}}>
        <Header history={history}></Header>
        <div style={{backgroundColor:'#FAEB78', color:'black', padding:'10px 15px'}}>
            <strong>일일 멘티를 찾습니다!</strong> 
            <p>다양한 주제로 하루 동안 멘토링 진행!</p>
            <p>멘토라면 멘티를 구하는 글을 작성하고 멘티라면 다양한 멘토링에 참여 신청을 해 보세요~</p>
        </div>
        {
            (ismentor === 'true') ? (
            <div>
                <Link to='/newPost'>
                    <Button type="primary" shape="circle" icon={<FormOutlined/>} style={{float:'right', margin:'10px'}} />
                </Link>
            </div>
            ):(
                <div></div>
            )
        }
        <Space size={[16, 16]} wrap style={{clear:'both', padding:'20px', margin:'auto', minHeight:'495px'}}>
            {data.map((item)=>(
                <Cards2 className="speedycard" title={item.title} content={item.content} num={item.count} btntext='참여하기' goto='/user/speed' ids={item._id} ></Cards2>
        ))}       
        </Space>

        <Footer></Footer>
        </div>
    )
}

export default SpeedMatch
