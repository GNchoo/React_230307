import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

// prop passing

const MainPage = () => {
  // 서버에서 데이터를 받아온다고 가정
  const [board, setBoard] = useState([]);

  useEffect(() => {
    let data = [
      { id: 1, title: '제목', content: '내용' },
      { id: 2, title: '제목', content: '내용' },
      { id: 3, title: '제목', content: '내용' },
    ];
    // board -> 최초엔 빈데이터, setBoard -> board(상태) 변경
    // useEffect가 한번 더 동작
    setBoard(data);
  }, []);

  return (
    <div>
      <Header />
      <Main board={board} id={1} setBoard={setBoard} />
      <Footer />
    </div>
  );
};

export default MainPage;
