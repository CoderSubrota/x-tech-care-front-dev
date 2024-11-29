import ChartPrac from "./ChartPra";

const Chart = (data) => {
  return (
    <>
      <h2 className="fs-3 my-4"> Diagnosis History </h2>
      <div className="container charts">
        <div className="row">
          <div className="col">
            <ChartPrac data={data}></ChartPrac>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
