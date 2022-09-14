import React from "react"
import { useOutletContext } from "react-router-dom"
import PirateList from "../components/PirateList"

const AllPirates = () => {
  const [pirates] = useOutletContext()
  return <div>{pirates && <PirateList pirates={pirates}></PirateList>}</div>
}

export default AllPirates
