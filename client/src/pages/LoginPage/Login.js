import React, {useState} from 'react'
import Axios from 'axios'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './login.css'

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import Header from '../../components/Header';

function Login({history}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        if (!email) {
        alert('이메일을 입력해주세요');
        return;
        }
        if (!password) {
        alert('비밀번호를 입력해주세요');
        return;
        }
        event.preventDefault();

        let body = {
            email: email,
            password: password
        }

        Axios.post('/user/login', body
        ).then(function (res){

        }).catch(function (err){

        });
    }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
      <Header button_text='회원가입' where='/register' />
      <div className='wrappers'>

      <Form
      name="normal_login"
      className="login-form"
      size='large'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" 
        value={email} onChange={handleEmail}/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={password} onChange={handlePassword}
        />
      </Form.Item>
      
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/register">register now!</a>
      </Form.Item>
    </Form>
      </div>
    </>
    )
}

export default Login
