import React, { useState } from "react";

const Crud1 = () => {
  const [formData, setFormData] = useState([]);
  const [editState, setEditState] = useState(false);
  const [editId, setEditId] = useState();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState();
  const [age, setAge] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    if (!editState) {
      let data = {
        id: formData.length + 1,
        name: name,
        gender: gender,
        phone: phone,
        age: age,
      };
      setFormData([...formData, data]);

      setName("");
      setGender("");
      setPhone("");
      setAge("");
    } 
    else {
      let data = {
        id: editId,
        name: name,
        gender: gender,
        phone: phone,
        age: age,
      };

      let result = formData.map((item) => {
        if (item.id === editId) {
          return {
            ...item,
            ...data,
          };
        }

        return item;
      });

      setFormData(result);
    }
  }

  function handleEdit(data) {
    setName(data.name);
    setPhone(data.phone);
    setGender(data.gender);
    setAge(data.age);
    setEditId(data.id);
    setEditState(true);
  }

  function handleDelete(id) {
    let result = formData.filter((item) => item.id !== id);
    setFormData(result);
  }

  return (
    <div>
      <h1>Add Form</h1>

      <form onSubmit={handleSubmit}>
        <label style={{marginRight: 5}}>Fullname</label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="enter your fullname"
        />
        <label style={{marginRight: 5}}>Gender</label>
        <input
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
          type="text"
          placeholder="enter your gender"
        />
        <label style={{marginRight: 5}}>MobileNo</label>
        <input
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          type="number"
          placeholder="enter your number"
        />
        <label style={{marginRight: 5}}>Age</label>
        <input
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          type="number"
          placeholder="enter your age"
        />
        <button type="submit" style={{marginLeft : 10}}>Submit</button>
      </form>

      <table className="table">
        <tr>
          <th scope="col">Gender</th>
          <th scope="col">Fullname</th>
          <th scope="col">MobileNo</th>
          <th scope="col">Age</th>
          <th scope="col">Action</th>
        </tr>

        {formData.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.gender}</td>
            <td>{item.phone}</td>
            <td>{item.age}</td>
            <td>
              <>
                <button
                  onClick={() => {
                    handleEdit(item);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  Delete
                </button>
              </>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Crud1;
