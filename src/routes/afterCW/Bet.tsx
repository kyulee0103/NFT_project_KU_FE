import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Score from '../../assets/nft_game/score.png';
import AirPodMax from '../../assets/AirpodMax.png';
import HamburgerBtn from '../../assets/HamburgerBtn.png';
import NintendoSwitch from '../../assets/NintendoSwitch.png';
import Cash from '../../assets/Cash.png';
import Book from '../../assets/BookStore.png';
import Coffee from '../../assets/StarBucks.png';

const Top = styled.div`
  color: white;
  margin-top: 5vh;
  position: relative;
  text-align: center;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const Left = styled.p`
  position: absolute;
  color: white;
  top: 3vh;
  right: -20px;
  img {
    width: 97px;
  }
`;
const Point = styled.p`
  font-size: 15px;
  position: absolute;
  top: 12px;
  left: 45px;
`;

const Point2 = styled.p`
  position:fixed;
  font-size: 15px;
  color:white;
  position: absolute;
  top: 386px;
  left: 100px;
`;

const Point3 = styled.p`
  position:fixed;
  font-size: 15px;
  color:white;
  position: absolute;
  top: 605px;
  left: 100px;
`;

const Point4 = styled.p`
  position:fixed;
  font-size: 15px;
  color:white;
  position: absolute;
  top: 825px;
  left: 100px;
`;


const Point5 = styled.p`
  position:fixed;
  font-size: 15px;
  color:white;
  position: absolute;
  top: 825px;
  left: 100px;
`;


const Point6 = styled.p`
  position:fixed;
  font-size: 15px;
  color:white;
  position: absolute;
  top: 825px;
  left: 100px;
`;

const Picture =  styled.div`
position:absolute; 
align:center; 
`;

const Picture2 =  styled.div`
position:absolute; 
align:center; 
`;

const Picture3 =  styled.div`
position:absolute; 
align:center; 
`;

const Picture4 =  styled.div`
position:absolute; 
align:center; 
`;

const Picture5 =  styled.div`
position:absolute; 
align:center; 
`;

const Line1 = styled.p`
 position:absolute;
 color: white;
 font-size:15px; 
 position: absolute; 
 align: center;
 top: 130px; 
 left: 80px;
`;

const Line2 = styled.p`
 color: white;
 font-size:15px; 
 position: absolute; 
 align: center;
 top: 160px; 
 left: 100px;
`;


const Line3 = styled.p`
 color: white;
 font-size:20px; 
 position: absolute; 
 align: center;
 top: 220px; 
 left: 100px;
`;

const Hamberg =  styled.img`
  width:10px; 
  height:10px;
  margin:220px 50px;
  align:left;
`;

const AirpodMax  = styled.img`
 width:300px; 
 height:200px;
 margin:220px 50px;
`;

const Nintendo = styled.img`
  width:320px; 
  height:200px;
  margin:440px 50px;
`;

const Cash30000 = styled.img`
  width:310px; 
  height:200px;
  margin:660px 50px;
`;

const BookCard = styled.img`
width:310px; 
height:200px;
margin:660px 50px;
`;

const Coff = styled.img`
  width:310px; 
  height:200px;
  margin:660px 50px;
`;



/*전체 응모 인원*/
const People  = styled.u`

`;

/*각 상품 응모 인원*/
const AppliedPeople = styled.p`
  position:absolute;
  color:#a0a0a0;
  font-size:12px;
  top:260px;
  right:310px;
`;

const AppliedPeople2 = styled.p`
  position:absolute;
  color:#a0a0a0;
  font-size:12px;
  top:500px;
  right:330px;
`;

const AppliedPeople3 = styled.p`
  position:absolute;
  color:#a0a0a0;
  font-size:12px;
  top:720px;
  right:323px;
`;

const AppliedPeople4 = styled.p`
  position:absolute;
  color:#a0a0a0;
  font-size:12px;
  top:720px;
  right:323px;
`;


const AppliedPeople5 = styled.p`
  position:absolute;
  color:#a0a0a0;
  font-size:12px;
  top:710px;
  right:323px;
`;

const Middle = styled.div`
  display: flex;
  margin-top: 5vh;
  flex-direction: column;
  align-items: center;
  img {
    width: 90vw;
    height: 90vw;
    box-shadow: inset 0px 0px 23px #030205;
    border-radius: 30px;
    border: 3px solid rgba(250, 250, 250, 0.4);
    background-color: radial-gradient(78.15% 77.85% at 50.16% 63.19%, #fec0ff 2.08%, #6256e9 61.38%, #1512a5 100%);
  }
  button {
    background-color: rgba(84, 84, 84, 0.64);
    border: 2px solid rgba(250, 250, 250, 0.4);
    border-radius: 27.5px;
    backdrop-filter: blur(10px);
    width: 75%;
    height: 55px;
    color: white;
    font-size: 18px;
    margin-top: -4vh;
    font-weight: 700;
    z-index: 1000;
  }
`;

/*메인으로 돌아가기 버튼*/
const Btn = styled.button`
  position:absolute; 
  background-color: #7000ff;
  border-radius: 23.5px;
  border: 0px;
  color: white;
  font-size: 16px;
  width: 43vw;
  height: 47px;
  top:1000px; 
  right:110px;

`;

/*응모 버튼*/
const ApplyBtn = styled.button`
  position: absolute; 
  background-color: #fffff;
  border-radius: 20.5px;
  border: 0px;
  font-size: 12px;
  color:black;
  width: 20vw;
  height: 18px;
  top: 383px; 
  right: 60px; 
`;

const ApplyBtn2 = styled.button`
  position: absolute; 
  background-color: #fffff;
  border-radius: 20.5px;
  border: 0px;
  font-size: 12px;
  color:black;
  width: 20vw;
  height: 18px;
  top: 600px; 
  right: 85px; 
`;

const ApplyBtn3 = styled.button`
  position: absolute; 
  background-color: #fffff;
  border-radius: 20.5px;
  border: 0px;
  font-size: 12px;
  color:black;
  width: 20vw;
  height: 18px;
  top: 825px; 
  right: 75px; 
`;


const ApplyBtn4 = styled.button`
  position: absolute; 
  background-color: #fffff;
  border-radius: 20.5px;
  border: 0px;
  font-size: 12px;
  color:black;
  width: 20vw;
  height: 18px;
  top: 825px; 
  right: 75px; 
`;

const ApplyBtn5 = styled.button`
  position: absolute; 
  background-color: #fffff;
  border-radius: 20.5px;
  border: 0px;
  font-size: 12px;
  color:black;
  width: 20vw;
  height: 18px;
  top: 825px; 
  right: 75px; 
`;

function Bet() {
  return (
    <div>
     {/* <Hamberg src={HamburgerBtn}></Hamberg>*/}
      <Top>
        <Title>경품 응모하기</Title>
      </Top>
      <Left>
        <img src={Score}></img>
        <Point>1450</Point>
      </Left>
      <Line1>
        에어팟 맥스부터 닌텐도 스위치까지,
      </Line1>
      <Line2>
        60여개의 상품에 도전해보세요!
      </Line2>
      <Line3>
        <b>현재 <People>1023</People>명이 응모중!</b> {/*명 수 부분 변수 처리 필요*/}
      </Line3>
     
      <Picture>
        <AirpodMax src={AirPodMax}></AirpodMax> 
        <AppliedPeople>1명</AppliedPeople>
        <Point2>1450</Point2>
        <ApplyBtn>응모</ApplyBtn>
      </Picture>
    
      <Picture2>
        <Nintendo src={NintendoSwitch}></Nintendo>
        <ApplyBtn2>응모</ApplyBtn2>
        <AppliedPeople2>2명</AppliedPeople2>
        <Point3>1450</Point3>
      </Picture2>
      
      <Picture3>
        <Cash30000 src={Cash}></Cash30000>
        <Point4>1450</Point4>
        <ApplyBtn3>응모</ApplyBtn3>
        <AppliedPeople3>3명</AppliedPeople3>
      </Picture3>

      
      <Picture4>
        <BookCard src={Book}></BookCard>
        <Point5>1450</Point5>
        <ApplyBtn4>응모</ApplyBtn4>
        <AppliedPeople4>4명</AppliedPeople4>
      </Picture4>

      <Picture5>
        <Coff src={Coffee}></Coff>
        <Point5>1450</Point5>
        <ApplyBtn5>응모</ApplyBtn5>
        <AppliedPeople5>3명</AppliedPeople5>
      </Picture5>
  <Btn>메인으로 돌아가기</Btn>
    </div>

    
  );
}

export default Bet;
