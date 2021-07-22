import React from "react";
import styled from "styled-components";

export const Locations = () => {
  return (
    <Wrapper>
      <Header>Locations</Header>
      {/* add your locations here */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Header = styled.h1`
  align-self: center;
`;
