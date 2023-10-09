import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exportingInit from "highcharts/modules/exporting";
import exportDataInit from "highcharts/modules/export-data";
import Highcharts3D from "highcharts/highcharts-3d"; // Import Highcharts 3D module
import { Button, Flex } from "@chakra-ui/react";

// Initialize the exporting, export-data, and 3D modules
exportingInit(Highcharts);
exportDataInit(Highcharts);
Highcharts3D(Highcharts);

// Your Highcharts configuration options for 3D Pie Chart
const options3D = {
  chart: {
    type: "pie",
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0,
      depth: 50,
      viewDistance: 25,
    },
  },
  title: {
    text: "GRAFIK AGAMA WARGA",
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      depth: 35,
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b>: {point.y}",
      },
    },
  },
  series: [
    {
      name: "Agama",
      colorByPoint: true,
      data: [
        { name: "Islam", y: 29385 },
        { name: "Budha", y: 54 },
        { name: "Hindu", y: 164 },
        { name: "Katolik", y: 455 },
        { name: "Kristen", y: 540 },
        { name: "Konghucu", y: 39 },
      ],
    },
  ],
};

const optionsBar = {
  chart: {
    type: "bar",
  },
  title: {
    text: "GRAFIK AGAMA WARGA",
  },
  xAxis: {
    categories: [
      "Islam",
      "Budha",
      "Hindu",
      "Katolik",
      "Kristen",
      "Konghucu",
    ],
  },
  yAxis: {
   
  },
  series: [
    {
      name: "Jumlah",
      data: [29385, 54, 164, 455, 540, 39],
    },
  ],
};

function ChartAgama() {
  const [chartOptions, setChartOptions] = useState(options3D);

  const switchTo3D = () => {
    setChartOptions(options3D);
  };

  const switchToBar = () => {
    setChartOptions(optionsBar);
  };

  return (
    <>
    <Flex justifyContent={'center'} gap={5}>
      <Button colorScheme="facebook" onClick={switchTo3D}>3D Pie Chart</Button>
      <Button colorScheme="facebook" onClick={switchToBar}>Bar Chart</Button>
      </Flex>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </>
  );
}

export default ChartAgama;
