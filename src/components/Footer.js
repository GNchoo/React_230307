import React from 'react';
import styled from 'styled-components';

const FooterList = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Footer = () => {
  return (
    <div>
      <FooterList>
        <ul>
          <li>전화번호</li>
          <li>주소</li>
          <li>사업자번호</li>
        </ul>
      </FooterList>
    </div>
  );
};

export default Footer;
