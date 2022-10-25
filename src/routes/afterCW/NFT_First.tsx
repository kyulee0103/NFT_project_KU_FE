import styled, { keyframes } from 'styled-components';
import ColoredTitle from '../../assets/nft_game/secondTitle.png';
import UnderImg from '../../assets/nft_game/under.svg';
import BlurImg from '../../assets/nft_game/blur.png';
import Title from '../../assets/firstTitle.png';
import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { Link, Navigate, useLoaderData, useNavigate } from 'react-router-dom';

interface ITotal {
  height?: number;
}

const Total = styled.div`
  background-color: #0e0e0e;
  z-index: 10;
  height: ${(props: ITotal) => props.height}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 90vh;
  position: relative;
  overflow: hidden;
  transition: all 1s ease;
`;

const Top = styled.div`
  margin: 110px auto;
  text-align: center;
  z-index: 200;
  img {
    width: 75%;
    z-index: 200;
  }
`;
const imgMoving = keyframes`
  0% {
    opacity: 1;
    z-index: 10;
    top: 45vh;
}
 
  100% {
    opacity: 1;
    top: 10vh;
  }
`;

const Bottom = styled.div`
  img {
    width: 120%;
  }
  position: absolute;
  z-index: 10;
  top: 10vh;
  left: -20vw;
  animation: ${imgMoving} 0.4s linear;
`;

const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* background-color: #ff000056; */
  position: absolute;
  top: 30vh;
  z-index: 100;
  height: 35vh;
  padding-left: 12vw;
  padding-right: 12vw;
`;

const btn = keyframes`
0% {
    opacity: 0.8;
    width: 95%;
}
100% {
    width: 85%;
    opacity:  1 ;
}
`;

const boxmoving = keyframes`
 0% {
    opacity: 0.8;
    height: 230px;
    font-size: 19px;

}
100% {
    height: 174px;
    font-size: 16px;
    opacity:  1 ;
}
`;

const Box = styled.div`
  border-radius: 13px;
  height: 174px;
  background-color: rgba(250, 250, 250, 0.24);
  backdrop-filter: blur(10px);
  width: 100%;
  padding: 17px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  animation: ${boxmoving} 0.4s;
`;

const BtnBox = styled.div`
  text-align: center;
  margin: 30px auto;
  width: 85%;
  button {
    color: black;
    border: 0px solid;
    width: 100%;
    height: 43px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 21px;
    box-shadow: 0px 0px 20px 10px rgba(125, 125, 125, 0.39);
    animation: ${btn} 0.4s;
  }
`;
const Right = styled.div``;
const Line1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 5px;
  padding-bottom: 20px;
`;

const line2moving = keyframes`
    0%{
      padding-right: 30px;

    }
    100%{
        padding-right: 5px;
    }
`;

const Span = styled.span`
  animation: ${line2moving} 0.4s;
  animation-timing-function: ease;
  padding-right: 5px;
`;
const Line2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`;

const BlurBox = styled.div`
  img {
    width: 400px;
    height: 430px;
    opacity: 0.4;
  }
  z-index: 50;
  width: 100vw;
  position: absolute;
  top: 140px;
`;

function NFT_First() {
  // animation 용 state
  const [after, setAfter] = useState<boolean>(false);

  // 페이지 접근시 필요
  const requestKey = localStorage.getItem('BUMISURI_NFT');
  const [ready, setReady] = useState<boolean>(false);
  const [mintNum, setMintNum] = useState<{ korea: number; yonsei: number }>({ korea: 0, yonsei: 0 });
  const walletAdress = useRef<string>('');

  const navigate = useNavigate();

  // animation 용 useEffect
  useEffect(() => {
    setTimeout(() => {
      setAfter(prev => !prev);
    }, 200);
  }, []);

  useEffect(() => {
    // 초기 셋팅
    async function loadInitialMintNumber() {
      if (ready) {
        return;
      }

      // 민팅 데이터 셋팅
      const { data: mintNumberData } = await axios.get('https://angry-dongmin.com/counts');
      const { korea: koreaMintNumber, yonsei: yonseiMintNumber } = mintNumberData;
      setMintNum({ korea: Number(koreaMintNumber), yonsei: Number(yonseiMintNumber) });

      // 지갑 주소셋팅
      try {
        if (requestKey) {
          const { data: kilpwalletData } = await axios.get(
            `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${requestKey}`
          );

          if (kilpwalletData?.result) {
            const { klaytn_address: userWalletAddress } = kilpwalletData.result;
            walletAdress.current = userWalletAddress;
          }
        }
      } catch (error) {
        // ignore get wallet addresss error
        console.error(error);
      }

      setReady(true);
    }
    loadInitialMintNumber();
  }, []);

  const handleJoinClip = useCallback(async () => {
    if (!walletAdress.current) {
      alert('카카오 클립 지갑 주소를 가지고 오지 못했어요.');
      return;
    }

    const address = walletAdress.current;
    const { data: checkMintResult } = await axios.post('https://angry-dongmin.com/isMinted', address);

    const isMinted = checkMintResult?.isMinted || false;

    if (!isMinted) {
      alert(`checkMintResult ${JSON.stringify(checkMintResult)} address ${address}`);
      navigate('/whoyou', {
        state: {
          myAddress: address,
        },
      });
      return;
    }
    navigate('/myNFT', {
      state: {
        myNFTData: checkMintResult,
      },
    });
  }, []);

  return (
    <Total height={window.innerHeight}>
      <Top>{after ? <img src={ColoredTitle}></img> : <img src={Title}></img>}</Top>
      <Middle>
        <Box>
          <Line1>
            <p style={{ color: '#FAFAFA', opacity: 0.5 }}>현재 민팅 점수</p>
            <p style={{ color: '#FAFAFA', fontWeight: 600, fontSize: '36px' }}>{mintNum.korea + mintNum.yonsei} 점</p>
          </Line1>
          <Line2>
            <p style={{ color: '#FAFAFA', fontWeight: 600, fontSize: '16px' }}>고려대</p>
            <Right>
              <Span style={{ color: '#FAFAFA', fontWeight: 600, fontSize: '24px' }}>
                {ready ? mintNum.korea : '??'}
              </Span>
              <span style={{ color: '#FAFAFA', fontWeight: 600, fontSize: '24px' }}> / </span>
              <span style={{ color: '#FAFAFA', fontWeight: 500, fontSize: '24px', opacity: 0.56 }}>1500</span>
            </Right>
          </Line2>
          <Line2>
            <p style={{ color: '#FAFAFA', fontWeight: 600, fontSize: '16px' }}>연세대</p>
            <Right>
              <Span style={{ color: '#FAFAFA', fontWeight: 600, fontSize: '24px' }}>
                {ready ? mintNum.yonsei : '??'}
              </Span>
              <span style={{ color: '#FAFAFA', fontWeight: 600, fontSize: '24px' }}> / </span>
              <span style={{ color: '#FAFAFA', fontWeight: 500, fontSize: '24px', opacity: 0.56 }}>1500</span>
            </Right>
          </Line2>
        </Box>
        <BtnBox>
          {ready && <button onClick={handleJoinClip}>참여하기</button>}
          {/* <Link to={'/whoyou'} state={{ myAddress: address }}> */}

          {/* </Link> */}
        </BtnBox>
      </Middle>
      <div>
        <BlurBox>
          <img src={BlurImg} />
        </BlurBox>
      </div>

      <Bottom>
        <img src={UnderImg} />
      </Bottom>
    </Total>
  );
}

export default NFT_First;
