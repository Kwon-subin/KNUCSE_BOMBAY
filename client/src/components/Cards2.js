import React from 'react'
import 'antd/dist/antd.css';
import { Card, Button } from 'antd';

function Cards2({btntext}) {
    return (
        <>
            <Card style={{ width: 300, height:200 }}>
                <p> .</p>
                <p>. </p>
                <p>. </p>
                <Button type="primary" shape="round" size={'large'}>
          {btntext}
        </Button>
            </Card>
        </>
    )
}

export default Cards2
