import React from 'react'

import Header from '../components/Header'
import Listpage from '../components/Listpage'

function Notice() {
    return (
        <>
        <Header></Header>
        <div style={{textAlign:'center', fontSize:'25px', fontWeight:'700', marginTop:'20px'}}>공지사항</div>
        <div style={{width:'90%', margin:'auto'}}>
            <Listpage></Listpage>
        </div>
        </>
    )
}

export default Notice
