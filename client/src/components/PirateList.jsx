import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import DeleteButton from "./DeleteButton"

const PirateList = () => {
  const [pirates, setPirates] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pirates")
      .then((response) => setPirates(response.data))
  }, [])

  const removeFromDom = (pirateId) => {
    setPirates(pirates.filter((pirate) => pirate._id != pirateId))
  }

  return (
    <div className="card p-0 mt-3">
      <div className="card-body">
        <h4>Pirates</h4>
        <div className="card">
          <div className="card-body pt-0 pb-0">
            {pirates.map((pirate) => {
              return (
                <div key={pirate._id} className="row">
                  <div className="col-2 d-flex align-items-center justify-content-center">
                    <img
                      className="img-fluid rounded-3"
                      src={pirate.image}
                      alt={pirate.name}
                    />
                  </div>
                  <div className="col mb-3">
                    <h5 className="my-1">{pirate.name}</h5>
                    <div className="row justify-content-between">
                      <div className="col-auto">
                        <Link
                          to={"/pirates/" + pirate._id}
                          className="btn btn-primary"
                        >
                          View Pirate
                        </Link>
                      </div>
                      <div className="col-auto">
                        <Link
                          to={"/pirates/" + pirate._id + "/edit"}
                          className="btn btn-success"
                        >
                          Edit
                        </Link>
                      </div>
                      <div className="col-auto">
                        <DeleteButton
                          pirateId={pirate._id}
                          successCallback={() => removeFromDom(pirate._id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PirateList
