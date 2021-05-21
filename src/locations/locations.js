import styled from "styled-components";

import { locationsList } from "./data/location.data";

function Locations() {
  return (
    <Wrapper>
      <Header>Locations</Header>
      {/* add your locations here */}
    </Wrapper>
  );
}

export default Locations;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Header = styled.h1`
  align-self: center;
`;
