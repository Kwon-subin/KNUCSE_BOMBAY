import React, {useState} from 'react'
import './index.css'
import 'antd/dist/antd.css';
 import { Form, Radio, InputNumber, Button } from 'antd';
 import axios from 'axios'
 const tailFormItemLayout = {
     wrapperCol: {
       xs: {
         span: 24,
         offset: 0,
       },
       sm: {
         span: 16,
         offset: 8,
       },
     },
 };

 function Test2() {
     const [form] = Form.useForm();
     const [state, setState] = useState(true);

     const onFinish = (body) => {
         body['uid'] = window.localStorage.getItem('uid')
         body['uid'] = window.localStorage.getItem('uid')
         console.log(body)
         axios.post('/user/matchingResult', body
         ).then(function(res){
             if(res.data){
                 console.log(res)
                 alert('성공')
             }else{
                 alert('실패')
             }
         })
     };

     function toggle() {
         setState(!state);
     }


      return (
        <submitwrapper>
        <div className="submitTitle">
            멘토 - 멘티 결과 매칭
        </div>
        <div>
            멘토 - 멘티 활동은 2021.08.10 부터 진행합니다.
        </div>
        <div style={{height:'40px'}}></div>
        <Form
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError>
            <div style={{display:"flex", flexDirection:'column'}}>
            <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
            제출하기
            </Button>
        </Form.Item>
            </div>
        </Form>
        
        </submitwrapper>
    )
}

export default Test2