import styled from 'styled-components';
import Cross from '../../assets/crossLine.png';
import ScrollRevealSlideAnimation from './MyAnimation';

const Text = styled.div`
  margin-top: 30px;
  color: white;
  margin-left: 30px;
`;
const BigT = styled.p`
  font-size: 28px;
  margin-top: 8px;
  font-weight: 600;
  letter-spacing: 2px;
`;

const SmallT = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  line-height: 13px;
`;

const SmallBox = styled.div`
  margin-top: 30px;
`;

const CrossImg = styled.div`
  position: relative;
  left: 13vw;
  top: 0px;
`;

interface IInsideContent {
  width: number;
}

const Img = styled.img`
  width: ${(p: IInsideContent) => p.width};
`;

const ThirdBox = styled.div`
  overflow: hidden;
`;

function Third() {
  return (
    <ThirdBox>
      <ScrollRevealSlideAnimation direction="right" reLoading={false}>
        <Text>
          <BigT>1500마리의 버미,</BigT>
          <BigT>1500마리의 수리!</BigT>
          <SmallBox>
            <SmallT>블록체인 기술을 활용해 만들어진</SmallT>
            <SmallT>대체 불가능 토큰 버미 & 수리 NFT</SmallT>
          </SmallBox>
        </Text>
      </ScrollRevealSlideAnimation>
      <ScrollRevealSlideAnimation direction="left" reLoading={false}>
        <CrossImg>
          <Img src={Cross} width={window.innerWidth * 1.2} />
        </CrossImg>
      </ScrollRevealSlideAnimation>
    </ThirdBox>
  );
}

export default Third;
