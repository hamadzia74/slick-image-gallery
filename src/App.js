
import { useEffect, useReducer, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import UploadForm from './components/UploadForm';

// const photos = [
//   'https://picsum.photos/id/1001/200/200',
//   'https://picsum.photos/id/1002/200/200',
//   'https://picsum.photos/id/1003/200/200',
//   'https://picsum.photos/id/1004/200/200',
//   'https://picsum.photos/id/1005/200/200',
//   'https://picsum.photos/id/1006/200/200',
//   'https://picsum.photos/id/1008/200/200',

// ]
const photos = []
const initialState = {
  items: photos,
  count: photos.length,
  inputs: { title: null, file: null, path: null },
  isCollapsed: false
}
const handleOnChange = (state, e) => {
  if (e.target.name === 'file') {
    return { ...state.inputs, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0]) }
  }
  else {
    return { ...state.inputs, title: e.target.value }
  }
}
function reducer(state, action) {
  switch (action.type) {
    case 'setItem':
      return {
        ...state,
        items: [state.inputs, ...state.items]
      }
    case 'setInputs':
      return {
        ...state,
        inputs: handleOnChange(state, action.payload.value)
      }
    case 'collapse':
      return {
        ...state,
        iseCollapsed: action.payload.bool
      }
    default: return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [count, setCount] = useState();
  // const [input, setInput] = useState();
  // const [inputs, setInputs] = useState({ title: null, file: null, path: null });
  // const [items, setItems] = useState(photos);
  // const [isCollapsed, collapse] = useState(false);
  // const toggle = () => collapse(!isCollapsed);
  // const toggle = () => dispatch( {type: "collapse", payload: { bool: !state.isCollapsed }} )
  const toggle = (bool) => dispatch({ type: "collapse", payload: { bool } })
  // const handleOnChange = (e) => setInput(e.target.value)
  // const handleOnChange = (e) => {
  //   setInput({ title: e.target.value, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0]) })
  // }
  // const handleOnChange = (e) => {
  //   if (e.target.name === 'file') {
  //     setInputs({ ...inputs, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0]) })
  //   }
  //   else {
  //     setInputs({ ...inputs, title: e.target.value })
  //   }
  // }
  const handleOnChange = (e) => dispatch({ type: 'setInputs', payload: { value: e } })
  const handleOnSubmit = (e) => {
    e.preventDefault() // the default behavior with the form is that it's going to refresh the page.
    // setItems([inputs.path, ...items])
    // dispatch({ type: 'setItem', payload: { path: inputs }})
    dispatch({ type: 'setItem' })

    // setInputs({ title: null, file: null, path: null })
    // collapse(false)
    toggle(!state.isCollapsed)
  }
  // useEffect(() => {
  //   console.log(state)
  // }, [state.items])

  useEffect(() => {
    setCount(`you have ${state.items.length} image${state.items.length > 1 ? 's' : ''}`) //use backticks because want to use some static content with local variables
  }, [state.items])
  return (
    <>
      <Navbar />

      <div className="container text-center mt-5">
        {/* <button className='btn btn-warning mx-2' onClick={() => setItems(['https://picsum.photos/id/1009/200/200', ...items])}>+ Add</button> */}
        <button className='btn btn-success float-end' onClick={() => toggle(!state.isCollapsed)}>{state.isCollapsed ? 'Close' : '+ Add'}</button>
        <div className="clearfix mb-4"></div>
        <UploadForm inputs={state.inputs} isVisible={state.isCollapsed} onChange={handleOnChange} onSubmit={handleOnSubmit} />
        {count}
        <h1>Gallery</h1>
        <div className="row">
          {/*
          {Array.apply(null, { length: 9 }).map(() => <Card />)}

         creates an array of length 9 with null values using the apply() method of the Array constructor. The null value is used as a placeholder for each element of the array.
          Once the array is created, the map() method is called on it. The map() method creates a new array by calling the specified function on each element of the original array. In this case, the function being passed to map() is an empty function that does nothing.  */}
          {/* {photos.map((photo) => <Card src={photo} />)} */}
          {state.items.map((photo, index) => <Card key={index} src={photo.path} />)}
        </div>
      </div>
    </>
  );
}

export default App;
