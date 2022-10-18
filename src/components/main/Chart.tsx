import ApexCharts from 'react-apexcharts';

const colors = ['#8B0129', '#013876'];

function Chart() {
  return (
    <div>
      <ApexCharts
        type="bar"
        series={[
          {
            name: 'minting',
            data: [640, 550],
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
  );
}

export default Chart;
