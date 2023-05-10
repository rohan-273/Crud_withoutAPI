import { Route, Routes } from 'react-router-dom';
import './App.css';
// import UserList from './Crud-2/UserList';
// import AddUser from './Crud-2/AddUser';
// import EditUser from './Crud-2/EditUser';
import { useState } from 'react';
import { useEffect } from 'react';
// import OnePageCrud from './Crud-1/OnePageCrud';
// import Crud1 from './Crud-1';

function App() {

const [count, setCount] = useState(0);


  // const [formData, setFormData] = useState([
    // {
    //     "id": 1,
    //     "name": "asdasd",
    //     "gender": "asdasd",
    //     "phone": "34234",
    //     "age": "234234"
    // },
    // {
    //     "id": 2,
    //     "name": "234234",
    //     "gender": "dfssdf",
    //     "phone": "34234",
    //     "age": "234234"
    // }
// ]);
useEffect(() => {
  if(count < 0) {
    setCount(0);
  }
},[count])


console.log(count)
  return (
    // <div>
    //   <Routes>
    //   <Route path='/' exact element={<UserList  formData={formData} setFormData={setFormData} />} />
    //   <Route path='/add' exact element={<AddUser formData={formData} setFormData={setFormData} />} />
    //   {/* <Route path='/edit/:id' exact element={<EditUser formData={formData} setFormData={setFormData} />} /> */}
    //   <Route path='/edit' exact element={<EditUser formData={formData} setFormData={setFormData} />} />
    //   </Routes>
    //   {/* <OnePageCrud /> */}
    //   {/* <Crud1 /> */}
    // </div>
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
