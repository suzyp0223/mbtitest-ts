import React from 'react';
import styled from 'styled-components';
import { Button, Image } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ResultData } from '../stores/Result/ResultData';
import BabyDogImg from '../assets/babyDog.jpg';
import Header from '../components/Header';

export default function ResultPage(): React.ReactElement {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti');

  const findName = ResultData.find((data) => data.mbti === mbti);

  return (
    <>
      <Wrapper>
        <Header type="title" questionNo={0} />
        <ContentsWrapper>
          <Title>결과 보기</Title>
          <ResultImage>
            <Image className="rounded-circle" src={BabyDogImg} width={350} height={350} />
          </ResultImage>
          <Desc>
            예비집사님과 찰떡궁합인 고양이는 {findName?.mbti}형 고양이 {findName?.name}입니다.
          </Desc>
        </ContentsWrapper>
      </Wrapper>
    </>
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
  padding: 20px 20px 20px 20px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 20pt;
`;

const ResultImage = styled.div`
  width: 200;
  height: 200;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 10pt;
`;
