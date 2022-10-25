import { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../assets/78790-hello.json';
import { Link } from 'react-router-dom';
import FileSaver from 'file-saver';
import { blob } from 'stream/consumers';
import { saveAs } from 'file-saver';

interface IHeight {
  height: number;
}

const LogoDIv = styled.div`
  height: ${(props: IHeight) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  min-height: 90vh;
`;

function Hello() {
  // const navigate = useNavigate();

  // const timeout = () => {
  //   setTimeout(() => {
  //     navigate('/Main');
  //   }, 6100);
  // };

  // useEffect(() => {
  //   timeout();
  //   return () => {
  //     timeout();
  //   };
  // }, []);

  // const newUrl = new Blob(['https://nftmetadata2022.s3.ap-northeast-2.amazonaws.com/images/1.png']);
  // console.log(newUrl);

  const downloadNFT = () => {
    const url = 'https://nftmetadata2022.s3.ap-northeast-2.amazonaws.com/images/1.png';
    fetch(url, { method: 'GET' })
      .then(res => {
        return res.blob();
      })
      .then(blob => {
        saveAs(blob, 'myNFT');
        // setOpen(false);
      })
      .catch(err => {
        console.error('error : ', err);
      });
  };

  return (
    <LogoDIv height={window.innerHeight}>
      {/* <Lottie animationData={animationData}></Lottie> */}
      <img style={{ width: '200px' }} src="https://nftmetadata2022.s3.ap-northeast-2.amazonaws.com/images/1.png"></img>
      <button onClick={() => downloadNFT()}>이미지 다운로드 받기</button>

      {/* <button>
        <Link to="/start">눌러봐</Link>
      </button> */}
    </LogoDIv>
  );
}

export default Hello;
