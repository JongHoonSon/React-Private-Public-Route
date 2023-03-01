import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const MyPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // check user logged in
    const isUserLoggedIn = false;

    if (!isUserLoggedIn) {
      navigate("/");
    }
  }, []);

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
