import React from 'react'

import Header from '../../components/Header'

import Cards from '../../components/Cards'

function Matching() {
    return (
        <>
        <Header/>
        <Cards where="match" goto="find" header='2021 1학기' title='2021 1학기 멘토/멘티 모집' text='기간 : 2021.03.03 ~ 2021.03.10' gotext='지금 신청하기'></Cards>
        </>
    )
}

export default Matching
