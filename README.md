# 원티드 프리온보딩 프론트엔드 사전과제

### 지원자 소개

- 지원자의 성명 : 이병재
- 프로젝트 실행 방법 : glt clone - npm - npm start
- 소감 : 공고를 너무 늦게봐  최대한 만들어봤습니다
- 데모영상: https://github.com/ByungJae-Lee/wanted-pre-onboarding-frontend/assets/104547210/69279f75-f807-4cdd-9215-e022fadad842



### 사용한 라이브러리

- React Router, axios

## 과제 1번. 로그인/회원가입

### Assignment 1

- [x] 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
  - 이메일 조건: @ 포함
  - 비밀번호 조건: 8자 이상
- [x] 유효성 검사를 통과하지 못한다면 button에 disabled 속성을 부여해주세요

### Assignment 2

- [x] 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동해주세요

### Assignment 3

- [x] 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동해주세요
  - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - 응답받은 JWT는 로컬 스토리지에 저장해주세요

### Assignment 4

- [x] 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
  - 로컬 스토리지에 토큰이 있는 상태로 /signin 또는 /signup 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요
  - 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 /signin 경로로 리다이렉트 시켜주세요

## 과제 2번. TODO LIST

### Assignment 5

- [x] /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- [x] 목록에서는 TODO의 내용과 완료 여부가 표시되어야 합니다.
- [x] TODO의 완료 여부는 input type="checkbox" tag를 통해 표현해주세요
- [x] TODO는 li tag를 이용해 감싸주세요

### Assignment 6

- [x] 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
  - TODO 입력 input에는 data-testid="new-todo-input" 속성을 부여해주세요
  - TODO 추가 button에는 data-testid="new-todo-add-button" 속성을 부여해주세요
- [x] 추가 button을 클릭하면 입력 input의 내용이 새로운 TODO로 추가되도록 해주세요
- [x] TODO를 추가 한 뒤 새로고침을 해도 추가한 TODO가 목록에 보여야 합니다.

### Assignment 7

- [x] TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.

### Assignment 8

- [x] TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요
  - 수정 버튼에는 data-testid="modify-button" 속성을 부여해주세요
  - 삭제 버튼에는 data-testid="delete-button" 속성을 부여해주세요

### Assignment 9

- [x] 투두 리스트의 삭제 기능을 구현해주세요
  - 투두 리스트의 TODO 우측의 삭제버튼을 누르면 해당 아이템이 삭제되도록 해주세요

### Assignment 10

- 투두 리스트의 수정 기능을 구현해주세요
  - [x] 수정 버튼을 누르면 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요
    - 수정 input창에는 data-testid="modify-input" 속성을 부여해주세요
  - [x] 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요
    - 제출버튼에는 data-testid="submit-button" 속성을 부여해주세요
    - 취소버튼에는 data-testid="cancel-button" 속성을 부여해주세요
  - [x] 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요
  - [x] 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요
