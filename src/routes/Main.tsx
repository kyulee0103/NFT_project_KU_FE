import styled from 'styled-components';
import './main.css';
import First from '../components/main/First';
import Second from '../components/main/Second';
import Third from '../components/main/Third';
import LastBox from '../components/main/LastBox';
import { useRef, useEffect } from 'react';

const Total = styled.div`
  width: 100%;
`;

const Page = styled.div`
  height: 90vh;
  margin-bottom: 8vh;
`;

const BTNdiv = styled.div`
  text-align: center;
  margin-top: 20px;
  position: fixed;
  bottom: 5vh;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1000;
  visibility: hidden;
  transition: visibility 0.2s fadein;
  button {
    color: black;
    border: 0px solid;
    width: 70%;
    height: 43px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 21px;
    box-shadow: 0px 0px 20px 10px rgba(125, 125, 125, 0.39);
  }
`;

function Main() {
  const targetRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (!targetRef.current) {
      return;
    }
    if (window.scrollY > 300) {
      targetRef.current.style.visibility = 'visible';
      console.log('hey');
    } else if (window.scrollY <= 300) {
      targetRef.current.style.visibility = 'hidden';
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
    <Total>
      <Page>
        <First />
        <BTNdiv className="fade-in-img" ref={targetRef}>
          <button>버미와 수리 만나러 가기</button>
        </BTNdiv>
      </Page>
      <Page>
        <Second />
      </Page>
      <Page>
        <Third />
      </Page>
      <LastBox />
    </Total>
  );
}

export default Main;
