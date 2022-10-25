import styled from 'styled-components';

const Total = styled.div`
  justify-content: center;
  align-items: total;
  height: 90vh;
  width: 100%;
  text-align: center;
  p {
    color: white;
    margin-bottom: 30px;
  }
`;

function Final() {
  return (
    <Total>
      <p style={{ fontWeight: 700 }}>곧 Klip 지갑에 귀여운 버미와 수리가 도착해요!</p>
      <p>민팅에 참여해주셔서 감사합니다</p>
    </Total>
  );
}

export default Final;
