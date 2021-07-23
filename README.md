# 2021 KNUCSE Hackathon
- COVID-19로 변화된 대학 생활을 개선할 수 있는 창의적이고 혁신적인 소프트웨어 자유 개발

```
             TEAM : BOMBAY
컴퓨터학부 글로벌Sw융합전공 19학번 권수빈(Backend)
컴퓨터학부 글로벌Sw융합전공 19학번 김민지(Backend)
컴퓨터학부 글로벌Sw융합전공 19학번 이승신(Frontend)
```
<br/>

## Project Title  << 🌺Bloom🌺 >>

<img src="/client/src/img/Title.png" width="40%" height="30%" alt="TitleLogo"></img>
###### 경북대학교의 교화인 감꽃과 비슷한 아이콘의 꽃잎을 이용하여 Bloom의 B를 나타냄.

- 선후배간의 좋은 관계를 부름!('Bloom')
- 선후배간의 다양한 소통망을 꽃피우다!('Bloom')     
### "멘토링 프로그램을 위한 통합 플랫폼, Bloom"
---------------------------------------------
## [목차]
- [🖥실행방법](#실행방법)
- [😷개발배경](#개발배경)
- [💡아이디어 소개](#아이디어-소개)
- [👨🏻‍🤝‍👨🏻주요 기능](#주요-기능)
- [💻구현내용](#구현내용)
- [🤩기대효과](#기대효과)
- [📈향후전략](#향후전략)
- [👩‍💻기술스택](#기술스택)
- 📽[데모영상](#데모영상)
--------------------------------------------
## 🖥실행방법

## 😷개발배경
<p align="center"><img src="/corona.png" width="40%" height="30%" alt="TitleLogo"></img></p>

- 코로나19로 인하여 달라진 대학풍경에 대한 설문조사들에 따르면 대학생들은 '선후배간 교류', '사회적 교류 축소' 등을 가장 크게 느끼고 있는 것으로 밝혀졌다.
>   >`‘코로나로 인해 대학생활에 사라진 것이 무엇인지 묻는 질문(복수 응답 가능)에 동기/선배와의 교류’(74.5%, 409명)라고 답했다. 뒤를 이어 ‘교내 단체활동’ 58.8%(323명), ‘신입생과의 교류’ 39.5%(217명)가 있었다.`
- 특히, 새내기 시절에는 선배들과의 다양한 교류를 통해 학교 생활에 대한 이야기도 듣고 여러 도움을 받기도 하는데 코로나로 인하여 선배들과 교류할 수 있는 방법들이 축소되었다.
- 이런 문제에 심각성을 느끼고 이에 대한 해결 방안으로 선후배 간의 멘토링 프로그램을 더욱 활성화 할 수 있는 웹페이지를 만들기로 결정하였다.
###### 관련 자료
> - https://biz.chosun.com/site/data/html_dir/2020/12/28/2020122801480.html
> - http://weekly.hankooki.com/lpage/economy/202009/wk20200908154622146380.htm?s_ref=nv
<br/>

## 💡아이디어 소개
- `멘토링 프로그램에 대한 통합적인 플랫폼 제공`
- 멘토/멘티를 자동으로 매칭해주는 알고리즘을 구현하여 자동으로 배정하고 관리자의 개별적 연락 없이도 매칭 결과를 알 수 있도록 하였다.
- 모든 팀원이 코로나 기간 중 컴퓨터학부의 멘토링 프로그램에 참여(멘토)한 경험이 있다. 모두가 공통적으로 어려움을 느꼈던 부분은 '대화 소재 고갈'에 대한 부분이었다. 특히 코로나시대의 멘토링은 주로 비대면으로 진행되어 멘티와의 공통점을 발견하여 대화를 이끌어가기 어렵다는 점에 공감했고 커플앱/일기장앱의 기능처럼 매일 소재가 주어졌으면 좋겠다는 생각을 반영하였다.
- 코로나로 인해 각종 동아리활동, 대외활동이 축소 및 비대면으로 변경되어 다른 과 사람들을 만나기 더욱 어려워졌다. 하지만 팀원 모두 다른 과 선배들과의 교류를 통하여 배우는 것들도 많기에 이를 안타깝게 생각하였으며 이를 개선 할 수 있는 방법으로 학업 이외에 다양한 주제로 소규모 일일 멘토링의 진행을 도울 수 있다. 이를 통해 학생들이 보다 다양한 생각들을 접할 수 있을 것이다.
<br/>

## 👨🏻‍🤝‍👨🏻주요 기능
#### 🖥멘토/멘티 자동 매칭 : 일정 기간 동안 멘토와 멘티 신청을 받아 자동으로 멘토/멘티를 매칭해줌
  * 기존 컴퓨터학부의 멘토링 배정 방식은 학생회에서 따로 요청사항이 없다면 사람이 직접 랜덤으로 배정하는 방식이었다. 실제로 이전의 멘토링 신청 당시 많이 들어온 요청 사항을 바탕으로 신청서 질문을 만들었고, 이 항목들에 가중치를 두어 자동으로 멘토와 멘티를 매칭하는 알고리즘을 구현하였다.
  * 설문 시 작성하는 항목으로는 멘토, 멘티 공통으로 멘토링 시 더 중점이 되었으면 하는 부분, 같은 과를 원하는지, 성별(동성/랜덤), 나이에 관하여 선택 할 수 있도록 하였다.
  * 멘티의 경우 궁금한 점을 미리 받아 배정된 멘토에게 해당 사항을 전달할 수 있도록 하였다. 이를 통해 멘토는 멘토링 초반에 할 이야기들의 갈피를 쉽게 잡을 수 있을 것이다.

#### 🗓일일 멘토링 모집 : 하룻동안 멘토가 진행하고자 하는 주제(학교 투어, 학업 등등...)를 올리면 멘티가 직접 신청하는 게시판
   * 고정된 멘토에게 멘토링을 받으며 라포를 형성하는 것도 좋지만 일일 멘토링을 진행 할 수 있다면 다양한 선배/후배를 만날 수 있다는 장점이 생긴다. 또한 긴 기간 멘토링 활동이 부담스러운 학생들도 하루의 짧은 기간만 진행이 가능하므로 부담 없이 신청 가능할 것이다.
   * 뿐만 아니라 현재 동아리 활동이 축소되며 더욱 만나기 어려워진 타과의 선/후배를 만날 수 있는 기회를 마련하여 학생들이 다양한 인간관계를 형성 할 수 있게 도울 것이다.
   * 게시판에 글을 쓸 수 있는 것은 멘토(2학년 이상의 학생)만 가능하게 구현하였다. 또한 각 프로그램의 신청은 멘티(1학년 학생)만 가능하도록 하였다.
   * 멘토의 참여 활성화를 위해 멘토링이 끝난 후 멘토링을 받은 과반수 이상의 멘티가 설문 조사에 참여하여 일정 점수를 넘기면 마일리지(혹은 봉사시간)을 부여하도록 하였다. 이 마일리지 점수는 마이페이지를 통해 확인 할 수 있으며 현재는 일일 멘토링 참여 횟수가 나오도록 구현하였다.

#### 💬멘토/멘티 채팅방(기간제 멘토링 채팅방) : 매일 대화 소재를 추천해주는 멘토링 채팅방
   * 멘토로서 힘든 점은 멘토링 초반에 어떤 소재로 이야기를 이끌어가야할지에 대한 고민이라고 느꼈다. 따라서 채팅방 기능을 제공하고, 해당 채팅방에서 매일 이야기 소재를 추천해준다면 멘토에게 부담이 덜 할 수 있을 것이다.
   * 매일 바뀌는 추천 대화 소재는 운영진 측에서 미리 질문 리스트를 준비하고 매일 하나씩 소재를 제공하고자 한다.
<br/>

## 💻구현내용
 - [x] 로그인/로그아웃/회원가입
 - [x] 멘토-멘티 매칭 알고리즘
 - [x] 멘토/멘티 신청, 결과 조회, 설문조사 페이지
 - [x] 일일멘토링 신청/참여 게시판(글 작성, 참가 신청) 
 - [x] 메인화면/공지사항 게시판 
 - [ ] 채팅창(front는 완료, 동작은 X)
 <br/>

## 🤩기대효과
1. 멘토링 플랫폼을 경북대학교 전체, 향후 나아가 많은 대학에서 사용함으로서 코로나로 인해 대학생들이 가장 심각하게 느끼는 '교류단절'의 문제를 해결 할 수 있다.
2. 웹사이트를 통하여 멘토링 활동을 더욱 활발하게 만들 수 있다. 이는 멘티들에게도 좋은 기억을 만들어 멘티들이 향후 멘토가 되어 활동하는 등 경북대의 선순환을 일으킬 수 있을 것이다.
3. 통합적 멘토링 플랫폼 제공으로 인해 더욱 편하게 멘토링 관리를 할 수 있으며 멘토링의 효과를 극대화 시킬 수 있다.
4. 본인 과 선배 뿐만 아니라 다양한 과의 사람들을 만날 수 있는 기회를 제공함으로서 학생들의 시야가 더욱 넓어질 수 있는 계기가 될 것이다.
5. 멘티의 입장 뿐만 아니라 멘토의 입장도 충분히 고려하였기 때문에 보다 만족스러운 멘토링 환경 조성이 가능할 것이다.
<br/>

## 📈향후전략
##### 1. 경북대학교 뿐만 아니라 많은 대학에서 이용이 가능한 플랫폼을 제공함으로서 넓은 확장성을 지님
> + 대학생 500여명 중 약 75%의 인원이 선배/동기와의 교류, 약 40%가 신입생과 교류가 사라졌다고 응답한 결과로 미루어 보았을 때 전국의 많은 대학생들이 해당 부분에 대한 부재를 크게 느끼고 있다고 볼 수 있다.
> + 따라서 멘토링 프로그램을 통한 선후배간 교류의 확대는 모든 대학에서 필요로 하는 활동이므로 넓은 확장성을 지녔다고 해석 할 수 있을 것이다.
> + 경북대학교에서 운영 이후 학생들의 반응이 좋다면 많은 대학에서으로 폭넓게 확장이 가능할 것이다.

##### 2. 다른 학과 사람과의 교류가 더욱 쉬워질 수 있음.
> + 코로나 시대 이전에도 타과 사람들과의 교류는 동아리활동, 대외활동 이외에는 쉽지 않았다.
> + 코로나 이후 모임, 대면활동 등이 축소되며 타과 사람들과의 교류의 기회가 더 많이 사라졌다.
> + 따라서 일일멘토링 프로그램을 통하여 다양한 사람들과 다양한 프로그램을 진행 할 수 있음을 강조하여 홍보하고자 한다.
> + 이는 코로나 종식 이후에도 해당 플랫폼이 성장 할 수 있는 원동력이 될 수 있을 것이다.

##### 3. 새내기들이 자주 하는 질문 F&Q모음 / 선배들의 대학생활 노하우 게시판 생성
> + 새내기들은 직접 정보를 찾아보는데 익숙하지 않은 경우가 많고 아직 학교에 적응을 하고 있기에 모르는 것이 많다. 하지만 이들의 질문은 거의 비슷하기에 F&Q 게시판을 통해 자주 묻는 질문에 대한 답을 한다면 신입생들이 보다 학교생활에 쉽게 적응 할 수 있을 것이다.
> + F&Q제공 뿐만 아니라 선배들의 대학생활 노하우 게시판을 생성하여 새내기들의 플랫폼 접근을 높이고자 한다.

##### 4. 대학 근처의 시설 광고 삽입 가능
> + 멘토링 프로그램 진행 중에 밥을 먹거나 카페 등을 가는 경우가 많은데, 대부분 학교 근처에서 이루어지곤 한다.
> + 따라서 대학 근처의 식당 및 스터디 장소의 광고를 삽입한다면 광고 효과가 좋을 것이다.
> + 메인 화면의 배너 자리 광고 및 오늘의 추천 식당/장소 등의 페이지를 확장하여 삽입이 가능할 것이다.
<br/>

## 👩‍💻기술스택
- MongoDB
- Node.js (expresss.js)
- React
- Git
<br/>

## 📽데모영상
https://youtu.be/MvizNdaK1v0
