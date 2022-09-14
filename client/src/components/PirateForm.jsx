import React, { useState } from "react"

const PirateForm = ({
  initialName,
  initialImage,
  initialChests,
  initialCatchPhrase,
  initialPosition,
  initialPegLeg,
  initialEyePatch,
  initialHookHand,
  onSubmitProp,
  heading,
  errors,
}) => {
  const [name, setName] = useState(initialName)
  const [image, setImage] = useState(initialImage)
  const [chests, setChests] = useState(initialChests)
  const [catchPhrase, setCatchPhrase] = useState(initialCatchPhrase)
  const [position, setPosition] = useState(initialPosition)
  const [pegLeg, setPegLeg] = useState(initialPegLeg)
  const [eyePatch, setEyePatch] = useState(initialEyePatch)
  const [hookHand, setHookHand] = useState(initialHookHand)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    onSubmitProp({
      name: name ? name.replace(/^./, name[0].toUpperCase()) : name,
      image,
      chests,
      catchPhrase,
      position,
      pegLeg,
      eyePatch,
      hookHand,
    })
  }

  return (
    <div className="card">
      <div className="card-body">
        <h4>{heading}</h4>
        <div className="card">
          <div className="card-body">
            <form onSubmit={onSubmitHandler}>
              {errors.map((err, idx) => (
                <p key={idx} className="text-danger">
                  {err}
                </p>
              ))}
              <div className="row">
                <div className="col-6">
                  <p className="mb-0">
                    <label htmlFor="name">Pirate Name</label>
                    <br />
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </p>
                  {!name ? (
                    <p className="text-danger">Name is required</p>
                  ) : (
                    <p>⁣</p>
                  )}
                  <p className="mb-0">
                    <label htmlFor="image">Image URL</label>
                    <br />
                    <input
                      type="text"
                      name="image"
                      onChange={(e) => setImage(e.target.value)}
                      value={image}
                    />
                  </p>
                  {!image ? (
                    <p className="text-danger">Image URL is required</p>
                  ) : (
                    <p>⁣</p>
                  )}
                  <p className="mb-0">
                    <label htmlFor="chests">Number of Treasure Chests</label>
                    <br />
                    <input
                      type="number"
                      min="0"
                      step="1"
                      name="chests"
                      onChange={(e) => setChests(e.target.value)}
                      value={chests}
                    />
                  </p>
                  {!chests && chests !== 0 ? (
                    <p className="text-danger">Number of chests is required</p>
                  ) : (
                    <p>⁣</p>
                  )}
                  <p className="mb-0">
                    <label htmlFor="catchPhrase">Catch Phrase</label>
                    <br />
                    <input
                      type="text"
                      name="catchPhrase"
                      onChange={(e) => setCatchPhrase(e.target.value)}
                      value={catchPhrase}
                    />
                  </p>
                  {!catchPhrase ? (
                    <p className="text-danger">Catch phrase is required</p>
                  ) : (
                    <p>⁣</p>
                  )}
                </div>
                <div className="col-6">
                  <p>
                    <label htmlFor="position">Crew Position</label>
                    <br />
                    <select
                      name="position"
                      onChange={(e) => setPosition(e.target.value)}
                      value={position}
                    >
                      <option value="Captain">Captain</option>
                      <option value="First Mate">First Mate</option>
                      <option value="Quarter Master">Quarter Master</option>
                      <option value="Boatswain">Boatswain</option>
                      <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                  </p>
                  <p>
                    <input
                      type="checkbox"
                      checked={pegLeg}
                      onChange={(e) => setPegLeg(e.target.checked)}
                      className="me-1"
                    />
                    <label htmlFor="pegLeg">Peg Leg</label>
                  </p>
                  <p>
                    <input
                      type="checkbox"
                      checked={eyePatch}
                      onChange={(e) => setEyePatch(e.target.checked)}
                      className="me-1"
                    />
                    <label htmlFor="eyePatch">Eye Patch</label>
                  </p>
                  <p>
                    <input
                      type="checkbox"
                      checked={hookHand}
                      onChange={(e) => setHookHand(e.target.checked)}
                      className="me-1"
                    />
                    <label htmlFor="hookHand">Hook Hand</label>
                  </p>
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PirateForm
