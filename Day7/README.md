202012707 김다영
===
DAY7. 프론트엔드를 추가한 웹 서비스 작성하기
===

#### 6주차에 작성한 JSON 기반의 서비스에 프론트엔드를 추가해서 웹 브라우저로 사용할 수 있도록 작성하시오.

##### - github Organizations(IDU-SW/2020-1)에 만든 본인의 Repositories에 작성

##### - 기존 내용에 추가로 작성 가능

##### - 인증샷 3개 올리기

##### - SmartClasss에 올리기

--------------

### ✨다운로드 목록✨
##### - npm init

##### - npm i express

##### - npm i pug

##### - npm i method-override

### 🎈CONTENT🎈

| 업무 구분 |        항목        |       URL       | METHOD |
| :-------: | :----------------: | :-------------: | :----: |
|   목록    | 음악 목록 전체보기 |     /musics     |  GET   |
|   CRUD    | 음악 정보 상세보기 |   /musics/ID    |  GET   |
|           | 음악 정보 추가 폼  |   /music/add    |  GET   |
|           |   음악 정보 추가   |     /musics     |  POST  |
|           |   음악 정보 삭제   |   /musics/ID    | DELETE |
|           | 음악 정보 수정 폼  | /musics/edit/ID |  GET   |
|           |   음악 정보 수정   |   /musics/ID    |  PUT   |