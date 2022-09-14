import React, { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import axios from "axios"

const Pirates = () => {
  const [pirates, setPirates] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pirates")
      .then((response) => {
        setPirates(response.data)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <Outlet context={[pirates, setPirates]} />
    </div>
  )
}

export default Pirates
