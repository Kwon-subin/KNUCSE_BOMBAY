import React from 'react'

import Header from '../components/Header'
import Listpage from '../components/Listpage'
import Footer from '../components/Footer'

function Notice({history}) {
    return (
        
        <div >
        <Header history={history}></Header>
        <div style={{textAlign:'center', fontSize:'25px', fontWeight:'700', marginTop:'20px'}}>공지사항</div>
        <div style={{width:'90%', margin:'auto', height:'546px'}}>
            <Listpage></Listpage>
        </div>

        <Footer></Footer>
        </div>
       
    )
}

export default Notice
