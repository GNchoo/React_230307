import React from 'react';
import styled from 'styled-components';

const LoginArea = styled.div`
  height: 500px;
`;

const Login = () => {
  return (
    <LoginArea>
      <input placeholder="아이디를 입력하세요" />
      <input placeholder="비밀번호를 입력하세요" />
    </LoginArea>
  );
};

export default Login;
