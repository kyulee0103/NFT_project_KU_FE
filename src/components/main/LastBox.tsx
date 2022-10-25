import styled from 'styled-components';
import Last from '../../assets/lastImg.png';
import Carousel from './Carousel';
import Spon1 from '../../assets/bv.png';
import Spon2 from '../../assets/next.png';
import Spon3 from '../../assets/yon.png';
import Spon4 from '../../assets/klaytn.png';
import Spon5 from '../../assets/spon1.png';
import Spon6 from '../../assets/spon3.png';
import Spon7 from '../../assets/spon4.png';
import ScrollRevealSlideAnimation from './MyAnimation';

const LastPage = styled.div`
  height: 100vh;
  img {
    width: 100%;
    vertical-align: middle;
    position: absolute;
    bottom: 0px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

interface IInsideContent {
  width: number;
}

const InsideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: ${(p: IInsideContent) => p.width};
`;

const Text = styled.div``;
const CarouselBox = styled.div`
  height: 230px;
  width: 100vw;

  /* margin-top: 30px; */
`;
const Sponsor = styled.div`
  height: 200px;
  margin: 40px auto;
  /* margin-right: 30px; */
  width: 300px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 300px;
  margin-bottom: 20px;
  margin-left: 30px;
`;

const Middle = styled.div`
  height: 80px;
  text-align: left;
  color: white;
  letter-spacing: 1px;
  margin-left: 30px;
  p {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 10px;
  }
  span {
    font-weight: 200;
    font-size: 14px;
  }
`;
const Title = styled.p`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 8px;
  color: white;
  text-align: left;
  letter-spacing: 2px;
`;
const SponTitle = styled.div`
  p {
    color: white;
    font-weight: 600;
    letter-spacing: 3px;
  }
  text-align: center;
  margin-bottom: 10px;
`;
const SponImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;
`;
const SponImg = styled.div`
  width: 100px;
`;

function LastBox() {
  return (
    <Wrapper>
      <LastPage>
        <img src={Last} alt="img" />
      </LastPage>
      <InsideContent width={window.innerWidth}>
        <Text>
          <ScrollRevealSlideAnimation reLoading={false} direction="right">
            <div>
              <Top>
                <Title>버미와 수리의</Title>
                <Title>통큰 이벤트</Title>
                <Title>가보자고 (۶•̀ᴗ•́)۶</Title>
              </Top>
              <Middle>
                <p>정기전 결과 예측 게임 이벤트!</p>
                <span>
                  경기 예측 결과를 통해
                  <br /> 푸짐한 경품에 응모하세요!!
                </span>
              </Middle>
            </div>
          </ScrollRevealSlideAnimation>

          <CarouselBox>
            <Carousel />
          </CarouselBox>

          <Sponsor>
            <SponTitle>
              <p>주최</p>
            </SponTitle>
            <SponImgBox>
              <SponImg>
                <img src={Spon1} style={{ width: '97px', height: '26px' }} alt="img" />
              </SponImg>
              <SponImg>
                <img src={Spon2} style={{ width: '52px', height: '23px' }} alt="img" />
              </SponImg>
              <SponImg>
                <img src={Spon3} style={{ width: '84px', height: '26px' }} alt="img" />
              </SponImg>
            </SponImgBox>
            <SponTitle>
              <p>서포터즈</p>
            </SponTitle>
            <SponImgBox>
              <SponImg>
                <img src={Spon5} style={{ width: '59px' }} alt="img" />
              </SponImg>
              <SponImg>
                <img src={Spon4} style={{ width: '59px', height: '13px' }} alt="img" />
              </SponImg>
              <SponImg>
                <img src={Spon6} style={{ width: '59px' }} alt="img" />
              </SponImg>
              <SponImg>
                <img src={Spon7} style={{ width: '59px', height: '13px' }} alt="img" />
              </SponImg>
            </SponImgBox>
          </Sponsor>
        </Text>
      </InsideContent>
    </Wrapper>
  );
}

export default LastBox;
