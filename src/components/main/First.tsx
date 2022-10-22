import styled from 'styled-components';
import Tiger from '../../assets/firstTiger.png';
import Lottie from 'lottie-react';
import '../../routes/main.css';
import animationData from '../../animations/96084-arrow.json';
import ScrollRevealSlideAnimation from './MyAnimation';

const FirstBox = styled.div`
  font-size: 23px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 40px;
  padding-top: 78px;
  padding-left: 40px;
`;

const White = styled.span`
  color: #ffffff;
`;
const Black = styled.span`
  color: #676767;
`;
const Line = styled.div`
  margin-bottom: 30px;
`;

const Down = styled.div`
  width: 100%;
  text-align: center;
  img {
    width: 100%;
  }
`;

const LottieBox = styled.div`
  position: absolute;
  z-index: 100;
  top: 65vh;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  margin: 0px auto;
  p {
    font-size: 15px;
    color: white;
    font-weight: 700;
    letter-spacing: 2px;
  }
`;

const Relative = styled.div`
  position: relative;
`;

function First() {
  return (
    <Relative>
      <ScrollRevealSlideAnimation reLoading={false} direction="right">
        <FirstBox>
          <Line>
            <White>버미</White>
            <Black>와 </Black>
            <White>수리</White>
            <Black>가 </Black>
            <br />
            <White>2022년 정기전</White>
            <Black>에 찾아왔어요!</Black>
            <br />
          </Line>
          <Line>
            <White>우리의 축제</White>
            <Black>에 </Black>
            <White>활기</White>
            <Black>를</Black>
            <br />
            <White>더해줄 친구</White>
            <Black>들,</Black>
            <br />
          </Line>
          <Line>
            <White>지금부터 만나볼까요?</White>
          </Line>
        </FirstBox>
      </ScrollRevealSlideAnimation>
      <Down>
        <img src={Tiger} className="fade-in-img" alt="원래는 호랭이에용..." />
      </Down>
      <LottieBox>
        <p>아래로 스크롤해주세요 !</p>
        <Lottie animationData={animationData} style={{ width: '100px' }} />
      </LottieBox>
    </Relative>
  );
}

export default First;
