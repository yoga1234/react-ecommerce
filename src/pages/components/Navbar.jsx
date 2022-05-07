import React from "react";
import styledComponents from "styled-components";

const Container = styledComponents.div`
  height: 60px;
`;

const Wrapper = styledComponents.div`
  padding: 10px 20px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>Navbar</Wrapper>
    </Container>
  );
};

export default Navbar;
