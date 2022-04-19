const doughnutOptions = {
  borderRadius: 10,
  animation: {
    animationRotate: true,
    duration: 2000,
  },
  tooltips: {
    display: false,
  },
  cutoutPercentage: 70,
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      display: false,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      display: false,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
const doughnutChart = {
  labels: ["Certificates", "Trophies", "Medals"],

  datasets: [
    {
      data: [28, 7, 13],
      borderJoinStyle: "bevel",
      backgroundColor: ["#937BF5", "#F97381", "#FFBB38"],
    },
  ],
};

export { doughnutChart, doughnutOptions };
