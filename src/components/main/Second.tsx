import styled from 'styled-components';
import tiger from '../../assets/leftK.png';
import eagle from '../../assets/rightY.png';
import Chart from './Chart';
import { useState, useRef, useEffect } from 'react';
import OpenModal from './Modal';
import ScrollRevealSlideAnimation from './MyAnimation';
import { CSSTransition } from 'react-transition-group';
import './second.css';

const Versus = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  height: 45vh;
  overflow: hidden;
`;

const ImgBox = styled.div`
  img {
    width: 44vw;
  }
`;
const Graph = styled.div`
  width: 100%;
  height: 50vh;
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
const ChartSize = styled.div`
  width: 90%;
  margin: 5px auto;
`;
const Pop = styled.div`
  text-align: center;
  font-size: 14px;
  p {
    color: #949494;
    text-decoration: underline;
  }
`;

const Top = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 10px;
  margin-left: 28px;
  margin-top: 20px;
`;

const UnderL = styled.span`
  text-decoration: underline;
`;

function Second() {
  const [openModal, setOpenModal] = useState(false);
  const onClick = () => {
    setOpenModal(prev => !prev);
  };
  const [inProp, setInProp] = useState(false);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const handleScroll = () => {
    if (!leftRef.current) {
      return;
    }
    if (window.scrollY > 500) {
      setInProp(true);
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener('scroll', handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Versus>
        <CSSTransition timeout={2000} ref={leftRef} in={inProp} classNames="moveL" unmountOnExit>
          <ImgBox>
            <img src={tiger} />
          </ImgBox>
        </CSSTransition>
        <CSSTransition timeout={2000} ref={rightRef} in={inProp} classNames="moveR" unmountOnExit>
          <ImgBox>
            <img src={eagle} />
          </ImgBox>
        </CSSTransition>
      </Versus>
      <ScrollRevealSlideAnimation reLoading={true} direction="top">
        <Graph>
          <Top>
            <Line>
              <White>지금</White>
              <Black>은 </Black>
              <White>고려대</White>
              <Black>가 </Black>
            </Line>
            <Line>
              <White>
                <UnderL>12점 차이</UnderL>
              </White>
              <Black>로 </Black>
              <White>민팅 필승! 전승! 압승!</White>
            </Line>
          </Top>

          <ChartSize>
            <Chart />
          </ChartSize>
          <Pop>
            <p onClick={onClick}>민팅 점수 추산 방식은?</p>
          </Pop>
          {openModal ? <OpenModal setOpenModal={setOpenModal} openModal={openModal} /> : null}
        </Graph>
      </ScrollRevealSlideAnimation>
    </div>
  );
}

export default Second;
