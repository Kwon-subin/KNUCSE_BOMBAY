import React, {useState} from 'react'

import './index.css'
import 'antd/dist/antd.css';
import { Form, Radio, InputNumber, Button } from 'antd';
import axios from 'axios';
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
  
const Mentor = () => {
    const [form] = Form.useForm();
    const [state, setState] = useState(true);

    const onFinish = (body) => {
        axios.post('/user/matching', body
        ).then(function(res){
            if(res.data){
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
            멘토 신청하기
        </div>
        <div>
            멘토 신청 기간은 2021.08.01-2021.08.08 까지입니다.
        </div>
        <div style={{height:'40px'}}></div>
        <Form
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
            focus: 'a',
            major: 'a',
            gender:'a',
            isAge:'a',
            age:20,
        }}
        scrollToFirstError>
            <div style={{display:"flex", flexDirection:'column'}}>
            <div className="question">
            어떤 부분에 집중하여 멘토링을 진행하고 싶습니까?
            <Form.Item name='focus' >
            <Radio.Group buttonStyle="solid">
                <Radio.Button value="a">학업적 측면</Radio.Button>
                <Radio.Button value="b">학교생활 관련</Radio.Button>
            </Radio.Group>
            </Form.Item>
            </div>
            <div className="question">
            멘티의 과가 중요한가요?
            <Form.Item name='major'>
            <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">같은 과</Radio.Button>
                <Radio.Button value="b">과 상관 없이</Radio.Button>
            </Radio.Group>
            </Form.Item>
            </div>
            <div className="question">
            원하는 멘티의 성별이 있나요?(동성/랜덤)
            <Form.Item name='gender'>
            <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">동성으로만</Radio.Button>
                <Radio.Button value="b">상관 없음</Radio.Button>
            </Radio.Group>
            </Form.Item>
            </div>
            <div className="question">
            원하는 멘티의 나이가 있나요?
            <Form.Item name='isAge'>
            <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a" onClick={toggle}>상관 없음</Radio.Button>
                <Radio.Button value="b" onClick={toggle}>내 나이 이하(나이 입력)</Radio.Button>
            </Radio.Group>
            </Form.Item>
            <Form.Item name='age'>
            <InputNumber min={19} disabled={state} defaultValue={20} />
            </Form.Item>
            </div>
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

export default Mentor
