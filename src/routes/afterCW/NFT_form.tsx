import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import useInput from '../../hooks/useInput';
import SwitchSelector from 'react-switch-selector';

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
  background-color: #c3c3fb;
  width: 100%;
  height: 50vh;
`;
const TextFieldBox = styled.div``;
const Top = styled.div``;

function NFT_form() {
  const [name, onChangeName] = useInput('');
  const [studentNum, onChangeStudentNum] = useInput('');
  const [phone, onChangePhone] = useInput('');
  const options = [
    {
      label: '고려대학교',
      value: '고려대학교',
      selectedBackgroundColor: '#FFFFFF',
      selectedFontColor: 'black',
    },
    {
      label: '연세대학교',
      value: '연세대학교',
      selectedBackgroundColor: '#FFFFFF',
      selectedFontColor: 'black',
    },
  ];

  const initialSelectedIndex = options.findIndex(({ value }) => value === 'bar');

  return (
    <Total>
      <Title>
        <p>시작하기</p>
      </Title>
      <FormBox>
        <form>
          <Top>
            <div className="your-required-wrapper" style={{ width: 100, height: 30 }}>
              <SwitchSelector
                onChange={value => {
                  console.log(value);
                }}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={'#535353'}
                fontColor={'#FFFFFF'}
              />
            </div>
          </Top>
          <TextFieldBox>
            <TextField
              id="standard-basic"
              label="이름"
              variant="standard"
              required
              size="small"
              margin="none"
              value={name}
              onChange={onChangeName}
            />

            <TextField
              type="number"
              id="standard-basic"
              label="학번"
              variant="standard"
              required
              size="small"
              margin="none"
              value={studentNum}
              onChange={onChangeStudentNum}
            />
            <TextField
              type="number"
              id="standard-basic"
              label="연락처"
              variant="standard"
              required
              size="small"
              margin="none"
              value={phone}
              onChange={onChangePhone}
            />
          </TextFieldBox>
        </form>
      </FormBox>
    </Total>
  );
}
export default NFT_form;
