import React from 'react'
import axios from 'axios'
import { Button } from 'antd';
import Header from '../components/Header'
import Footer from '../components/Footer'

function Test() {
    let ismentor = window.localStorage.getItem('isMentor')
    const onFinish = () => {
        let body = {}
        body['uid'] = window.localStorage.getItem('uid')
        // console.log(body)
        axios.post('/user/whoIs', body
        ).then(function (res) {
            if (res.data) {
                alert(res.data)
            } else {
                alert('정보를 불러오는데 실패하였습니다')
            }
        })
    };

    return (
        <div>
            <Header></Header>
            <div className="testWrapper">
                <div className="testTitle">
                    멘토 - 멘티 결과 매칭 보기
                </div>
                <div className="testSub">
                    멘토 - 멘티 활동은 2021.08.10 부터 진행합니다.
                </div>
                    <Button onClick={onFinish}>매칭 확인</Button>
            {
                (ismentor === 'true') ? (
                    <div style={{paddingTop:'50px', fontSize:'30px'}}> 지금 당신의 멘티를 확인하세요!</div>
                ):(
                    <div style={{paddingTop:'50px', fontSize:'30px'}}> 지금 당신의 멘토를 확인하세요!</div>
                )
            }
            </div>
            <Footer></Footer>
        </div>
        
    )
}

export default Test