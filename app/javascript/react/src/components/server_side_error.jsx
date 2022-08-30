import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffet } from 'react'

const ServerSideError = (props) => {
  return(
    <div>
      <p className="lead fw-bold">Please fix the errors below</p>
      { props.errors.map((error, index) => (
        <p className="text-danger" key={index}>{error}</p>
      )) }
    </div>
  )
}

export default ServerSideError
