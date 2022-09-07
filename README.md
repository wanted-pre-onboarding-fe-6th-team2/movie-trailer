# 원티드 프리온보딩 6차 2차 과제

> ## 2팀 소개

<table>
    <tr>
        <td height="50px" align="center"> <a href="https://github.com/"> 김주탁 </a> <br></td>
        <td height="50px" align="center"> <a href="https://github.com/"> 류하준 </a> <br></td>
        <td height="50px" align="center"> <a href="https://github.com/"> 변지윤 </a> <br></td>
        <td height="50px" align="center"> <a href="https://github.com/"> 윤영주 </a> <br></td>
        <td height="50px" align="center"> <a href="https://github.com/"> 이형민 </a> <br></td>
        <td height="50px" align="center"> <a href="https://github.com/"> 조남경 </a> <br></td>
        <td height="50px" align="center"> <a href="https://github.com/"> 강주희 </a> <br></td>
        <td height="50px" align="center"> <a href="https://github.com/"> 하성화 </a> <br></td>
    </tr>
<tr>
        <td align="center">홈페이지 구현</td>
        <td align="center">API 로직 및 서버 상태 관리</td>
        <td align="center">API 카테고리 별 리스트 페이지</td>
        <td align="center">영화 상세 페이지</td>
        <td align="center">영화 검색 페이지</td>
        <td align="center">공통 컴포넌트 구현</td>
        <td align="center">API 카테고리 별 리스트 페이지</td>
        <td align="center">공통 컴포넌트 구현</td>
    </tr>
</table>

> ## 데모

> ## 실행 방법

```

```

> ## 목차

- [과제 내용](#과제-내용)
- [캐싱이란?](#캐싱이란?)
- [폴더 구조](#폴더-구조)
- [과제 요구사항 및 해결 방법](#과제-요구사항-및-해결-방법)
- [기술 스택](#기술-스택)

> ## 과제 내용

원티드 프리온보딩 프론트엔드 기업협업과제

- ### 주제
  - 영화 트레일러 사이트 만들기
- ### 기간
  - 2022년 9월 6일 ~ 9월 8일
- ### 페이지 구성

  1. home page
  2. now playing page
  3. upcoming page
  4. top-rated page
  5. 영화 상세 페이지
  6. 검색 페이지

> ## 캐싱이란?

> ## 폴더 구조

```
├── components
│ ├── myPage
│ │ ├── OrderListForm
│ │ │  ├── OrderListForm.jsx
│ │ │  └── OrderListForm.styled.js
│ ├── common
│ │ ├── PageContainer
│ │ │ ├── PageContainer.jsx
│ │ │ └── PageContainer.styled.js
│ │ ├── Header
│ │ │ ├── Header.jsx
│ │ │ └── Header.styled.js
├── pages
│ ├── Home
│ │ └── Home.jsx
| ├── Order
│ │ ├── Order.jsx
│ │ └── Order.styled.js
├── styles
│ └── reset.js
```

> ## 과제 요구사항 및 해결 방법
>
> **공통/Loading, Infinite Scroll**  

    - Loading 상태 표기     
    - Infinite scroll       
    - 스크롤 감지하여 ScrollUp button 표시되도록, 누를 시 최상단으로 스크롤 이동      
    - API Response 데이터 캐쉬 (라이브러리 사용)  
  
**해결방법**  

**공통/API Response 데이터 캐쉬**   
  - API Response 데이터 캐쉬 (라이브러리 사용)  
**해결방법**    

**movies / 리스트 페이지**  
    - 한번에 가져올 데이터 최대 20      
    - 제목, 포스터, 별점 표시       
    - 포스터 없는 경우, 대체 이미지 사용        
**해결방법**        

**movie / 상세 페이지**     
     - 비디오 있는 경우, 페이지 진입 시 자동으로 비디오 플레이  
     - 제목, 포스터, 별점, 제작 연도, 장르 데이터 활용해서 UI 표기      
     - 그 외의 데이터 추가 활용 여부는 자유     
**해결방법**        

**_search_**    
    - 제목, 포스터, 별점    
    - 포스터 없는 경우, 대체 이미지 사용        
**해결방법**        

> ## 기술 스택

- JavaScript
- React
- emotion (CSS-in-JS)
- SWR
  - 러닝 커브가 상대적으로 낮으며, 구현하는 앱의 크기가 크지 않아 React-query보다 상대적으로 가벼운 SWR을 캐싱 처리에 도입하도록 하였습니다.
