import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DynamicTable from "../DynamicTable";

const EditUser = ({ formData, setFormData }) => {
//   const params = useParams();
//   const id = parseInt(params.id);
  const navigate = useNavigate();
  const location = useLocation();
  const id = parseInt(location.state.id);

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState();
  const [age, setAge] = useState();

  useEffect(() => {
    // if (formData) {
    //   formData.map((item) => {
    //     if (item.id === id) {
    //       setName(item.name);
    // setPhone(item.phone);
    // setGender(item.gender);
    // setAge(item.age);
    //     }
    //   });
    // }
    if (location.state) {
      setName(location.state.name);
      setPhone(location.state.phone);
      setGender(location.state.gender);
      setAge(location.state.age);
    }
  }, [location.state]);

  function handleSubmit(e) {
    e.preventDefault();
    let data = {
      id: id,
      name: name,
      gender: gender,
      phone: phone,
      age: age,
    };

    let result = formData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          ...data,
        };
      }

      return item;
    });

    setFormData(result);
    navigate("/");
  }

  return (
    <div>
      <div>
        <h1>Edit User</h1>
      </div>
      <DynamicTable
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        phone={phone}
        setAge={setAge}
        setGender={setGender}
        setPhone={setPhone}
        age={age}
        gender={gender}
    
    />
    </div>
  );
};

export default EditUser;
