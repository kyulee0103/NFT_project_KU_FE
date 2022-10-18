import styled from 'styled-components';
import tiger from '../../assets/leftK.png';
import eagle from '../../assets/rightY.png';
import Chart from './Chart';
import { useState } from 'react';
import OpenModal from './Modal';

const Versus = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

const ImgBox = styled.div`
  img {
    width: 47vw;
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
  letter-spacing: 1px;
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

  return (
    <div>
      <Versus>
        <ImgBox>
          <img src={tiger} />
        </ImgBox>
        <ImgBox>
          <img src={eagle} />
        </ImgBox>
      </Versus>
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
    </div>
  );
}

export default Second;
