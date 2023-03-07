import React from 'react';

function a() {
  return;
}

let b = 2;

const Sub = () => {
  return (
    <div>
      Sub 컴포넌트
      {console.log('Sub컴포넌트 렌더링')}
    </div>
  );
};

export { a, b };
export default Sub;
