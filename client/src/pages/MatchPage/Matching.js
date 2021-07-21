import React from 'react'

import Header from '../../components/Header'

import Cards from '../../components/Cards'

function Matching() {
    return (
        <>
        <Header/>
        <div style={{backgroundColor:'#FFD5D2', color:'black', padding:'10px 15px'}}>
            <strong>한 학기 동안 이루어지는 멘토링!</strong> 
            <p>한 학기동안 지정된 멘토/멘티와 멘토링을 수행하세요!</p>
            <p>당신의 선호도를 최대한 반영하여 멘토/멘티를 지정해드립니다~</p>
        </div>
        <Cards where="match" goto="find" header='2021 1학기' title='2021 1학기 멘토/멘티 모집' text='기간 : 2021.03.03 ~ 2021.03.10' gotext='지금 신청하기'></Cards>
        </>
    )
}

export default Matching
