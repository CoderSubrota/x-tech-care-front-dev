import LineChart from "./LineChart";
import PieChart from "./PieChart";

const Chart = () => {
 return (
    <>
      <div className="container">
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