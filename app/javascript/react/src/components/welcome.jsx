import * as React from 'react'
import * as ReactDOM from 'react-dom'
import QuestionList from './question_list'

const Welcome = () => {
  return(
    <div className='container'>
      <h1>Hello World! Welcome to the Rails 7 with React JS</h1>
      <p className='lead'>This is the first paragraph</p>
      <QuestionList />
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Welcome />, document.getElementById('welcome'))
})

export default Welcome
