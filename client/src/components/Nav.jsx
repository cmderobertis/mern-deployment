import React from "react"
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <div>
      <h1>Pirate Crew</h1>
      <NavLink
        to={"/pirates"}
        className={(isActive) =>
          isActive ? "btn btn-light me-3" : "btn btn-info me-3"
        }
      >
        Pirates
      </NavLink>
      <NavLink
        to={"/pirates/new"}
        className={(isActive) => (isActive ? "btn btn-light" : "btn btn-info")}
      >
        Enlist Pirate
      </NavLink>
    </div>
  )
}

export default Nav
