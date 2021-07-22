import React, { useState } from 'react';
import axios from 'axios'
import 'antd/dist/antd.css';
// import './index.css';
import { Form, Input, Cascader, Select, Button } from 'antd';
import Header from '../components/Header';
const { Option } = Select;
const residences = [
  {
    value: 'A',
    label: '인문대학',
    children: [
      {value: 'korean',label: '국어국문학과',},
      {value: 'philosophy',label: '철학과',},
      {value: 'chinese',label: '중어중문학과',},
      {value: 'english',label: '영어영문학과',},
    ],
  },
  {
    value: 'B',
    label: '사회과학대학',
    children: [
      {value: 'korean',label: '국어국문학과',},
      {value: 'philosophy',label: '철학과',},
      {value: 'chinese',label: '중어중문학과',},
      {value: 'english',label: '영어영문학과',},
    ],
  },
  {
    value: 'F',
    label: 'IT대학',
    children: [
      {value: 'computer',label: '컴퓨터학부(심컴)'}, 
      {value: 'glosw',label: '컴퓨터학부(심컴)'}, 
      {value: 'eletronic',label: '전자공학부',},
      {value: 'mobie',label: '모바일공학과',},
    ],
  },
  
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
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

const Register = ({history}) => {
  const [form] = Form.useForm();

  const onFinish = (body) => {
  axios.post('/user/register', body
  ).then(function (res){
    console.log(res)
    if(res.status===200){
      alert('hello')
      history.replace('/')
    }else{
      alert('중복된 email이 존재합니다.')
    }
  });
  };

  return (
    <>
    <Header></Header>
    <div style={{height:'50px'}}></div>
    <div style={{paddingRight:'18%'}}>

    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="Name"
        label="Name(실명 사용)"
        tooltip="실명을 사용해주세요"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="residence"
        label="소속 학과"
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Please select your department!',
          },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        tooltip="멘토/멘티가 동성 매칭을 원할 시 사용되는 정보입니다."
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
    </>
  );
};
export default Register