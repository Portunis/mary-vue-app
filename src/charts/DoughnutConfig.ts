import AwardsModel from "@/models/AwardsModel";

const doughnutData = (doughnutData: AwardsModel) => {
  const labels = doughnutData?.achievements?.map((item) => {
    return item.name;
  });
  const count = doughnutData?.achievements?.map((item) => {
    return item.count;
  });
  const color = doughnutData?.achievements?.map((item) => {
    return item.color;
  });
  return {
    labels: labels,

    datasets: [
      {
        data: count,
        borderJoinStyle: "bevel",
        backgroundColor: color,
      },
    ],
  };
};

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
export { doughnutOptions, doughnutData };
