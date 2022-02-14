import { useState } from 'react'
export default function FormComponent({ name, changeHandler, showHandler }) {
  const { id, firstName, lastName } = name
  const updateHandler = () => {
    let getItem = JSON.parse(localStorage.getItem('nameList'))
    getItem === null
      ? localStorage.setItem('nameList', JSON.stringify([name]))
      : localStorage.setItem('nameList', JSON.stringify([...getItem, name]))
  }
  return (
    <div className="container">
      <h1>React CRUD operations</h1>
      <div className="fname">
        <label>First Name</label>
        <br />
        <div>
          <input
            type="text"
            value={firstName}
            name="firstName"
            placeholder="Enter first name"
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="laname">
        <label>Last Name</label>
        <br />
        <br />
        <input
          type="text"
          value={lastName}
          name="lastName"
          placeholder="Enter last name"
          onChange={changeHandler}
        />
      </div>

      <div className="btn">
        <button
          className="update-btn"
          disabled={firstName === '' || lastName === ''}
          onClick={() => {
            updateHandler()
            showHandler()
          }}
        >
          Update
        </button>
      </div>
    </div>
  )
}
