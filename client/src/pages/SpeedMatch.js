import React from 'react'
import {Link} from 'react-router-dom'
import { FormOutlined } from '@ant-design/icons';
import {Button} from 'antd'

import Header from '../components/Header'
import Cards from '../components/Cards'

function SpeedMatch() {
    return (
        <>
        <Header where='/login' button_text='로그인'></Header>
        <div>
            <Link to='/newPost'>
                <Button type="primary" shape="circle" icon={<FormOutlined/>} style={{float:'right', margin:'10px'}} />
            </Link>
        </div>
        <div className='cardBox' style={{clear:'both'}}>
        <Cards where='speedy' goto='/login' header='학교투어' title='학교투어하실분' gotext='더알아보기' ></Cards>

        </div>
        </>
    )
}

export default SpeedMatch
