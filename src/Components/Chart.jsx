import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

function Chart() {
  return (
    <div>
      <PieChart
        colors={["red", "green"]}
        series={[
          {
            data: [
              { id: 1, value: 82, label: "Presented", color: "green" },
              { id: 2, value: 18, label: "Absents", color: "red" },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
}

export default Chart;
