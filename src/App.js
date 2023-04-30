
import { useState } from 'react';
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
  const [items, setItems] = useState(photos);
  const [isCollapsed, collapse] = useState(false);

  const toggle = () => collapse(!isCollapsed);
  return (
    <>
      <Navbar />

      <div className="container text-center mt-5">
        {/* <button className='btn btn-warning mx-2' onClick={() => setItems(['https://picsum.photos/id/1009/200/200', ...items])}>+ Add</button> */}
        <button className='btn btn-success float-end' onClick={toggle}>{isCollapsed ? 'Close' : '+ Add'}</button>
        <div className="clearfix mb-4"></div>
        <UploadForm isVisible={isCollapsed} />
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
