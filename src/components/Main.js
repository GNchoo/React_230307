import React from 'react';
import styled from 'styled-components';
//styled-component + prop passing
const StyledButton = styled.button`
  color: ${(prop) => (prop.id === 2 ? 'blue' : 'red')};
`;

const DeleteButton = styled(StyledButton)``;

//스타일 상속
const AddButton = styled(StyledButton)`
  background-color: black;
`;

const Main = (props) => {
  console.log(props.board);
  // const board = props.board;
  // const id = props.id;

  //구조분할 할당 (Destructuring Assignment)
  const { board, id, setBoard } = props;

  return (
    <div>
      {board.map((b) => (
        <h1>
          {b.title},{b.content}
        </h1>
      ))}
      {id}
      <DeleteButton id={id} onClick={() => setBoard([])}>
        삭제
      </DeleteButton>
      <AddButton id={id}>추가</AddButton>
    </div>
  );
};

export default Main;
