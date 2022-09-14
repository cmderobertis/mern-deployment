import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import "./App.css"
import Nav from "./components/Nav"
import Pirates from "./components/Pirates"
import AllPirates from "./pages/AllPirates"
import ShowPirate from "./pages/ShowPirate"
import Create from "./pages/Create"
import Update from "./pages/Update"

function App() {
  return (
    <div className="row justify-content-center">
      <Nav />
      <div className="col-lg-8 col-md-10 col-sm-12">
        <Routes>
          <Route path="/" element={<Navigate to="/pirates" />} />
          <Route path="/pirates" element={<Pirates />}>
            <Route index element={<AllPirates />} />
            <Route path="new" element={<Create />} />
            <Route path=":id" element={<ShowPirate />} />
            <Route path=":id/edit" element={<Update />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
