import React from "react";

const Reporte = (data) => {
  const redata = data?.data?.data?.diagnostic_list;

  const rateData = data?.data?.data?.diagnosis_history;

  return (
    <>
      <div className="card-group report" style={{ marginTop: "25px" }}>
        {rateData === undefined ? (
          <>
            <div className="card mx-2">
              <img
                src="https://i.ibb.co.com/dg6MxP0/temp.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Temperature</p>
                <h5 className="card-title">
                     100 F
                </h5>
                <p className="card-text">Normal</p>
              </div>
            </div>
            <div className="card mx-2">
              <img
                src="https://i.ibb.co.com/TT0fcQn/res.jpg"
                className="card-img-top "
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Respiratory rate</p>
                <h5 className="card-title">
                 30 bpm
                </h5>
                <p className="card-text">Normal</p>
              </div>
            </div>
            <div className="card">
              <img
                src="https://i.ibb.co.com/zPTgnjh/Heart-Rate-min-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Heart rate</p>
                <h5 className="card-title">
                 30 bpm
                </h5>
                <p className="card-text">Normal</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="card mx-2" style={{ width: "655px" }}>
              <img
                src="https://i.ibb.co.com/dg6MxP0/temp.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Temperature</p>
                <h5 className="card-title">
                  {rateData[0]?.temperature?.value
                    ? rateData[0]?.temperature?.value
                    : "100"}{" "}
                  F{" "}
                </h5>
                <p className="card-text">Normal</p>
              </div>
            </div>
            <div className="card mx-2" style={{ width: "655px" }}>
              <img
                src="https://i.ibb.co.com/TT0fcQn/res.jpg"
                className="card-img-top "
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Respiratory rate</p>
                <h5 className="card-title">
                  {rateData[0]?.respiratory_rate?.value
                    ? rateData[0]?.respiratory_rate?.value
                    : "30"}{" "}
                  bpm
                </h5>
                <p className="card-text">Normal</p>
              </div>
            </div>
            <div className="card" style={{ width: "655px" }}>
              <img
                src="https://i.ibb.co.com/zPTgnjh/Heart-Rate-min-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Heart rate</p>
                <h5 className="card-title">
                  {rateData[0]?.heart_rate?.value
                    ? rateData[0]?.heart_rate?.value
                    : "30"}{" "}
                  bpm
                </h5>
                <p className="card-text">Normal</p>
              </div>
            </div>
          </>
        )}
      </div>

      <h2 classNameName="fs-3 my-4"> Diagnostic List </h2>
      <div classNameName="tableDiv">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {redata?.map((item, i) => {
              return (
                <>
                  <tr key={i}>
                    <td> {item?.name ? item?.name : "Hypertention"} </td>
                    <td>
                      {" "}
                      {item?.description
                        ? item?.description
                        : "Chronic high blood pressure"}{" "}
                    </td>
                    <td>
                      {" "}
                      {item?.status ? item?.status : "Under observation"}{" "}
                    </td>
                  </tr>
                </>
              );
            })}

            {
              <>
                {redata === undefined && (
                  <>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
                      return (
                        <>
                          <tr>
                            <td> High pressure </td>
                            <td>Chronic high blood pressure</td>
                            <td>Under observation</td>
                          </tr>

                          <tr>
                            <td> Hypertention </td>
                            <td>Chronic high blood pressure</td>
                            <td>Under observation</td>
                          </tr>
                        </>
                      );
                    })}
                  </>
                )}
              </>
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Reporte;
