import React from 'react';
import styled from 'styled-components';

export default function MainPage(): React.ReactElement {
  return (
    <>
      <Wrapper>
        <Header>헤더입니다</Header>
        <Title>나에게 맞는 주인님은?</Title>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: blue;
`;

const Header = styled.div`
  background: orange;
`;
const Title = styled.div`
  background: white;
`;
