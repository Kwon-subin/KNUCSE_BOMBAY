import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Cards from '../../components/Cards'

function Matching({history}) {
    let goto
    if(window.localStorage.getItem('isMentor')===true) goto="find"
    else goto="find2"
    return (
        <>
        <Header history={history}></Header>
        <div style={{backgroundColor:'#FFD5D2', color:'black', padding:'10px 15px'}}>
            <strong>한 학기 동안 이루어지는 멘토링!</strong> 
            <p>한 학기동안 지정된 멘토/멘티와 멘토링을 수행하세요!</p>
            <p>당신의 선호도를 최대한 반영하여 멘토/멘티를 지정해드립니다~</p>
        </div>
        <Cards where="match" goto={goto} header='2022 1학기' title='2022 1학기 멘토/멘티 모집' text='기간 : 2021.07.20 ~ 2021.07.30' gotext='지금 신청하기' btnclass='btnclass1'></Cards>
        <Cards where="match" goto="chatting" header='2021 2학기' title='2021 2학기 멘토링 진행중' text='기간 : 2021.07.20 ~ 2021.12.30' gotext='입장하기' gotext2='입장하기' btnclass='btnclass2'></Cards>
        <Cards where="match" goto="servey" header='2021 1학기' title='2021 1학기 멘토링 마감' text='설문기간 : 2021.07.20 ~ 2021.07.27' gotext='설문조사 시행하기' btnclass='btnclass3'></Cards>
        <Footer></Footer>
        </>
    )
}

export default Matching
