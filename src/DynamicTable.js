import React from "react";

const DynamicTable = ({handleSubmit, name, setName, gender, setGender, phone, setPhone, age, setAge}) => {
  return (
    <div>
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
        <label>Phone </label>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DynamicTable;
