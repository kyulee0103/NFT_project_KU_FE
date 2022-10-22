import { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../assets/78790-hello.json';
import { Link } from 'react-router-dom';

interface IHeight {
  height: number;
}

const LogoDIv = styled.div`
  height: ${(props: IHeight) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  min-height: 90vh;
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
    <LogoDIv height={window.innerHeight}>
      <Lottie animationData={animationData}></Lottie>
      {/* <button>
        <Link to="/start">눌러봐</Link>
      </button> */}
    </LogoDIv>
  );
}

export default Hello;
