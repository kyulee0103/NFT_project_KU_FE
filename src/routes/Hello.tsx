import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../assets/78790-hello.json';
import { Link } from 'react-router-dom';
import FileSaver from 'file-saver';
import { blob } from 'stream/consumers';
import { saveAs } from 'file-saver';
import moving from '../assets/move.gif';
import domtoimage from 'dom-to-image';

interface IHeight {
  height: number;
}

const LogoDIv = styled.div`
  height: ${(props: IHeight) => props.height};
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  min-height: 90vh;
`;

function Hello() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     navigate('/Main');
  //   }, 6000);
  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, []);

  // const newUrl = new Blob(['https://nftmetadata2022.s3.ap-northeast-2.amazonaws.com/images/1.png']);
  // console.log(newUrl);

  // const downloadNFT = () => {
  //   const url = 'https://nftmetadata2022.s3.ap-northeast-2.amazonaws.com/images/1.png';
  //   fetch(url, {
  //     mode: 'no-cors',
  //     method: 'GET',
  //     headers: {
  //       Origin: 'https://bummy-suri.com',
  //     },
  //   })
  //     .then(res => {
  //       return res.blob();
  //     })
  //     .then(blob => {
  //       saveAs(blob, 'myNFT');
  //       // setOpen(false);
  //     })
  //     .catch(err => {
  //       console.error('error : ', err);
  //     });
  // };

  // const cardRef = useRef<HTMLImageElement>(null);
  // const onDownloadBtn = () => {
  //   const card = cardRef?.current;
  //   if (!card) {
  //     return;
  //   }
  //   domtoimage.toBlob(card).then(blob => {
  //     saveAs(blob, 'card.png');
  //   });
  // };

  return (
    <LogoDIv height={window.innerHeight}>
      <p style={{ marginBottom: '20px', color: 'white', fontWeight: 600, fontSize: '25px' }}>
        🐯 사이트 점검 중이에요 🦅
      </p>
      <p style={{ marginBottom: '40px', color: 'white', fontWeight: 500, fontSize: '20px' }}>
        내일 아침에 다시 만나요 !
      </p>
      <img src={moving} style={{ width: '290px', height: '230px' }} />
      <p style={{ marginTop: '60px', color: 'white', fontWeight: 400, fontSize: '16px' }}>
        여러분 덕분에 3000마리의 버미와 수리가
      </p>
      <p style={{ marginTop: '10px', color: 'white', fontWeight: 400, fontSize: '16px' }}>
        모두 학우분들과 만날 수 있었어요 🫶
      </p>

      {/* <img
        className="card"
        ref={cardRef}
        style={{ width: '200px' }}
        src="https://nftmetadata2022.s3.ap-northeast-2.amazonaws.com/images/1.png"></img>
      <button onClick={() => onDownloadBtn()}>이미지 다운로드 받기</button>/ */}
    </LogoDIv>
  );
}

export default Hello;
