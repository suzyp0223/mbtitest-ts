import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { createSearchParams, useNavigate } from 'react-router-dom';

import { QuestionData } from '../stores/Questions/QuestionData';
import Header from '../components/Header';

export default function QuestionPage(): React.ReactElement {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    { id: 'EI', score: 0 },
    { id: 'SN', score: 0 },
    { id: 'TF', score: 0 },
    { id: 'JP', score: 0 },
  ]);

  const navigate = useNavigate();

  const handleClickAnswer = (ans: number, type: string) => {
    // mbti 로직 버전3
    const newScore = totalScore.map((s) => (s.id === type ? { id: s.id, score: s.score + ans } : s));

    setTotalScore(newScore);
    // 마지막 문제가 아닐 경우
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
      // 마지막 문제일 경우
    } else {
      const mbti = newScore.reduce(
        (acc, cur) => acc + (cur.score >= 2 ? cur.id.substring(0, 1) : cur.id.substring(1, 2)),
        ''
      );

      // console.log({ mbti });

      navigate({
        pathname: '/result',
        search: `?${createSearchParams({
          mbti: mbti,
        })} `,
      });
    }
  };

  //  // mbti 로직 버전 2.
  //     if (type === 'EI') {
  //       // 기존 스코어에 더한 새로운 스코어 값
  //       const addScore = totalScore[0].score + ans;
  //       // 새로운 스코어를 반영한 새로운 객체
  //       const object = { id: 'EI', score: addScore };
  //       // 새로운 객체를 기존에 토탈 스코어 반영
  //       totalScore.splice(0, 1, object);
  //     } else if (type === 'SN') {
  //       const addScore = totalScore[0].score + ans;
  //       const object = { id: 'SN', score: addScore };
  //       totalScore.splice(0, 1, object);
  //     } else if (type === 'TF') {
  //       const addScore = totalScore[0].score + ans;
  //       const object = { id: 'TF', score: addScore };
  //       totalScore.splice(0, 1, object);
  //     } else {
  //       const addScore = totalScore[0].score + ans;
  //       const object = { id: 'JP', score: addScore };
  //       totalScore.splice(0, 1, object);
  //     }
  //   };

  // mbti 로직 버전 1.
  // const handleClickAnswerA = (ans: string, type: string) => {
  //   setQuestionNo(questionNo + 1);

  //   if (no + 1 === QuestionData.length) {
  //     navigate('/result');
  //   }
  // };

  return (
    <Wrapper>
      <Header type="progress" questionNo={questionNo} />
      <ContentsWrapper>
        <Title>{QuestionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            className="btn-warning"
            style={{ marginRight: '20px', width: '45%', minHeight: '200px', fontSize: '15pt' }}
            onClick={() => handleClickAnswer(1, QuestionData[questionNo].type)}>
            {QuestionData[questionNo].answera}
          </Button>
        </ButtonGroup>
        <Title>{QuestionData[0].title}</Title>
        <Button
          className="btn-warning"
          style={{ marginRight: '20px', width: '45%', minHeight: '200px', fontSize: '15pt' }}
          onClick={() => handleClickAnswer(0, QuestionData[questionNo].type)}>
          {QuestionData[questionNo].answerb}
        </Button>
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
  padding: 20px 20px 20px 20px;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 25pt;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  button {
    font-size: 18pt;
  }
`;
