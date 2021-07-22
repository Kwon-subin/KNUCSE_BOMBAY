import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './Servey.css';


function Servey() {
    return (
        <div>
            <Header></Header>
                <div>
                    <div class="form-outer">
                        <div class="form-column">
                            <div class="dropdown">
                                <label for="dropdown">당신의 역할은 무엇인가요?</label>
                                <select name="music" id="dropdown">
                                    <option disabled selected>SELECT AN OPTION</option>
                                    <option value="mentor">Mentor</option>
                                    <option value="mentee">Mentee</option>
                                </select>
                            </div>
                            <div class="radio-buttons">
                                <p>
                                <h3>자신의 대학생활에 도움이 되었나요?</h3>

                                </p>
                                <div class="radio-button">
                                    <input type="radio" name="sex" value="bad" id="bad" />
                                    <label for="bad">
                                    <span class="radio-button-span"></span>
                                    나쁨
                                    </label>
                                </div>
                                <div class="radio-button">
                                    <input type="radio" name="sex" value="soso" id="soso" />
                                    <label for="soso">
                                    <span class="radio-button-span"></span>
                                    보통
                                    </label>
                                </div>
                                <div class="radio-button">
                                    <input type="radio" name="sex" value="good" id="good" />
                                    <label for="good">
                                    <span class="radio-button-span"></span>
                                    좋음
                                    </label>
                                </div>
                            </ div>
                            <div class="name">
                                <label for="name" id="name-label">이유를 작성해주세요.</label>
                                <input type="text" name="new-name" id="name" placeholder="Enter your opinion" autocomplete="nope" required />
                            </div>
                            <div class="radio-buttons">
                                <p>
                                <h3>자신의 학업 성취도 향상에 도움이 되었나요?</h3>
                                </p>
                                <div class="radio-button">
                                    <input type="radio" name="sex" value="bad" id="bad" />
                                    <label for="bad">
                                    <span class="radio-button-span"></span>
                                    나쁨
                                    </label>
                                </div>
                                <div class="radio-button">
                                    <input type="radio" name="sex" value="soso" id="soso" />
                                    <label for="soso">
                                    <span class="radio-button-span"></span>
                                    보통
                                    </label>
                                </div>
                                <div class="radio-button">
                                    <input type="radio" name="sex" value="good" id="good" />
                                    <label for="good">
                                    <span class="radio-button-span"></span>
                                    좋음
                                    </label>
                                </div>
                            </ div>        
                            <div class="email">
                                <label for="email" id="email-label">이유를 작성해주세요.</label>
                                <input type="email" name="email" id="email" placeholder="Enter your opinion" autocomplete="false" required />
                            </div>
                        </div>
                        <div class="form-column">
                            <div class="radio-buttons">
                                    <p>
                                        <h3>한번 더 이용할 생각이 있으신가요?</h3>

                                    </p>

                                <div class="radio-button">
                                    <input type="radio" name="sex" value="no" id="no" />
                                    <label for="bad">
                                    <span class="radio-button-span"></span>
                                    아니다.
                                    </label>
                                </div>
                                <div class="radio-button">
                                    <input type="radio" name="sex" value="yes" id="yes" />
                                    <label for="soso">
                                    <span class="radio-button-span"></span>
                                    그렇다.
                                    </label>
                                </div>
                            <div class="email">
                                <label for="email" id="email-label">이유를 작성해주세요.</label>
                                <input type="email" name="email" id="email" placeholder="Enter your opinion" autocomplete="false" required />
                            </div>
                            </div>
                            <div class="textarea">
                                <label for="comments">가장 좋았던 점을 적어주세요.</label>
                                <textarea name="comments" placeholder="Any comment?" id="comments" cols="25" rows="4"></textarea>
                            </div>
                            <div class="textarea">
                                <label for="comments">가장 아쉬운 점을 적어주세요.</label>
                                <textarea name="comments" placeholder="Any comment?" id="comments" cols="25" rows="4"></textarea>
                            </div>


                        </div>
                        {/* <div class = "checkboxes">
                            <h3>Sport Interests</h3>
                            <div class="sport-column">
                                <label for="football">
                                    <input type="checkbox" value="sports" />
                                        <span class="checkbox-text">Football</span>
                                </label>
                                <label for="tennis">
                                <input type="checkbox" value="sports" id="tennis" />
                                <span class="checkbox-text">Tennis</span>
                                </label>

                                <label for="table-tennis">
                                <input type="checkbox" value="sports" id="table-tennis" />
                                <span class="checkbox-text">Table Tennis</span>
                                </label>
                            </div>
                            <div class="sport-column">

                                <label for="baseball">
                                <input type="checkbox" value="sports" id="baseball" />
                                <span class="checkbox-text">Baseball</span>
                                </label>

                                <label for="basketball">
                                <input type="checkbox" value="sports" id="basketball" />
                                <span class="checkbox-text">Basketball</span>
                                </label>

                                <label for="volleyball">
                                <input type="checkbox" value="sports" id="volleyball" /> 
                                <span class="checkbox-text">Volleyball</span>
                                </label>
                                </div>
                        </div> */}
                        <div class="outer-button">
                            <input type="submit" value="Submit" id="submit" />
                        </div>
                    </div>
                </div>
            <Footer></Footer>
        </div>
    )
}

export default Servey
