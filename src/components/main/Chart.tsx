import ApexCharts from 'react-apexcharts';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const colors = ['#8B0129', '#013876'];
const Top = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 10px;
  margin-left: 28px;
  margin-top: 20px;
`;
const White = styled.span`
  color: #ffffff;
`;
const Black = styled.span`
  color: #676767;
`;
const Line = styled.div`
  margin-bottom: 30px;
`;

const UnderL = styled.span`
  text-decoration: underline;
`;

function Chart() {
  const [mintNum, setMintNum] = useState<number[]>([]);
  useEffect(() => {
    axios.get('https://angry-dongmin.com/counts').then(res => {
      const koreaNum = Number(res.data.korea);
      const yonseiNum = Number(res.data.yonsei);
      setMintNum(mintNum => [...mintNum, koreaNum, yonseiNum]);
    });
  }, []);

  return (
    <>
      <Top>
        <Line>
          <White>지금</White>
          <Black>은 </Black>

          {mintNum[0] - mintNum[1] >= 0 ? <White>고려대</White> : <White>연세대</White>}

          <Black>가 </Black>
        </Line>
        <Line>
          <White>
            <UnderL> {mintNum[0] - mintNum[1] >= 0 ? mintNum[0] - mintNum[1] : mintNum[1] - mintNum[0]}점 차이</UnderL>
          </White>
          <Black>로 </Black>
          <White>민팅 필승! 전승! 압승!</White>
        </Line>
      </Top>
      <div>
        <ApexCharts
          type="bar"
          series={[
            {
              name: 'minting',
              data: mintNum,
            },
          ]}
          options={{
            theme: {
              mode: 'dark',
            },

            colors: colors,
            chart: {
              height: '180px',
              animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 1000,
                animateGradually: {
                  enabled: true,
                  delay: 9000,
                },
                dynamicAnimation: {
                  enabled: true,
                  speed: 350,
                },
              },
              toolbar: {
                show: false,
              },
              background: 'transparent',
            },

            plotOptions: {
              bar: {
                barHeight: '100%',
                distributed: true,
                borderRadius: 15,
                columnWidth: '25px',
                dataLabels: {
                  position: 'center',
                },
              },
            },
            grid: {
              show: true,
              borderColor: '#535353',
              position: 'back',
              row: {
                opacity: 0.5,
              },
            },

            yaxis: {
              show: false,
              tickAmount: 3,
              axisBorder: {
                show: true,
                color: '#535353',
              },
              labels: {
                show: true,
              },
            },
            xaxis: {
              axisTicks: { show: false },
              labels: { show: true, showDuplicates: false },
              categories: ['고려대학교', '연세대학교'],
              axisBorder: {
                show: true,
                color: '#535353',
              },
              tooltip: {
                enabled: false,
              },
            },
            legend: {
              show: false,
            },

            fill: {
              type: 'solid',
              opacity: 0.7,
            },
          }}
        />
      </div>
    </>
  );
}

export default Chart;
