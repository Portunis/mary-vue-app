const radarChart = {
  labels: [
    "Wireframing",
    "Interactions",
    "Graphic Design",
    "Design Testing",
    "Research",
  ],
  datasets: [
    {
      label: "Foodcham",
      data: [65, 59, 90, 81, 56],
      fill: true,
      backgroundColor: "rgba(134, 117, 255, 0.2)",
      borderColor: "#8675FF",
      pointRadius: 0,
    },
    {
      label: "Simplified",
      data: [28, 48, 40, 19, 96],
      fill: true,
      backgroundColor: "rgba(244, 71, 113, 0.2)",
      borderColor: "#F44771",
      pointRadius: 0,
    },
    {
      label: "Echo India",
      data: [34, 18, 20, 79, 23],
      fill: true,
      backgroundColor: "rgba(255, 22, 162, 0.2)",
      borderColor: "#FF16A2",
      pointRadius: 0,
    },
    {
      label: "BlueStacks",
      data: [48, 18, 80, 69, 46],
      fill: true,
      backgroundColor: "rgba(255, 187, 56, 0.2)",
      borderColor: "#FFBB38",
      pointRadius: 0,
    },
  ],
};
const radarOption = {
  animation: {
    animationRotate: true,
    duration: 2000,
  },
  tooltips: {
    display: false,
  },
  responsive: false,
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
      fullSize: false,
      position: "right",
      maxWidth: 300,
      labels: {
        usePointStyle: true,
        font: {
          family: "Poppins",
          size: 12,
        },
        padding: 26,
        color: ["#C9C9C9"],
      },
    },
  },
};

export { radarChart, radarOption };
