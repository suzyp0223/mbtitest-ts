import React from 'react';
import styled from 'styled-components';
import { ProgressBar } from 'react-bootstrap';
import { QuestionData } from '../stores/Questions/QuestionData';

interface Props {
  type: string;
  questionNo: number;
}
export default function Header(props: Props) {
  const progressRate = Math.round((props.questionNo / QuestionData.length) * 100);

  return (
    <>
      {props.type === 'progress' ? (
        <ProgressWrapper>
          <ProgressBar now={progressRate} label={`${progressRate}%`} style={{ width: '100%', height: '30px' }} />
        </ProgressWrapper>
      ) : (
        <TitleWrapper>😻예비집사 판별기</TitleWrapper>
      )}
    </>
  );
}

const ProgressWrapper = styled.div`
  font-size: 40pt;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: 'Jalnan';
  padding: 20px 20px 20px 20px;
`;
const TitleWrapper = styled.div`
  background: #ffa07a;
  font-size: 40pt;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: 'Jalnan';
  padding: 20px 20px 20px 20px;
`;
