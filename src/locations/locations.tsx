import styled from "styled-components";

interface ILocation {
  name: string,
  county: string
}

export const Locations = () => {
  return (
    <Wrapper>
      <Header>Locations where we buy properties</Header>
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
