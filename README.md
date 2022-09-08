# 원티드 프리온보딩 6차 2차 과제

> ## 2팀 소개

<table>
    <tr>
        <td height="50px" align="center"> <a href="https://github.com/nknkcho"> 조남경(팀장) </a> <br></td>
        <td height="50px" align="center"> <a href="https://github.com/HaJunRyu"> 류하준 </a> <br></td>
        <td height="50px" align="center"> <a href="https://github.com/
wldbszpflrxj"> 변지윤 </a> <br></td>
        <td height="50px" align="center"> <a href="https://github.com/yeongjuyun"> 윤영주 </a> <br></td>
        <td height="50px" align="center"> <a href="https://github.com/
hyoungqu23"> 이형민 </a> <br></td>
        <td height="50px" align="center"> <a href="https://github.com/Taak-e"> 김주탁 </a> <br></td>
        <td height="50px" align="center"> <a href="https://github.com/joohe71"> 강주희 </a> <br></td>
        <td height="50px" align="center"> <a href="https://github.com/hasunghwa"> 하성화 </a> <br></td>
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

- 캐싱
  - 캐시란 컴퓨터 과학에서 데이터나 값을 미리 복사해 놓는 임시 저장 장소를 가리키며, 캐싱은 캐시 작업을 하는 행위를 말합니다.
  - 캐시의 접근 시간에 비해 원래 데이터를 접근하는 시간이 오래 걸리는 경우나 값을 다시 계산하는 시간을 절약하고 싶은 경우 사용합니다.
- 캐싱의 장점
  - 캐시에 데이터를 미리 복사해두면 계산이나 접근 시간 없이 더 빠른 속도로 데이터에 접근할 수 있습니다.
- 캐싱의 단점
  - 웹사이트에서 만료되지 않은 캐시 때문에 업데이트 된 파일을 새로 받아오지 않아 웹 사이트의 포맷이 잘못되거나 이미지가 깨지는 등의 이슈가 발생할 수 있습니다.

> ## 폴더 구조

```
│  App.jsx
│  main.jsx
│
├─api
│      core.js
│      movieService.js
│      searchService.js
│
├─assets
│  │  react.svg
│  │
│  └─images
│          facebook.png
│          ic-up.png
│          instagram.png
│          logo.png
│          no-image.jpg
│          twitter.png
├─components
│  ├─common
│  │  ├─Button
│  │  │      CarouselButton.jsx
│  │  │      CarouselButton.styled.js
│  │  ├─Footer
│  │  │      Footer.jsx
│  │  │      Footer.styled.js
│  │  ├─GlobalLayout
│  │  │      GlobalLayout.jsx
│  │  │      GlobalLayout.styled.js
│  │  ├─Header
│  │  │      Header.jsx
│  │  │      Header.styled.js
│  │  ├─Loading
│  │  │      Loading.jsx
│  │  │      Loading.styled.js
│  │  └─ScrollToTop
│  │          ScrollToTop.jsx
│  │          ScrollToTop.styled.js
│  └─MovieListItem
│          MovieListItem.jsx
│          MovieListItem.styled.js
├─constants
│      colors.js
│      route.js
│      swr.js
├─hooks
│  │  useInfiniteScroll.js
│  └─api
│          useMovieDetail.js
│          useMovieSearch.js
│          useMovieVideos.js
│          useNowPlayingMovies.js
│          usePopularMovies.js
│          useTopRatedMovies.js
│          useUpcomingMovies.js
├─pages
│  ├─Home
│  │      Home.jsx
│  ├─MovieDetail
│  │      MovieDetail.jsx
│  ├─NowPlaying
│  │      NowPlaying.jsx
│  │      NowPlaying.styled.js
│  ├─Search
│  │      Search.jsx
│  ├─TopRated
│  │      TopRated.jsx
│  │      TopRated.styled.js
│  └─Upcoming
│          Upcoming.jsx
│          Upcoming.styled.js
├─styles
│      reset.js
└─utils
        swr.js
```

> ## 과제 요구사항 및 해결 방법

#### 공통/Loading, Infinite Scroll

- Loading 상태 표기
- Infinite scroll
- 스크롤 감지하여 ScrollUp button 표시되도록, 누를 시 최상단으로 스크롤 이동

**해결방법**

- 스크롤 이벤트로 무한 스크롤을 구현하면 리플로우에 의해 렌더링 성능이 저하되기 떄문에 이를 막기위해 IntersectionObserver를 활용하여 무한스크롤을 구현하였다.
- 스크롤 이벤트에서 이벤트가 한번에발생하는 것을 막기위해 throttle을 적용하여 ScrollUp button을 구현하였다.

#### 공통/API Response 데이터 캐쉬

- API Response 데이터 캐쉬 (라이브러리 사용)

**해결방법**

#### movies / 리스트 페이지

- [x] 한번에 가져올 데이터 최대 20
- [x] 제목, 포스터, 별점 표시
- [x] 포스터 없는 경우, 대체 이미지 사용

**해결방법**

- api에서 제공하는 page단위를 이용하여 20개씩 노출하였습니다.
- SWR과 axios를 활용하여 데이터를 노출하였고 이미지 여부에 따라 대체 이미지를 사용할 수 있도록 구현하였습니다.

#### movie / 상세 페이지

- 비디오 있는 경우, 페이지 진입 시 자동으로 비디오 플레이
- 제목, 포스터, 별점, 제작 연도, 장르 데이터 활용해서 UI 표기
- 그 외의 데이터 추가 활용 여부는 자유

**해결방법**

#### search

- 제목, 포스터, 별점
- 포스터 없는 경우, 대체 이미지 사용

**해결방법**

> ## 기술 스택

- JavaScript
- React
- emotion (CSS-in-JS)
- SWR
  - 러닝 커브가 상대적으로 낮으며, 구현하는 앱의 크기가 크지 않아 React-query보다 상대적으로 가벼운 SWR을 캐싱 처리에 도입하도록 하였습니다.
