import Num1 from '../../assets/num1.png';
import Num2 from '../../assets/num2.png';
import Num3 from '../../assets/num3.png';
import Num4 from '../../assets/num4.png';
import Num5 from '../../assets/num5.png';
import styled from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import './carousel.css';

interface IInsideContent {
  width: number;
}

enum AnimationType {
  FADEOUT = 'fadeout',
  SLIDE = 'slide',
}

const Contain = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 80vw;
`;

const ItemsContain = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;

const ItemsWrap = styled.div`
  width: 100%;
  overflow: hidden;
  margin-left: 10px;

  img {
    width: 217px;
    height: 226px;
    /* object-fit: cover; */
  }
`;

const items = [
  <ItemsContain>
    <ItemsWrap>
      <img src={Num1} />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <img src={Num2} />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <img src={Num3} />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <img src={Num4} />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <img src={Num5} />
    </ItemsWrap>
  </ItemsContain>,
];

function Carousel() {
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    800: {
      items: 3,
    },
  };
  return (
    <Contain>
      <AliceCarousel
        mouseTracking
        infinite={true}
        animationDuration={1500}
        autoPlayInterval={1000}
        disableDotsControls
        disableButtonsControls
        autoPlay
        items={items}
        responsive={responsive}
        touchTracking={true}
        // animationType="fadeout"
      />
    </Contain>
  );
}

export default Carousel;
