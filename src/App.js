// import { Route, Routes } from 'react-router-dom';
import './App.css';
// import UserList from './Crud-2/UserList';
// import AddUser from './Crud-2/AddUser';
// import EditUser from './Crud-2/EditUser';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import OnePageCrud from './Crud-1/OnePageCrud';
import SinglePageCrud from './Crud-1/SinglePageCrud';
// import OnePageCrud from './Crud-1/OnePageCrud';
// import Crud1 from './Crud-1';

function App() {

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

  return (
    // <OnePageCrud />
    <SinglePageCrud />
    // <div>
    //   <Routes>
    //   <Route path='/' exact element={<UserList  formData={formData} setFormData={setFormData} />} />
    //   <Route path='/add' exact element={<AddUser formData={formData} setFormData={setFormData} />} />
    //   {/* <Route path='/edit/:id' exact element={<EditUser formData={formData} setFormData={setFormData} />} /> */}
    //   <Route path='/edit' exact element={<EditUser formData={formData} setFormData={setFormData} />} />
    //   </Routes>
      // {/* <OnePageCrud /> */}
    //   {/* <Crud1 /> */}
    // </div>
   
  );
}

export default App;
