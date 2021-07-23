import React from 'react'

import Title from '../img/Title.png'

function Footer() {
    return (
        <div style={{backgroundColor:'grey', height:'80px', width:'100%',textAlign:'center', color:'white', padding:'0px'}}>
            <img src={Title} alt='logo' width='95px'/>
            <p>go to <a href='https://github.com/Kwon-subin/KNUCSE_BOMBAY/blob/main/README.md'>github</a></p>
        </div>
    )
}

export default Footer
