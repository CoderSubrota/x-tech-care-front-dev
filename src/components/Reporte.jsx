import React from "react";

const Reporte = () => {
  return (
    <>
      <div class="card-group" style={{ marginTop: "25px" }}>
        <div class="card mx-2" style={{ width: "655px" }}>
          <img
            src="https://i.ibb.co.com/dg6MxP0/temp.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text">Temperature</p>
            <h5 class="card-title">98.6 F</h5>
            <p class="card-text">Normal</p>
          </div>
        </div>
        <div class="card mx-2" style={{ width: "655px" }}>
          <img
            src="https://i.ibb.co.com/TT0fcQn/res.jpg"
            class="card-img-top "
            alt="..."
          />
          <div class="card-body">
            <p class="card-text">Respiratory rate</p>
            <h5 class="card-title">20 bpm</h5>
            <p class="card-text">Normal</p>
          </div>
        </div>
        <div class="card" style={{ width: "655px" }}>
          <img
            src="https://i.ibb.co.com/zPTgnjh/Heart-Rate-min-1.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text">Heart rate</p>
            <h5 class="card-title">78 bpm</h5>
            <p class="card-text">Normal</p>
          </div>
        </div>
      </div>
      <h2 className="fs-3 my-4"> Diagnostic List </h2>
      <div className="tableDiv">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Hypertention </td>
              <td>Chronic high blood pressure</td>
              <td>Under observation</td>
            </tr>

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

            <tr>
              <td> Low pressure </td>
              <td>Chronic high blood pressure</td>
              <td>Under observation</td>
            </tr>
            <tr>
              <td> Hypertention </td>
              <td>Chronic high blood pressure</td>
              <td>Under observation</td>
            </tr>

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

            <tr>
              <td> Low pressure </td>
              <td>Chronic high blood pressure</td>
              <td>Under observation</td>
            </tr>
            <tr>
              <td> Hypertention </td>
              <td>Chronic high blood pressure</td>
              <td>Under observation</td>
            </tr>

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

            <tr>
              <td> Low pressure </td>
              <td>Chronic high blood pressure</td>
              <td>Under observation</td>
            </tr>
            <tr>
              <td> Hypertention </td>
              <td>Chronic high blood pressure</td>
              <td>Under observation</td>
            </tr>

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

            <tr>
              <td> Low pressure </td>
              <td>Chronic high blood pressure</td>
              <td>Under observation</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Reporte;
