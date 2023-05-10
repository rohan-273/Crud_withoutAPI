import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ formData, setFormData }) => {
  function handleDelete(id) {
    let result = formData.filter((item) => item.id !== id);
    setFormData(result);
  }

  return (
    <div>
      <div>
        <Link to={"/add"}>Add User</Link>
      </div>
      <table className="table">
        <tr>
          <th scope="col">Fullname</th>
          <th scope="col">Gender</th>
          <th scope="col">MobileNo</th>
          <th scope="col">Age</th>
        </tr>
        {formData.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.gender}</td>
            <td>{item.phone}</td>
            <td>{item.age}</td>
            <td>
              <>
                <Link to={"/edit"} state={item}>
                  Edit
                </Link>
                {/* <Link to={`/edit/${item.id}`}>
                  Edit
                </Link> */}
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

export default UserList;
