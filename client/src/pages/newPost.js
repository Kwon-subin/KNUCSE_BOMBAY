import React, {useState} from 'react'
import axios from 'axios'

import Header from '../components/Header'

import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function NewPost({history}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    function handleTitle(e) {
        setTitle(e.target.value);
    }
    function handleContent(e) {
        setContent(e.target.value);
    }
    const onFinish = () => {
        let body = {
            uid : window.localStorage.getItem('uid'),
            title : title,
            content : content
        }
       
        axios.post('/user/newpost', body
        ).then(function (res){
          console.log(res)
          if(res.data){
            alert('hello')
            history.replace('/speedmatch')
          }else{
              console.log(res.data)
            alert('작성에 실패했습니다.')
          }
        });
        };
    return (
        <>
            <Header></Header>
            <div>
                <div style={{
                    backgroundColor:'rgb(255, 235, 90, 0.2)',
                    borderRadius:'5%',
                    width:'90%', margin:'30px auto',
                    height:'500px'
                }}>
                <div style={{textAlign:'center', padding:'10px', fontSize:'20px', fontWeight:700}}>멘티 모집하기</div>
                <Form style={{
                    width:'90%', margin:'auto', padding:'20px 0',
                    height:'500px'
                }}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="labelTitle">제목</Form.Label>
                        <Form.Control type="text" placeholder="Title" value={title} onChange={handleTitle}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="labelTitle">내용</Form.Label>
                        <Form.Control as="textarea" rows={10} value={content} onChange={handleContent}/>
                    </Form.Group>
                </Form>
                </div>
                <div>
                <Button onClick={onFinish} type="primary" shape="round" size={'large'} style={{margin:'auto', display:'block'}}>
                작성하기
                </Button>
                </div>
            </div>
        </>
    )
}

export default NewPost
