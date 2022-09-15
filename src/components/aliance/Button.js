import React from "react";
import styled from "styled-components";
import data from "data/afl_list.json";

const StyledCircle = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 110px;
  border: none;
  border-radius: 50%;
  color: #000000;
  margin-left: 50px;
  cursor: pointer;
  :hover {
    background: ${(props) => props.theme.red};
  }
`;

// Icon CSS
const Icon = styled.img`
  width: 72px;
  height: 72px;
`;

function Button() {
  return (
    <>
      {data.afl.map((item) => (
        <>
          <StyledCircle>
            <Icon src={item.content}></Icon>
            <div>{item.name}</div>
          </StyledCircle>
          
        </>
      ))}
    </>
  );
}

export default Button;
