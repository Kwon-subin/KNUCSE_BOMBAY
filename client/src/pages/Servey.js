import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './Servey.css';


function Servey({history}) {
    return (
        <div>
            <Header history={history}></Header>
            <div>
                <div id="form-outer">
                <h1 id="title">Survey</h1>

                <p id="description"> 프로그램 퀄리티 향상을 위한 설문조사입니다. </p>
                    <div id="box-inner">
                        <div class="rowTab">
                            <div class="labels">
                                <label for="dropdown">당신의 역할은 무엇인가요?:</label>
                            </div>
                            <div class="rightTab">
                                <select id="dropdown" name="country">
                                <option disabled value>Select</option>
                                <option value="ukraine">Mentor</option>
                                <option value="australia">Mentee</option>
                                </select>
                            </div>
                        </div>
                        <div class="rowTab">
                            <div class="labels">
                                <label id="name-label" for="name">좋았던 점은 무엇인가요?:</label>
                            </div>
                            <div class="rightTab">
                                <input type="text" id="name" name="name" placeholder="Enter your opinion" required />
                            </div>
                        </div>
                        <div class="rowTab">
                            <div class="labels">
                            <label id="email-label" for="email">아쉬운 점은 무엇인가요?:</label>
                            </div>
                            <div class="rightTab">
                                <input type="email" id="email" name="email" placeholder="Enter your opinion" required />
                            </div>
                        </div>
                        <div class="rowTab">
                            <div class="labels">
                                <label id="number-label" for="number">재참여할 의사가 있나요?:</label>
                            </div>
                            <div class="rightTab">
                                <select id="dropdown" name="country">
                                <option disabled value>Select</option>
                                <option value="ukraine">Yes</option>
                                <option value="australia">No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <fieldset>
                        <legend>자신에게 가장 도움이 됐던 점을 골라주세요:</legend>
                        <div class="rowTab">

                            <div class="rightTab">
                                <ul>
                                <li class="radio"><label><input type="radio" name="time_password" value="1" /> 학업 성취도 향상</label></li>
                                <li class="radio"><label><input type="radio" name="time_password" value="2" /> 학교 생활</label></li>
                                <li class="radio"><label><input type="radio" name="time_password" value="3" /> 대외활동</label></li>
                                <li class="radio"><label><input type="radio" name="time_password" value="4" /> 기타</label></li>
                                </ul>
                            </div>
                        </div>
                    </fieldset>

                        <div class="rowTab">
                            <div class="labels">
                                <label for="comments">추가적으로 할말이 있으면 적어주세요.</label>
                            </div>
                        <div class="rightTab">
                    <textarea id="comments" name="comment" placeholder="Write something.." ></textarea>  
                        <button id="submit" type="submit">Submit</button>        
                    </div>
                    </div>
                    </div>
                    </div>
                    
            <Footer></Footer>
        </div>
    )
}

export default Servey
