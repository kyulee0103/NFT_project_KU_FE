import styled from 'styled-components';
import { useState } from 'react';
import '../../components/main/game.css';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SportTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
  text-align: left;
  letter-spacing: 2px;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 88%;
  /* background-color: red; */
  margin: 20px auto 10px auto;
`;
const Buttondiv = styled.div`
  /* margin: 5px; */
  // position: fixed;
  float: right;
  right: 10px;
  top: 5px;
`;

const Optiondiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;
  margin: 10px auto;

  /* float: center; */
`;

const SubmitButton = styled.div`
  text-align: center;
  margin-top: 20px;
  position: fixed;
  bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1000;
  transition: visibility 0.2s fadein;
  button {
    color: white;
    border: 0px solid;
    width: 80%;
    height: 43px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 21px;
    background-color: #7000ff;
    box-shadow: 0px 0px 20px 10px rgba(125, 125, 125, 0.29);
  }
`;

const Header = styled.div`
  margin-top: 4vh;
  margin-bottom: 25px;
  color: white;
  text-align: center;
  p {
    font-weight: 600;
    font-size: 23px;
  }
`;

const Total = styled.div`
  margin-bottom: 100px;
`;

interface RouteState {
  myNFTData: any;
}

function Game() {
  const location = useLocation();
  const { myNFTData } = location?.state as RouteState;
  console.log(myNFTData);
  const Baskeballoption = ['1 - 2 점차 예상', '3 - 4 점차 예상', '5 - 6 점차 예상', '7 점차 이상 예상'];
  const Hockeyoption = ['1 점차 예상', '2 점차 예상', '3 점차 예상', '4 점차 이상 예상'];
  const Basketballoption = ['1 - 5 점차 예상', '6 - 10 점차 예상', '11 - 15 점차 예상', '16 점차 이상 예상'];
  const Rugbyoption = ['1 - 3 점차 예상', '4 - 6 점차 예상', '7 - 9 점차 예상', '10 점차 이상 예상'];
  const Socceroption = ['1 점차 예상', '2 점차 예상', '3 점차 예상', '4 점차 이상 예상'];
  const navigate = useNavigate();

  const [sportuniv1, setsportuniv1] = useState('default');
  const [sportopt1, setsportopt1] = useState(-2);
  const [sportuniv2, setsportuniv2] = useState('default');
  const [sportopt2, setsportopt2] = useState(-2);
  const [sportuniv3, setsportuniv3] = useState('default');
  const [sportopt3, setsportopt3] = useState(-2);
  const [sportuniv4, setsportuniv4] = useState('default');
  const [sportopt4, setsportopt4] = useState(-2);
  const [sportuniv5, setsportuniv5] = useState('default');
  const [sportopt5, setsportopt5] = useState(-2);

  const renderingButton = (sportuniv: string, setsportuniv: any, setsportopt: any) => {
    const result = [
      <button className={`btn ${sportuniv === 'KOREA' ? 'active' : ''}`} onClick={() => setsportuniv('KOREA')}>
        고대 승
      </button>,
      <button
        className={`btn ${sportuniv === 'DRAW' ? 'active' : ''}`}
        onClick={() => {
          setsportuniv('DRAW');
          setsportopt(-1);
        }}>
        무승부
      </button>,
      <button className={`btn ${sportuniv === 'YONSEI' ? 'active' : ''}`} onClick={() => setsportuniv('YONSEI')}>
        연대 승
      </button>,
    ];
    return result;
  };

  const renderingOption = (options: string[], setsportopt: any, selectedopt: number, selecteduniv: string) => {
    const result = [];
    for (let i = 0; i < options.length; i++) {
      result.push(
        <button
          className={`optbtn ${selectedopt == i ? 'active' : ''}`}
          onClick={() => {
            if (selecteduniv == 'KOREA' || selecteduniv == 'YONSEI') {
              setsportopt(i);
            }
          }}>
          {options[i]}
        </button>
      );
    }
    return result;
  };

  const submit = () => {
    const result = [
      [sportuniv1, sportopt1],
      [sportuniv2, sportopt2],
      [sportuniv3, sportopt3],
      [sportuniv4, sportopt4],
      [sportuniv5, sportopt5],
    ];
    const count1 = result.filter(element => 'y' == element[0] && -1 == element[1]).length;
    const count2 = result.filter(element => 'k' == element[0] && -1 == element[1]).length;
    const count3 = result.filter(element => 'default' == element[0]).length;
    const count = count1 + count2 + count3;
    if (count > 0) {
      //하나라도 선택 안되어있으면
      alert('🐯 선택 안한 항목 있어요! 🦅');
    } else {
      axios({
        url: 'http://3.35.55.201:3000/guess',
        method: 'post',
        data: {
          userAddr: myNFTData.userAddr,
          baseball: {
            univWin: result[0][0],
            scoreGap: result[0][1],
          },
          iceHockey: {
            univWin: result[1][0],
            scoreGap: result[1][1],
          },
          basketball: {
            univWin: result[2][0],
            scoreGap: result[2][1],
          },
          rugby: {
            univWin: result[3][0],
            scoreGap: result[3][1],
          },
          soccer: {
            univWin: result[4][0],
            scoreGap: result[4][1],
          },
        },
      })
        .then(res => {
          console.log(res);
          alert('제출 완료 🔥');
          navigate('/myNFT', {
            state: {
              myNFTData: myNFTData,
            },
          });
        })
        .catch(error => {
          console.log(error);
          alert('이미 정기전 결과 예측 게임에 참여하셨습니다.');
          navigate('/myNFT', {
            state: {
              myNFTData: myNFTData,
            },
          });
        });
    }
  };

  return (
    <Total>
      <Header>
        <p>정기전 경기 예측</p>
      </Header>
      <SportTitle>
        <p>야구 ⚾️</p>
        <Buttondiv>{renderingButton(sportuniv1, setsportuniv1, setsportopt1)}</Buttondiv>
      </SportTitle>
      <Optiondiv>{renderingOption(Baskeballoption, setsportopt1, sportopt1, sportuniv1)}</Optiondiv>
      <SportTitle>
        빙구 🏒
        <Buttondiv>{renderingButton(sportuniv2, setsportuniv2, setsportopt2)}</Buttondiv>
      </SportTitle>
      <Optiondiv>{renderingOption(Hockeyoption, setsportopt2, sportopt2, sportuniv2)}</Optiondiv>
      <SportTitle>
        농구 🏀
        <Buttondiv>{renderingButton(sportuniv3, setsportuniv3, setsportopt3)}</Buttondiv>
      </SportTitle>
      <Optiondiv>{renderingOption(Basketballoption, setsportopt3, sportopt3, sportuniv3)}</Optiondiv>
      <SportTitle>
        럭비 🏈
        <Buttondiv>{renderingButton(sportuniv4, setsportuniv4, setsportopt4)}</Buttondiv>
      </SportTitle>
      <Optiondiv>{renderingOption(Rugbyoption, setsportopt4, sportopt4, sportuniv4)}</Optiondiv>
      <SportTitle>
        축구 ⚽<Buttondiv>{renderingButton(sportuniv5, setsportuniv5, setsportopt5)}</Buttondiv>
      </SportTitle>
      <Optiondiv>{renderingOption(Socceroption, setsportopt5, sportopt5, sportuniv5)}</Optiondiv>
      <SubmitButton>
        <button onClick={() => submit()}>제출하기</button>
      </SubmitButton>
    </Total>
  );
}

export default Game;
