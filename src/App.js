import { useState } from 'react'
import './App.css'
import FormComponent from './form'
import TableComponent from './table'

function App() {
  const initialState = { id: null, firstName: '', lastName: '' }
  const [isShow, setIsShow] = useState(true)
  const [name, setName] = useState(initialState)
  const changeHandler = (e) => {
    setName({
      ...name,
      id: Math.round(Math.random() * 1000),
      [e.target.name]: e.target.value,
    })
  }
  const showHandler = (name) => {
    let getItem = JSON.parse(localStorage.getItem('nameList'))
    if (name) {
      let filteredArr = getItem.filter((data) => data.id !== name.id)
      localStorage.setItem('nameList', JSON.stringify(filteredArr))
      setName(name)
      setIsShow(!isShow)
    } else {
      setIsShow(!isShow)
      setName(initialState)
    }
  }
  console.log('Show:::', isShow)
  return (
    <div>
      {isShow ? (
        <FormComponent
          showHandler={showHandler}
          name={name}
          changeHandler={changeHandler}
        />
      ) : (
        <TableComponent showHandler={showHandler} />
      )}
    </div>
  )
}

export default App
