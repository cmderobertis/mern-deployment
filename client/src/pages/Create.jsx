import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import PirateForm from "../components/PirateForm"

const Create = () => {
  const navigate = useNavigate()
  const [errors, setErrors] = useState([])

  const createPirate = (pirate) => {
    axios
      .post("http://localhost:8000/api/pirates", pirate)
      .then((response) => {
        console.log(response.data)
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
      <PirateForm
        onSubmitProp={createPirate}
        errors={errors}
        initialName=""
        initialImage=""
        initialChests=""
        initialCatchPhrase=""
        initialPosition="Captain"
        initialPegLeg={true}
        initialEyePatch={true}
        initialHookHand={true}
        heading="Add Pirate"
      ></PirateForm>
    </div>
  )
}

export default Create
