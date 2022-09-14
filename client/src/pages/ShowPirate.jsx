import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams, NavLink, useNavigate } from "react-router-dom"

const ShowPirate = () => {
  const { id } = useParams()
  const [pirate, setPirate] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pirates/" + id)
      .then((response) => setPirate(response.data))
      .catch((error) => console.error(error))
  }, [])

  const deletePirate = (pirateId) => {
    axios
      .delete("http://localhost:8000/api/pirates/" + pirateId)
      .then((response) => {
        navigate("/pirates")
      })
      .catch((error) => console.error(error))
  }

  return (
    <div className="mt-3">
      <div className="col">
        {pirate && (
          <div className="card">
            <div className="card-header">
              <h2 className="mb-0">{pirate.name}</h2>
            </div>
            <div className="card-body">
              <div className="row justify-content-between">
                <div className="col-6">
                  <img
                    src={pirate.image}
                    alt={pirate.name}
                    className="rounded-3 img-fluid"
                  />
                  <h2 className="mt-2">"{pirate.catchPhrase}"</h2>
                  <div className="row justify-content-between">
                    <div className="col-auto">
                      <NavLink
                        className="btn btn-success"
                        to={"/pirates/" + pirate._id + "/edit"}
                      >
                        Edit
                      </NavLink>
                    </div>
                    <div className="col-auto">
                      <button
                        className="btn btn-danger"
                        onClick={(e) => {
                          deletePirate(pirate._id)
                        }}
                      >
                        Walk the Plank
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card">
                    <h3 className="my-1">About</h3>
                    <div className="card-body text-start">
                      <p>Position: {pirate.position}</p>
                      <p>Treasures: {pirate.chests}</p>
                      <p>Peg Leg: {pirate.pegLeg ? "Yes" : "No"}</p>
                      <p>Eye Patch: {pirate.eyePatch ? "Yes" : "No"}</p>
                      <p>Hook Hand: {pirate.hookHand ? "Yes" : "No"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ShowPirate
