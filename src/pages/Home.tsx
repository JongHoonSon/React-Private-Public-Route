import React from "react";
import styled from "styled-components";

export const Home = (): React.ReactElement => {
  return <RedBox>Home</RedBox>;
};

const RedBox = styled.div`
  width: 500px;
  height: 500px;

  background-color: red;

  color: white;
  font-size: 30px;
  font-weight: 600;
`;
