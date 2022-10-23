import { Link } from 'react-router-dom';
function Game() {
  return (
    <div>
      <p>경기 예측하기 페이지 입니다</p>
      <button>
        <Link to="/myNFT">홈으로 가기</Link>
      </button>
    </div>
  );
}

export default Game;
