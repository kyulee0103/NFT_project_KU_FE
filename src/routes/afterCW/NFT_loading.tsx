import Present from '../../assets/nft_game/present.gif';
import styled from 'styled-components';
import LinearColor from '../../components/Line';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ImgBox = styled.div`
  width: 100%;
  overflow: hidden;
  text-align: center;

  img {
    width: 60vw;
    margin-top: 20vh;
    margin-bottom: 10vh;
  }
`;

const Bottom = styled.div`
  margin: 0 auto;
  width: 80%;
  text-align: center;
  color: white;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 18px;
`;
const Detail = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 6px;
`;

const LineBox = styled.div`
  width: 70%;
  margin: 7vh auto;
`;

interface RouteState {
  myNFTData: any;
}

function NFT_loading() {
  const navigate = useNavigate();
  const location = useLocation();
  const { myNFTData } = location?.state as RouteState;

  const timeout = () => {
    setTimeout(() => {
      navigate('/myNFT', {
        state: {
          myNFTData: myNFTData,
        },
      });
    }, 5500);
  };

  useEffect(() => {
    timeout();
    return () => {
      timeout();
    };
  }, []);
  return (
    <>
      <ImgBox>
        <img src={Present} />
      </ImgBox>
      <Bottom>
        <Title>흥미로운 사실</Title>
        <Detail>버미는 종종 고려대학교 중앙광장에서</Detail>
        <Detail>햇볕을 쬐는 모습이 목격했다.</Detail>
      </Bottom>
      <LineBox>
        <LinearColor />
      </LineBox>
    </>
  );
}
export default NFT_loading;
