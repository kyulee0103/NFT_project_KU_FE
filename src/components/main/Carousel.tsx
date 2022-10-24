import Num1 from '../../assets/num1.png';
import Num2 from '../../assets/num2.png';
import Num3 from '../../assets/num3.png';
import Num4 from '../../assets/num4.png';
import Num5 from '../../assets/num5.png';
import styled from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';

import AliceCarousel from 'react-alice-carousel';
import './carousel.css';
import { useCallback, useEffect, useState } from 'react';

const Contain = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 300px;
  min-width: 300px;
  overflow: hidden;
`;

const ItemsContain = styled.div`
  width: 300px;
  height: 100%;
  overflow: hidden;
`;

const ItemsWrap = styled.div`
  /* width: 100%; */
  overflow: hidden;

  img {
    overflow: hidden;
    width: 200px;
    height: 220px;
    /* object-fit: cover; */
  }
`;

const items = [
  <ItemsContain>
    <ItemsWrap>
      <img src={Num1} alt="이미지" />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <img src={Num2} alt="이미지" />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <img src={Num3} alt="이미지" />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <img src={Num4} alt="이미지" />
    </ItemsWrap>
  </ItemsContain>,
  <ItemsContain>
    <ItemsWrap>
      <img src={Num5} alt="이미지" />
    </ItemsWrap>
  </ItemsContain>,
];

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

function Carousel() {
  const [move, setMove] = useState<boolean>(false);
  const handleScroll = useCallback(() => {
    const isMoved = window.scrollY >= window.innerHeight * 2.5;
    setMove(isMoved);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  if (!move) {
    return null;
  }

  return (
    <Contain>
      <AliceCarousel
        infinite={true}
        animationDuration={1500}
        autoPlayInterval={2000}
        disableDotsControls
        disableButtonsControls
        autoPlay={move}
        items={items}
        responsive={responsive}
        touchTracking={true}
        // animationType="fadeout"
      />
    </Contain>
  );
}

export default Carousel;
