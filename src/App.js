
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import UploadForm from './components/UploadForm';

const photos = [
  'https://picsum.photos/id/1001/200/200',
  'https://picsum.photos/id/1002/200/200',
  'https://picsum.photos/id/1003/200/200',
  'https://picsum.photos/id/1004/200/200',
  'https://picsum.photos/id/1005/200/200',
  'https://picsum.photos/id/1006/200/200',
  'https://picsum.photos/id/1008/200/200',

]

function App() {
  const [count, setCount] = useState();
  // const [input, setInput] = useState();
  const [inputs, setInputs] = useState({ title: null, file: null, path: null });
  const [items, setItems] = useState(photos);
  const [isCollapsed, collapse] = useState(false);
  const toggle = () => collapse(!isCollapsed);
  // const handleOnChange = (e) => setInput(e.target.value)
  // const handleOnChange = (e) => {
  //   setInput({ title: e.target.value, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0]) })
  // }
  const handleOnChange = (e) => {
    if (e.target.name === 'file') {
      setInputs({ ...inputs, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0]) })
    }
    else {
      setInputs({ ...inputs, title: e.target.value })
    }
  }
  const handleOnSubmit = (e) => {
    e.preventDefault() // the default behavior with the form is that it's going to refresh the page.
    setItems([inputs.path, ...items])
  }
  useEffect(() => {
    setCount(`you have ${items.length} image${items.length > 1 ? 's' : ''}`) //use backticks because want to use some static content with local variables
  }, [items])
  return (
    <>
      <Navbar />

      <div className="container text-center mt-5">
        {/* <button className='btn btn-warning mx-2' onClick={() => setItems(['https://picsum.photos/id/1009/200/200', ...items])}>+ Add</button> */}
        <button className='btn btn-success float-end' onClick={toggle}>{isCollapsed ? 'Close' : '+ Add'}</button>
        <div className="clearfix mb-4"></div>
        <UploadForm isVisible={isCollapsed} onChange={handleOnChange} onSubmit={handleOnSubmit} />
        {count}
        <h1>Gallery</h1>
        <div className="row">
          {/*
          {Array.apply(null, { length: 9 }).map(() => <Card />)}

         creates an array of length 9 with null values using the apply() method of the Array constructor. The null value is used as a placeholder for each element of the array.
          Once the array is created, the map() method is called on it. The map() method creates a new array by calling the specified function on each element of the original array. In this case, the function being passed to map() is an empty function that does nothing.  */}
          {/* {photos.map((photo) => <Card src={photo} />)} */}
          {items.map((photo) => <Card src={photo} />)}
        </div>
      </div>
    </>
  );
}

export default App;
