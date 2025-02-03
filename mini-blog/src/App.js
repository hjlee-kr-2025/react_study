import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
//Page
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}
// <Route index element={<MainPage />} /> => index는 '/'(Home)을 의미합니다. MainPage 컴포넌트를 랜더링합니다. 
// <Route path='post-write' element={<PostWritePage />} /> 
// => '/post-write' 주소로 이동할때 PostWritePage 컴포넌트가 랜더링됩니다.
// <Route path='post/:postId' element={<PostViewPage />} />
// => 'post/글번호' 주소로 이동할때 PostViewPage 컴포넌트가 랜더링됩니다.
// :을 사용하면 동적인 주소를 줄 수 있습니다.

export default App;
