// ...................Checkbox using object

import React, { useState } from "react";

const OnePageCrud = () => {
  const [formData, setFormData] = useState([]);
  const [editState, setEditState] = useState(false);
  const [editId, setEditId] = useState();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState();
  const [age, setAge] = useState();
  const [hobby, setHobby] = useState({cricket:false, music:false, travelling:false});

  function handleSubmit(e) {
    e.preventDefault();

    if (!editState) {
      let data = {
        id: formData.length + 1,
        name: name,
        gender: gender,
        phone: phone,
        age: age,
        hobby: hobby,
      };
      console.log(data)
      setFormData([...formData, data]);

      setName("");
      setGender("");
      setPhone("");
      setAge("");
      setHobby({cricket:false, music:false, travelling:false});
    } else {
      let data = {
        id: editId,
        name: name,
        gender: gender,
        phone: phone,
        age: age,
        hobby: hobby,
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

      setName("");
      setGender("");
      setPhone("");
      setAge("");
      setHobby({cricket:false, music:false, travelling:false});
    }
  }


  function handleEdit(items) {
    setName(items.name);
    setGender(items.gender);
    setPhone(items.phone);
    setAge(items.age);
    setEditId(items.id);
    setHobby(items.hobby);
    setEditState(true);
  }

  function handleDelete(id) {
    let result = formData.filter((item) => item.id !== id);
    setFormData(result);
  }
console.log(hobby)
  return (
    <div>
      <div>
        <h1>Form</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Fullname</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="enter your name"
        />
        <label>Gender</label>
        <input
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          type="text"
          placeholder="enter your gender"
        />
        <label>MobileNo</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          placeholder="enter your number"
        />
        <label>Age</label>
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="enter your age"
        />
        <label>Hobby: </label>
        <input checked={hobby.cricket} onChange={(e) => setHobby({...hobby, cricket:e.target.checked})} type="checkbox"  />
        <lable>Cricket</lable>
        <input checked={hobby.music} onChange={(e) => setHobby({...hobby, music:e.target.checked})} type="checkbox" />
        <lable>Music</lable>
        <input checked={hobby.travelling} onChange={(e) => setHobby({...hobby, travelling:e.target.checked})} type="checkbox" />
        <lable>Travelling</lable>
        <button type="submit">Submit</button>
      </form>

      <div>
        <table className="table">
          <tr>
            <th scope="col">Fullname</th>
            <th scope="col">Gender</th>
            <th scope="col">MobileNo</th>
            <th scope="col">Age</th>
            <th scope="col">Hobby</th>
            <th scope="col">Action</th>
          </tr>
          {formData.map((item) => (

            
            <tr>
           {console.log(item.hobby.cricket)}
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.phone}</td>
              <td>{item.age}</td>
              <td>{item.hobby.cricket ? "Cricket" : "" } {item.hobby.music ? ",music" : ""} {item.hobby.travelling ? ",travelling" : ""}</td>
              <td>
                <button
                  onClick={() => {
                    handleEdit(item);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => {handleDelete(item.id)}}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default OnePageCrud;
