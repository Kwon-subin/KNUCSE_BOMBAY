import React from 'react'
import axios from 'axios'
import { Button } from 'antd';
import Header from '../components/Header'
import Footer from '../components/Footer'

function Test() {
    let result;
        const onFinish = () => {
        let body={}
        body['uid'] = window.localStorage.getItem('uid')
        // console.log(body)
        axios.post('/user/whoIs', body
        ).then(function(res){
            console.log(res)
            if(res.data){
                result = res.data
            }else{
                alert('실패')
            }
        })
    };

    return (
        <div>
            <Header></Header>
            <div className="testWrapper">
                <div class="testTitle">
                    멘토 - 멘티 결과 매칭 보기
                </div>
                <div class="testSub">
                    멘토 - 멘티 활동은 2021.08.10 부터 진행합니다.
                </div>
                    <Button onClick={onFinish}>매칭 확인</Button>
            </div>
            {
                (result) && (
                    <div>{result[0]}</div>
                )
            }
            <Footer></Footer>
        </div>
        
    )
}

export default Test