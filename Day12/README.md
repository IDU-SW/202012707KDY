202012707 김다영
===
DAY12. 프로젝트에 인증기능 추가하기
===

##### - 인증없이 접근 가능한 콘텐트를 제공한다.

##### - 특정 콘텐트를 접근하거나 혹은 생성할 때는 인증이 필요하다

##### - 미리 인증된 사용자 정보는 README.md에 기록

--------------
### 👩🏻인증 된 사용자👩🏻
##### ID : dy

##### PASSWORD : 0225

### ✨다운로드 목록✨
##### - npm init

##### - npm i express

##### - npm i pug

##### - npm i method-override

##### - npm i mysql2

##### - npm i sequelize

##### - npm i express-session

### 🎈CONTENT🎈

##### - [음악 전체보기](#음악-목록-전체보기)

##### - [음악 상세보기](#음악-정보-상세보기)

##### - [음악 추가 폼](#음악-정보-추가-폼)

##### - [음악 추가](#음악-정보-추가)

##### - [음악 삭제](#음악-정보-삭제)

##### - [음악 수정 폼](#음악-정보-수정-폼)

##### - [음악 수정](#음악-정보-수정)

##### - [로그인](#로그인-내용)

| 업무 구분 |        항목        |       URL       | METHOD |
| :-------: | :----------------: | :-------------: | :----: |
|   목록    | 음악 목록 전체보기 |     /musics     |  GET   |
|   CRUD    | 음악 정보 상세보기 |   /musics/ID    |  GET   |
|           | 음악 정보 추가 폼  |   /music/add    |  GET   |
|           |   음악 정보 추가   |     /musics     |  POST  |
|           |   음악 정보 삭제   |   /musics/ID    | DELETE |
|           | 음악 정보 수정 폼  | /musics/edit/ID |  GET   |
|           |   음악 정보 수정   |   /musics/ID    |  PUT   |
|  로그인   |     로그인 폼      |     /login      |  GET   |

--------------

### 📃음악 목록 전체보기

#### 요청

|    업무     | 음악 목록 전체보기 |
| :---------: | ------------------ |
|     URL     | /musics            |
| 요청 메소드 | GET                |

#### 응답

![목록](https://github.com/IDU-SW/202012707KDY/blob/auth/Day12/image/%EB%AA%A9%EB%A1%9D.png?raw=true)

--------------

### 📖음악 정보 상세보기

#### 요청

|     업무      | 음악 정보 상세보기                                           |
| :-----------: | ------------------------------------------------------------ |
|      URL      | /musics/ID                                                   |
|  요청 메소드  | GET                                                          |

#### 응답

![상세](https://github.com/IDU-SW/202012707KDY/blob/auth/Day12/image/%EC%83%81%EC%84%B8.png?raw=true)

--------------

### ⚙음악 정보 추가 폼

#### 요청

| 업무          | 음악 정보 추가                                               |
| ------------- | ------------------------------------------------------------ |
| URL           | /music/add                                                   |
| 요청 메소드   | GET                                                          |

#### 응답

![추가폼](https://github.com/IDU-SW/202012707KDY/blob/auth/Day12/image/%EC%B6%94%EA%B0%80%ED%8F%BC.png?raw=true)

--------------

### 📋음악 정보 추가

#### 요청

| 업무          | 음악 정보 추가                                               |
| ------------- | ------------------------------------------------------------ |
| URL           | /musics                                                      |
| 요청 메소드   | POST                                                         |

#### 응답

![추가폼](https://github.com/IDU-SW/202012707KDY/blob/auth/Day12/image/%EC%B6%94%EA%B0%80%EC%99%84%EB%A3%8C.png?raw=true)

--------------

### 🗑음악 정보 삭제

#### 요청

| 업무        | 음악 정보 삭제 |
| ----------- | -------------- |
| URL         | /musics/ID     |
| 요청 메소드 | DELETE         |

#### 응답

![삭제](https://github.com/IDU-SW/202012707KDY/blob/auth/Day12/image/%EC%82%AD%EC%A0%9C.png?raw=true)

--------------

### 📚음악 정보 수정 폼

#### 요청

|    업무     | 음악 정보 수정  |
| :---------: | --------------- |
|     URL     | /musics/edit/ID |
| 요청 메소드 | GET             |

#### 응답

![수정](https://github.com/IDU-SW/202012707KDY/blob/auth/Day12/image/%EC%88%98%EC%A0%95%ED%8F%BC.png?raw=true)

--------------

### 🔧음악 정보 수정

#### 요청

|     업무      | 음악 정보 수정                                               |
| :-----------: | ------------------------------------------------------------ |
|      URL      | /musics/ID                                                   |
|  요청 메소드  | PUT                                                          |
|  콘텐트 타입  | application/json                                             |
|  메세지 구조  | - **title : 노래제목**<br />- **artist : 아티스트**<br />- genre : 음악 장르<br />- date : 음악 발매일 |

#### 응답

![수정](https://github.com/IDU-SW/202012707KDY/blob/auth/Day12/image/%EC%88%98%EC%A0%95.png?raw=true)

--------------

### 🔧로그인 내용

#### 요청

|    업무     | 로그인 폼                                                    |
| :---------: | ------------------------------------------------------------ |
|     URL     | /login                                                       |
| 요청 메소드 | GET                                                          |

#### 응답

![수정](https://github.com/IDU-SW/202012707KDY/blob/auth/Day12/image/%EB%A1%9C%EA%B7%B8%EC%9D%B8.png?raw=true)

#### 로그인 성공시

![수정](https://github.com/IDU-SW/202012707KDY/blob/auth/Day12/image/%EB%A1%9C%EA%B7%B8%EC%9D%B8%20%EC%84%B1%EA%B3%B5.png?raw=true)

#### 로그아웃

![수정](https://github.com/IDU-SW/202012707KDY/blob/auth/Day12/image/%EB%A1%9C%EA%B7%B8%EC%95%84%EC%9B%83.png?raw=true)