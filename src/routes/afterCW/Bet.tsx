import { Link } from 'react-router-dom';
function Bet() {
  return (
    <div>
      <p>경품 응모하기 페이지 입니다</p>
      <button>
        <Link to="/myNFT">홈으로 가기</Link>
      </button>
    </div>
  );
}

export default Bet;
