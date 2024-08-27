import React, { useEffect } from "react";
import { data } from "../ProductData/data.js";
import { Link,useNavigate } from "react-router-dom";

export default function Productlist() {

  // useNavigate function here 
  const navigate = useNavigate();

  useEffect(() => {
    console.log("data", data);
  }, []);

  return (
    <div className="container">
      <div className="row">
        {data.map((data1, index) => {
          return (
            <div className="col-sm-3" key="">
              <div className="card mt-4 mb-4" style={{ width: "18rem" }}>
                <img
                  src={data1.img}
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title" onClick={() => navigate('/productdetails1', { state :  data1  })}>{data1?.name}</h5>
                  <p className="card-text">{data1?.price}</p>
                  <Link to={`/productdetails/${data1?.id}`} className="btn btn-primary">
                    View
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
