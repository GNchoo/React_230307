import React from 'react';
import styled from 'styled-components';

const HeaderList = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Header = () => {
  return (
    <div>
      <HeaderList>
        <ul>
          <li>메뉴 1</li>
          <li>메뉴 2</li>
          <li>메뉴 3</li>
        </ul>
      </HeaderList>
    </div>
  );
};

export default Header;
