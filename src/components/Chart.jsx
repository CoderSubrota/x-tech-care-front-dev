import LineChart from "./LineChart";
import PieChart from "./PieChart";

const Chart = () => {
 return (
    <>
          <h2 className="fs-3 my-4"> Diagnosis History </h2>
      <div className="container charts">
        <div className="row">
            <div className="col">
                <LineChart></LineChart>
            </div>
            <div className="col">
                <PieChart></PieChart>
            </div>
        </div>
      </div>
    </>
 )
}

export default Chart;