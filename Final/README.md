202012707 김다영
===
Final. 자신의 서비스 만들고 서비스하기
===

##### - RESTful 서비스 통신 규약 작성 (README.md)

##### - 데이터 베이스 사용

##### - 2개 이상의 모델 정의 (데이터베이스 상 테이블 2개 이상)

##### - CRUD 모두 적용

##### - 인증 사용, 인증이 필요한 기능 만들것

##### - 테스트 유저(2명 이상)를 READMD.md에 기록

##### - Github에 최종 결과물 (commit log 유지)

##### - AWS에 서비스 동작 중 (프로젝트 마무리 날에서 최소 2주)

--------------
## 🙈링크 : http://15.165.74.127:3000/musics 🙈

### 👩🏻인증된 사용자는 내용 추가, 수정이 가능합니다👩🏻

#### 🤴🏻인증된 사용자 1

##### ID : admin

##### PASSWORD : 1234

#### 👸🏻인증된 사용자 2

##### ID : dy

##### PASSWORD : 0225

--------------

### ✨다운로드 목록✨

##### - npm init

##### - npm i express

##### - npm i pug

##### - npm i method-override

##### - npm i mysql2

##### - npm i sequelize

##### - npm i express-session

--------------

### 🎈CONTENT🎈

##### - [통신 규약](#RESTful-서비스-통신-규약)

##### - [음악 전체보기](#음악-목록-전체보기)

##### - [음악 상세보기](#음악-정보-상세보기)

##### - [음악 추가 폼](#음악-정보-추가-폼)

##### - [음악 추가](#음악-정보-추가)

##### - [음악 삭제](#음악-정보-삭제)

##### - [음악 수정 폼](#음악-정보-수정-폼)

##### - [음악 수정](#음악-정보-수정)

##### - [로그인](#로그인-내용)

### 💕RESTful 서비스 통신 규약💕

| 업무 구분 |        항목        |       URL       | METHOD |
| :-------: | :----------------: | :-------------: | :----: |
|   목록    | 음악 목록 전체보기 |     /musics     |  GET   |
|   CRUD    | 음악 정보 상세보기 |   /musics/ID    |  GET   |
|           | 음악 정보 추가 폼  |   /music/add    |  GET   |
|           |   음악 정보 추가   |     /musics     |  POST  |
|           |   음악 정보 삭제   |   /musics/ID    | DELETE |
|           | 음악 정보 수정 폼  | /musics/edit/ID |  GET   |
|           |   음악 정보 수정   |   /musics/ID    |  PUT   |
|  로그인   |       로그인       |     /login      |  GET   |

--------------

### 📃음악 목록 전체보기

#### 요청

|    업무     | 음악 목록 전체보기 |
| :---------: | ------------------ |
|     URL     | /musics            |
| 요청 메소드 | GET                |

#### 응답

##### - 로그아웃 상태일 때

![메인_로그아웃](https://github.com/IDU-SW/202012707KDY/blob/Final/Final/image/%EB%A9%94%EC%9D%B8_%EB%A1%9C%EA%B7%B8%EC%95%84%EC%9B%83.png?raw=true)

##### - 로그인 상태일 때

![메인_로그인](https://github.com/IDU-SW/202012707KDY/blob/Final/Final/image/%EB%A9%94%EC%9D%B8_%EB%A1%9C%EA%B7%B8%EC%9D%B8.png?raw=true)

--------------

### 📖음악 정보 상세보기

#### 요청

|     업무      | 음악 정보 상세보기                                           |
| :-----------: | ------------------------------------------------------------ |
|      URL      | /musics/ID                                                   |
|  요청 메소드  | GET                                                          |

#### 응답

##### - 로그아웃 상태일 때

![상세_로그아웃](https://github.com/IDU-SW/202012707KDY/blob/Final/Final/image/%EC%83%81%EC%84%B8_%EB%A1%9C%EA%B7%B8%EC%95%84%EC%9B%83.png?raw=true)

##### - 로그인 상태일 때

![상세_로그인](https://github.com/IDU-SW/202012707KDY/blob/Final/Final/image/%EC%83%81%EC%84%B8_%EB%A1%9C%EA%B7%B8%EC%9D%B8.png?raw=true)

--------------

### ⚙음악 정보 추가 폼

##### - 로그인 후 음악 정보 추가가 가능합니다.

#### 요청

| 업무          | 음악 정보 추가                                               |
| ------------- | ------------------------------------------------------------ |
| URL           | /music/add                                                   |
| 요청 메소드   | GET                                                          |

#### 응답

![추가](https://github.com/IDU-SW/202012707KDY/blob/Final/Final/image/%EC%B6%94%EA%B0%80.png?raw=true)

--------------

### 📋음악 정보 추가

##### - 로그인 후 음악 정보 추가가 가능합니다.

#### 요청

| 업무          | 음악 정보 추가                                               |
| ------------- | ------------------------------------------------------------ |
| URL           | /musics                                                      |
| 요청 메소드   | POST                                                         |

#### 응답

![추가_완료](https://github.com/IDU-SW/202012707KDY/blob/Final/Final/image/%EC%B6%94%EA%B0%80_%EC%99%84%EB%A3%8C.png?raw=true)

--------------

### 🗑음악 정보 삭제

#### 요청

| 업무        | 음악 정보 삭제 |
| ----------- | -------------- |
| URL         | /musics/ID     |
| 요청 메소드 | DELETE         |

#### 응답

![삭제](https://github.com/IDU-SW/202012707KDY/blob/Final/Final/image/%EC%82%AD%EC%A0%9C.png?raw=true)

--------------

### 📚음악 정보 수정 폼

##### - 로그인 후 음악 정보 수정이 가능합니다.

#### 요청

|    업무     | 음악 정보 수정  |
| :---------: | --------------- |
|     URL     | /musics/edit/ID |
| 요청 메소드 | GET             |

#### 응답

![수정](https://github.com/IDU-SW/202012707KDY/blob/Final/Final/image/%EC%88%98%EC%A0%95.png?raw=true)

--------------

### 🔧음악 정보 수정

##### - 로그인 후 음악 정보 수정이 가능합니다.

#### 요청

|     업무      | 음악 정보 수정                                               |
| :-----------: | ------------------------------------------------------------ |
|      URL      | /musics/ID                                                   |
|  요청 메소드  | PUT                                                          |
|  콘텐트 타입  | application/json                                             |
|  메세지 구조  | - **title : 노래제목**<br />- **artist : 아티스트**<br />- genre : 음악 장르<br />- date : 음악 발매일 |

#### 응답

![수정_완료](https://github.com/IDU-SW/202012707KDY/blob/Final/Final/image/%EC%88%98%EC%A0%95_%EC%99%84%EB%A3%8C.png?raw=true)

--------------

### 🔧로그인 내용

#### 요청

|    업무     | 로그인 폼                                                    |
| :---------: | ------------------------------------------------------------ |
|     URL     | /login                                                       |
| 요청 메소드 | GET                                                          |

#### 응답

##### - 로그인 창

![로그인창](https://github.com/IDU-SW/202012707KDY/blob/Final/Final/image/%EB%A1%9C%EA%B7%B8%EC%9D%B8%EC%B0%BD.png?raw=true)

##### - 로그인 성공

![로그인_성공](https://github.com/IDU-SW/202012707KDY/blob/Final/Final/image/%EB%A1%9C%EA%B7%B8%EC%9D%B8_%EC%84%B1%EA%B3%B5.png?raw=true)

##### - 로그인 실패

![로그인_성공](https://github.com/IDU-SW/202012707KDY/blob/Final/Final/image/%EB%A1%9C%EA%B7%B8%EC%9D%B8_%EC%8B%A4%ED%8C%A8.png?raw=true)

##### - 로그아웃

![로그아웃](https://github.com/IDU-SW/202012707KDY/blob/Final/Final/image/%EB%A1%9C%EA%B7%B8%EC%95%84%EC%9B%83.png?raw=true)