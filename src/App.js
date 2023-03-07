import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

// SPA (Single Page Application)
// JavaScript -> 서버랑 통신
// fetch -> 순수 js , ajax -> jqeury , axios -> 외부 라이브러리
function App() {
  const [data, setData] = useState([]);

  //다운로드 했다고 가정 -> 데이터 강제로
  const download = () => {
    axios({
      method: 'get',
      url: 'https://api.sampleapis.com/coffee/hot',
    }) //서버랑 통신
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      }) //응답받은 데이터를 어떻게 처리할지
      .catch(() => {}) //예상 못한 에러가 발생했을 때 어떻게 처리할지
      .finally(() => {}); //통시닝 성공하든 실패하든 동작하는 코드
  };

  useEffect(() => {
    download();
  }, []);
  return (
    <div>
      {data.map((d) => (
        <div>
          <h1>{d.title}</h1>
          <img src={d.image} />
        </div>
      ))}
    </div>
  );
}

export default App;