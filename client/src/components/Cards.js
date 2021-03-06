import React from 'react'

import './index.css'

import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Cards({where, goto, header, title, text, gotext, gotext2, btnclass}) {
    return (
        <>
            <Card style={{
                width:'80%',
                margin:'auto',
                marginTop:'30px'
            }}>
                <Card.Header as="h5">{header}</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Button variant="primary" className={btnclass}><Link to={goto} style={{color:'white'}}>{gotext}</Link></Button>
                    {
                        (gotext2)&&(
                            <>
                            <span> </span>
                            <Button variant="primary" className={btnclass}><Link to='/test' style={{color:'white'}}>매칭 확인하기</Link></Button>
                            </>
                        )
                    }
                </Card.Body>
            </Card>
        </>
    )
}

export default Cards
