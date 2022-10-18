import { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import './main.css';
import animationData from '../assets/78790-hello.json';

const LogoDIv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function Hello() {
  const navigate = useNavigate();

  const timeout = () => {
    setTimeout(() => {
      navigate('/Main');
    }, 6100);
  };

  useEffect(() => {
    timeout();
    return () => {
      timeout();
    };
  }, []);

  return (
    <LogoDIv>
      <Lottie animationData={animationData}></Lottie>
    </LogoDIv>
  );
}

export default Hello;
