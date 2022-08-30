import React from 'react'
import ReactDOM from 'react-dom'

const EmptyQuestionMessage = (props) => {
  return(
    <div className=" mt-5 alert alert-warning alert-dismissible fade show" role="alert">
      <strong>OOPs!</strong> No questions found with the tag: {props.tagname}. Please select an other option from the list.
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default EmptyQuestionMessage;
