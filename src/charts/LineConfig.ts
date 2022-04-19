import "../assets/variables.scss";
const lineOptions = {
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
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        fontFamily: "Poppins",
        color: ["#C9C9C9"],
        size: 12,
        textAlign: "center",
      },
    },
  },
  plugins: {
    legend: {
      fullSize: false,
      position: "bottom",
      maxWidth: 100,
      labels: {
        usePointStyle: true,
        font: {
          family: "Poppins",
          size: 12,
        },
        padding: 16,
        color: ["#C9C9C9"],
      },
    },
  },
};
const lineChart = {
  labels: ["Foodcham", "Simplified", "Echo", "BlueStacks"],

  datasets: [
    {
      label: "Comfort",
      data: [1, 2, 5, 2, 4],
      borderJoinStyle: "bevel",
      backgroundColor: ["#FF6600"],
      borderColor: ["#FF6600"],
      pointRadius: 0,
      lineTension: 0.5,
    },
    {
      label: "Field Knowledge",
      data: [4, 1, 2, 8, 2],
      borderJoinStyle: "round",
      backgroundColor: ["#8675FF"],
      borderColor: ["#8675FF"],
      pointRadius: 0,
      lineTension: 0.5,
    },
    {
      label: "Design Comfort",
      data: [2, 3, 2, 6, 5],
      borderJoinStyle: "round",
      backgroundColor: ["#FFBB38"],
      borderColor: ["#FFBB38"],
      pointRadius: 0,
      lineTension: 0.5,
    },
    {
      label: "Work Life Balance",
      data: [0, 5, 1, 6, 2],
      borderJoinStyle: "round",
      backgroundColor: ["#F44771"],
      borderColor: ["#F44771"],
      pointRadius: 0,
      lineTension: 0.5,
    },
  ],
};

export { lineChart, lineOptions };
