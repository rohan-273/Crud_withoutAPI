import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DynamicTable from "../DynamicTable";

const AddUser = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState();
  const [age, setAge] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    let data = {
      id: formData.length + 1,
      name: name,
      gender: gender,
      phone: phone,
      age: age,
    };
    setFormData([...formData, data]);
    navigate("/");
    setName("");
    setGender("");
    setPhone("");
    setAge("");
  }

  return (
    <div>
      <div>
        <h1>Add User</h1>
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

export default AddUser;
