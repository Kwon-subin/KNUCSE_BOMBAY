import React from 'react'
import axios from 'axios';
import 'antd/dist/antd.css';
import { Card, Button } from 'antd';

function Cards2({btntext, title, content, num, goto, ids}) {
    function buttonOn(){
        if(goto==='/user/speed'){
            
            if(!window.confirm('신청하시겠습니까?')) return;
            const url = '/user/speedmatch'
            let body = {
                id:ids,
                mentee : window.localStorage.uid
            }
            axios.post(url, body)
            .then(
                window.location.reload()
            )
        }
    }

    return (
        <>
            <Card style={{ width: 300, height:200, margin:'auto' }}>
                <p><strong>{title}</strong> </p>
                <p>{content} </p>
                {
                    (num !== undefined) && (
                        <p>참여 신청 인원 : {num} </p>
                    )
                }
                
                <Button type="primary" shape="round" size={'large'} onClick={buttonOn}>
                {btntext}
                </Button>
            </Card>
        </>
    )
}

export default Cards2
