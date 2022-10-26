import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import './form.scss';
import React, { useState, useCallback, useRef } from 'react';
import axios from 'axios';

interface FormValue {
  name: string;
  studentNum: string;
  phone: string;
}

const Total = styled.div`
  margin-top: 102px;
  margin-left: 42px;
  margin-right: 42px;
  margin-bottom: 60px;
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    color: #fafafa;
  }
`;

const Title = styled.div``;
const FormBox = styled.div`
  /* background-color: #c3c3fb; */
  width: 100%;
  height: 50vh;
`;

const Top = styled.div`
  margin: 60px auto 40px auto;
  /* display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; */
`;

const Bottom = styled.div`
  width: 100%;
  margin-top: 15vh;
  text-align: center;
  p {
    color: #575757;
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 5px;
  }
`;

const Btn = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50px;
  button {
    width: 270px;
    height: 43px;
    border-radius: 21.5px;
    background-color: #7000ff;
    border: 0px;
    color: #fafafa;
    font-size: 16px;
    font-weight: 700;
  }
`;
interface RouteState {
  myAddress?: string;
}

function NFT_form() {
  const form = useRef<HTMLFormElement>(null);
  const [school, setSchool] = useState<boolean>(false);
  const [name, onChangeName] = useInput('');
  const [studentNum, onChangeStudentNum] = useInput('');
  const [phone, onChangePhone] = useInput('');
  const location = useLocation();
  const { myAddress } = location?.state as RouteState;
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSchool(e.target.checked);
  };

  const onSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      navigate('/loading', {
        state: {
          myData: {
            userAddr: myAddress,
            name: name,
            univ: school,
            phoneNumber: phone,
            studentNumber: studentNum,
          },
        },
        replace: true,
      });

      console.log(school, name, studentNum, phone, myAddress);
    },
    [school, name, studentNum, phone, myAddress]
  );
  console.log(phone);

  return (
    <Total>
      <Title>
        <p>시작하기</p>
      </Title>
      <Top>
        <div className="can-toggle demo-rebrand-2">
          <input id="e" type="checkbox" checked={school} onChange={onChange} />
          <label htmlFor="e">
            <div className="can-toggle__switch" data-checked="연세대학교" data-unchecked="고려대학교"></div>
            <div className="can-toggle__label-text"></div>
          </label>
        </div>
      </Top>
      <FormBox>
        <form ref={form} autoComplete="off" onSubmit={onSubmit}>
          <div className="form__group field">
            <input
              value={name}
              onChange={onChangeName}
              type="input"
              className="form__field"
              placeholder="이름"
              name="name"
              id="name"
              required
            />
            <label htmlFor="name" className="form__label">
              이름
            </label>
          </div>
          <div className="form__group field">
            <input
              value={studentNum}
              onChange={onChangeStudentNum}
              type="input"
              className="form__field"
              placeholder="학번"
              name="name"
              id="studentId"
              required
            />
            <label htmlFor="studentId" className="form__label">
              학번
            </label>
          </div>
          <div className="form__group field">
            <input
              value={phone}
              onChange={onChangePhone}
              type="input"
              className="form__field"
              placeholder="연락처"
              name="name"
              id="phone"
              required
            />
            <label htmlFor="phone" className="form__label">
              연락처
            </label>
          </div>
          <Bottom>
            <p>개인 정보 수집의 목적은 경품 지급 및</p>
            <p>추가적인 홀더들에게 혜택을 지급해드리기 위해 사용됩니다.</p>
            <p>혜택 지급 이후 수집한 정보는 파기됩니다.</p>
          </Bottom>
          <Btn>
            <button type="submit">민팅 받기</button>
          </Btn>
        </form>
      </FormBox>
    </Total>
  );
}
export default NFT_form;
