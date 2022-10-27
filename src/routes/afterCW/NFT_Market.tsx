import styled from 'styled-components';
import Score from '../../assets/nft_game/score.png';
import First from '../../assets/prize/one.svg';
import Second from '../../assets/prize/second.svg';
import Third from '../../assets/prize/third.svg';
import Fourth from '../../assets/prize/fourth.svg';
import Fifth from '../../assets/prize/fifth.svg';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Top = styled.div`
  color: white;
  margin-top: 5vh;
  position: relative;
  text-align: center;
`;
const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const Left = styled.div`
  position: absolute;
  color: white;
  top: 4vh;
  right: 5vw;
  img {
    width: 97px;
  }
`;

const Point = styled.p`
  font-size: 15px;
  position: absolute;
  top: 12px;
  left: 51px;
`;

const Middle = styled.div`
  width: 100%;
  margin-top: 40px;
  text-align: center;
  color: white;
  margin-bottom: 20px;
  p {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 7px;
  }
`;

const Big = styled.span`
  font-weight: 700;
  font-size: 20px;
`;

const Line = styled.div`
  margin-top: 30px;
`;

const PrizeBox = styled.div`
  width: 85%;
  margin: 30px auto;
`;
const PrizeTop = styled.div`
  position: relative;
  img {
    width: 100%;
  }
`;
const BtnTop = styled.button`
  position: absolute;
  right: 10px;
  width: 55px;
  bottom: 10px;
  height: 25px;
  font-size: 13px;
  border: 0px;
  box-shadow: 0px 0px 5px #dadada7a;
  border-radius: 23px;
  font-weight: 600;
`;

const SecondLine = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

const EachImg = styled.div`
  position: relative;
  width: 47%;
  img {
    width: 100%;
  }
`;

const Btn = styled.button`
  position: absolute;
  right: 10px;
  width: 50px;
  bottom: 7px;
  height: 20px;
  font-size: 11px;
  border: 0px;
  box-shadow: 0px 0px 5px #dadada7a;
  border-radius: 23px;
  font-weight: 600;
`;

const Bottom = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
  width: 100%;
  text-align: center;
  button {
    width: 165px;
    height: 45px;
    border: 0px;
    background-color: #7000ff;
    border-radius: 23.5px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    box-shadow: 0px 0px 20px 5px rgba(125, 125, 125, 0.29);
  }
`;

interface RouteState {
  myNFTData: any;
}

function Market() {
  const location = useLocation();
  const [myPoint, setMyPoint] = useState<number>();
  const [peopleNum, setPeopleNum] = useState<number>();
  const { myNFTData } = location?.state as RouteState;
  useEffect(() => {
    axios({
      url: 'https://angry-dongmin.com/myPoints',
      method: 'post',
      data: {
        userAddr: myNFTData.userAddr,
      },
    }).then(({ data }) => {
      setMyPoint(data.points);
    });
    axios({
      url: 'https://angry-dongmin.com/bettings',
      method: 'get',
    }).then(({ data }) => {
      setPeopleNum(data.bettings);
    });
  }, []);
  function minus(point: number) {
    const productId = 6 - point / 1000;
    alert(`productId : ${productId}`);

    axios({
      url: 'https://angry-dongmin.com/bet',
      method: 'post',
      data: {
        userAddr: myNFTData.userAddr,
        itemCode: productId.toString(),
      },
    }).then(({ data }) => {
      alert('상품에 응모가 되었습니다 🔥');
      if (myPoint != undefined) {
        setMyPoint(data.pointsLeft);
      }
    });
  }

  const onClickPoint = (price: number) => {
    alert(`지금 이거 가격 : ${price}`);
    if (!myPoint) {
      // alert('잠시만 기다려주세요! 포인트 값을 받아오고 있어요 🫶');
      return;
    } else {
      if (myPoint >= price) {
        minus(price);
      } else {
        alert('포인트가 부족해요 🥺');
      }
    }
  };

  return (
    <>
      <Top>
        <Title>경품 응모</Title>
      </Top>
      <Left>
        <img src={Score}></img>
        <Point>{myPoint == null ? '' : myPoint}</Point>
      </Left>
      <Middle>
        <p>에어팟 맥스부터 닌텐도 스위치까지,</p>
        <p>60여개의 상품에 도전해보세요!</p>
        <Line>
          <Big>현재 </Big>
          <Big style={{ textDecoration: 'underline' }}>{peopleNum == null ? '' : peopleNum}명</Big>
          <Big>이 응모중!</Big>
        </Line>
        <PrizeBox>
          <PrizeTop>
            <img src={First} />
            <BtnTop onClick={() => onClickPoint(5000)}>응모</BtnTop>
          </PrizeTop>
          <SecondLine>
            <EachImg>
              <img src={Second} />
              <Btn onClick={() => onClickPoint(4000)}>응모</Btn>
            </EachImg>
            <EachImg>
              <img src={Third} />
              <Btn onClick={() => onClickPoint(3000)}>응모</Btn>
            </EachImg>
          </SecondLine>
          <SecondLine>
            <EachImg>
              <img src={Fourth} />
              <Btn onClick={() => onClickPoint(2000)} style={{ bottom: '10px' }}>
                응모
              </Btn>
            </EachImg>
            <EachImg>
              <img src={Fifth} />
              <Btn onClick={() => onClickPoint(1000)}>응모</Btn>
            </EachImg>
          </SecondLine>
        </PrizeBox>
      </Middle>
      <Bottom>
        <button>
          <Link
            to="/myNFT"
            state={{
              myNFTData: myNFTData,
            }}>
            메인으로 돌아가기
          </Link>
        </button>
      </Bottom>
    </>
  );
}
export default Market;
