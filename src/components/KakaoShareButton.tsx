import React from 'react';
import { Button } from 'react-bootstrap';
import { IResult } from '../stores/Result/types';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Kakao = (window as any).Kakao;

interface Props {
  data: IResult;
}

export default function KakaoShareButton(props: Props) {
  // console.log('props', props);
  const url = 'https://mbtiprac-ts.netlify.app/';
  const resultUrl = window.location.href;

  React.useEffect(() => {
    if (!Kakao.isInitialized) {
      Kakao.init('f15c714b71fa9968b01019411f4c6d0c');
    }
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '😻 예비집사 판별기 결과',
        description: `예비 집사님이 고양이를 키운다면 가장 잘 맞는 고양이는 ${props.data.name}입니다.`,
        imageUrl: url + props.data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: '테스트 하러 이동',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <Button onClick={shareKakao} className="btn-warning" style={{ width: 170, marginTop: 20, marginRight: 40 }}>
      공유하기
    </Button>
  );
}
