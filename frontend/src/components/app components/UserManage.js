import React, { useEffect } from "react";
import "../../styles/usermanage.css";
import axios from "axios";
import { useState } from "react";



const UserManage = () => {
  const [allUsers, setUsers] = useState([{}]);
  const options = {
    url: "http://localhost:5000/user/getUsers",
    method: "POST",
  };
  useEffect(() => {
    axios(options)
      .then((response) => {
        const a = response.data;
        setUsers(a);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function Show(obj) {
    return (
      <Row
      
        name={obj.name}
        phone_number={obj.phone}
        email={obj.email}
        role={obj.role}
        isBlock={obj.isBlock}
      />
    );
  }

  return (
    <>
      <h1 id="title">Manage User Pannel</h1>
      <div className="box">
        <table className="table table-striped">
          <thead>
       
            <th>Name</th>
            <th>Phone No</th>
            <th>Email</th>
            <th>role</th>
            <th>Status</th>
            <th>Block</th>
            <th>UnBlock</th>
            <th>Delete</th>
          </thead>

          <tbody>{allUsers.map(Show)}</tbody>
        </table>
      </div>
    </>
  );
};

const Row = (props) => {
  const delHandel = () => {
    const request = {
      url: "http://localhost:5000/user/deleteUser",
      method: "POST",
      data: props,
    };

    axios(request)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const blockHandel = () => {
    const request = {
      url: "http://localhost:5000/user/block",
      method: "POST",
      data: props,
    };

    axios(request)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unBlockHandel = () => {
    const request = {
      url: "http://localhost:5000/user/unblock",
      method: "POST",
      data: props,
    };

    axios(request)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let st = "";
  if (props.isBlock) {
    st = "Blocked";
  } else {
    st = "open";
  }

  return (
    <>
      <tr>
        <td>{props.name}</td>
        <td>{props.phone_number}</td>
        <td>{props.email}</td> 
        <td>{props.role}</td>
        <td>{st}</td>
        <td>
          <button className="blockbutt" onClick={blockHandel}>
            Block
          </button>
        </td>
        <td>
          <button className="openbutt" onClick={unBlockHandel}>
            Open
          </button>
        </td>
        <td>
          <button className="dellbutt" onClick={delHandel}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default UserManage;