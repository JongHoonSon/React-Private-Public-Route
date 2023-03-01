import React from "react";
import styled from "styled-components";

export const MyPage = (): React.ReactElement => {
  return <BlueBox>MyPage</BlueBox>;
};

const BlueBox = styled.div`
  width: 500px;
  height: 500px;

  background-color: blue;

  color: white;
  font-size: 30px;
  font-weight: 600;
`;
