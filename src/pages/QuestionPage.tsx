import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import { QuestionData } from '../stores/Questions/QuestionData';
import Header from '../components/Header';

export default function QuestionPage(): React.ReactElement {
  return (
    <Wrapper>
      <Header type="progress" />
      <ContentsWrapper>
        <Title>{QuestionData[0].title}</Title>
        <ButtonGroup>
          <Button>{QuestionData[0].answera}</Button>
        </ButtonGroup>
        <Title>{QuestionData[0].title}</Title>
        <Button>{QuestionData[0].answerb}</Button>
      </ContentsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #fffacd;
  font-family: 'Jalnan';
`;

const ContentsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 10pt;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
