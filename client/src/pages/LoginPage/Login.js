import React, {useState} from 'react'
import axios from 'axios'
import 'antd/dist/antd.css';
import './login.css'

import { message, Form, Input, Button } from 'antd';
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
     

    const handleLogin = () => {
        // event.preventDefault();
        
        let body = {
            email: email,
            password: password
        }

      axios.post('/user/login', body
      ).then(function (res) {
        if (res.data) {
          message.info('로그인 성공!');
          window.localStorage.setItem('uid', res.data.uid)
          window.localStorage.setItem('isMentor', res.data.isMentor)
          window.localStorage.setItem('uname', res.data.name)
          history.replace('/')
          
        } else {
          alert('아이디나 비밀번호가 잘못되었습니다.')
        }
      });
    
      }
      const onFinish = (values) => {
        // console.log('Received values of form: ', values);
        handleLogin()
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
