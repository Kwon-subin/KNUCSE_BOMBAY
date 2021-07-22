import React, {useState} from 'react'
import axios from 'axios'
import { Form, Radio, InputNumber, Button } from 'antd';
import Header from '../components/Header'
import Footer from '../components/Footer'

function Test() {
    const [form] = Form.useForm();
    const [state, setState] = useState(true);

    const onFinish = () => {
        let body={}
        body['uid'] = window.localStorage.getItem('uid')
        // console.log(body)
        axios.post('/user/whoIs', body
        ).then(function(res){
            console.log(res)
            if(res.data){
                alert(res.data)
            }else{
                alert('실패')
            }
        })
    };

    const whoIs = () => {
        axios.post("/user/whoIs" )
        .then(function(res){
            console.log(res)
        })
    }

    function toggle() {
        setState(!state);
    }

    return (
        <div>
            <Header></Header>
            <div>
                <div class="">
                    멘토 - 멘티 결과 매칭 보기
                </div>
                <div class="">
                    멘토 - 멘티 활동은 2021.08.10 부터 진행합니다.
                </div>
                {/* <form action="/user/whoIs" method="POST"> */}
                    <button class="" onClick={onFinish}>제출하기</button>
                {/* </form> */}
            </div>
            <Footer></Footer>
        </div>
        
    )
}

export default Test