import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import QuestionList from './question_list'

class Welcome extends React.Component {
  render() {
    return(
      <div className='container'>
        <h1>Hello World! Welcome to the Rails 7 with React JS</h1>
        <p className='lead'>This is the first paragraph</p>
        <QuestionList />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('welcome'))
root.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
)

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(<Welcome />, document.getElementById('welcome'))
// })

export default Welcome
