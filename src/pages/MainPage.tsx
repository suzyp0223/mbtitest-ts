import React from 'react';
import styled from 'styled-components';
import { Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import BabyDogImg from '../assets/babyDog.jpg';
import Header from '../components/Header';

export default function MainPage(): React.ReactElement {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/question');
  };

  return (
    <>
      <Wrapper>
        <ContentsWrapper>
          <Header type="title" questionNo={0} />
          <Title>나에게 맞는 주인님은?</Title>
          <LogoImage>
            <Image className="rounded-circle" src={BabyDogImg} width={300} height={300} />
          </LogoImage>
          <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기!</Desc>
          <Desc>내가 집사가 되서 고양이를 키운다면..?</Desc>
          <Button
            className="btn-danger"
            onClick={handleClickButton}
            style={{ fontSize: 15, marginTop: 20, marginBottom: 20 }}>
            테스트 시작하기
          </Button>
        </ContentsWrapper>
        <div className="kakao_ad_area" />
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
`;
const Title = styled.div`
  margin-top: 20px;
  font-size: 10pt;
`;
const LogoImage = styled.div`
  width: 200;
  height: 200;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 10pt;
`;
