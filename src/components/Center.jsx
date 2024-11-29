
import Chart from "./Chart";
import Reporte from "./Reporte";

const Center = (data) => {

  return (
    <>
      <div className="center">
        <div className="chart">
          <Chart data={data}></Chart>
          <Reporte data={data}></Reporte>
        </div>
      </div>
    </>
  );
};

export default Center;
