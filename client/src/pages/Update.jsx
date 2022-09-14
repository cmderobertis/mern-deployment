import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import PirateForm from "../components/PirateForm"
import DeleteButton from "../components/DeleteButton"

const Update = () => {
  const [pirate, setPirate] = useState(null)
  const navigate = useNavigate()
  const { id } = useParams()
  const [errors, setErrors] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/pirates/" + id).then((response) => {
      setPirate(response.data)
    })
  }, [])

  const updatePirate = (pirate) => {
    axios
      .put("http://localhost:8000/api/pirates/" + id, pirate)
      .then((response) => {
        console.log(response)
        navigate("/pirates")
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors
        const errorArr = []
        for (const key in errorResponse) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr)
      })
  }

  return (
    <div className="mt-3">
      {pirate && (
        <>
          <PirateForm
            onSubmitProp={updatePirate}
            initialName={pirate.name}
            initialImage={pirate.image}
            initialChests={pirate.chests}
            initialCatchPhrase={pirate.catchPhrase}
            initialPosition={pirate.position}
            initialPegLeg={pirate.pegLeg}
            initialEyePatch={pirate.eyePatch}
            initialHookHand={pirate.hookHand}
            heading="Update Pirate"
            errors={errors}
          />
          <p></p>
          <DeleteButton
            pirateId={pirate._id}
            successCallback={() => navigate("/")}
          />
        </>
      )}
    </div>
  )
}

export default Update
