import React, { useEffect } from "react";
import "../../styles/usermanage.css";
import axios from "axios";
import { useState } from "react";



const HostelManage = () => {
  const [allHostels, setHostel] = useState([{}]);
  const options = {
    url: "http://localhost:5000/admin/gethostel",
    method: "POST",
  };
  useEffect(() => {
    axios(options)
      .then((response) => {
        const a = response.data;
        setHostel(a);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function Show(obj) {
    return (
      <Row
      
        name={obj.name}
        description={obj.description}
        address={obj.address}
        owner={obj.owner}
        isApproved={obj.isApproved}
      />
    );
  }

  return (
    <>
      <h1 id="title">Manage Hostel Pannel</h1>
      <div className="box">
        <table className="table table-striped">
          <thead>
       
            <th>Name</th>
            <th>Description</th>
            <th>Address</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Reject</th>
            <th>Approve</th>
            <th>Delete</th>
          </thead>

          <tbody>{allHostels.map(Show)}</tbody>
        </table>
      </div>
    </>
  );
};

const Row = (props) => {
  const delHandel = () => {
    const request = {
      url: "http://localhost:5000/admin/deletehostel",
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

  const rejectHandel = () => {
    const request = {
      url: "http://localhost:5000/admin/rejecthostel",
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

  const approveHandel = () => {
    const request = {
      url: "http://localhost:5000/admin/approvehostel",
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
  if (props.isApproved) {
    st = "approve";
  } else {
    st = "reject";
  }

  return (
    <>
      <tr>
        <td>{props.name}</td>
        <td>{props.description}</td>
        <td>{props.address}</td> 
        <td>{props.owner}</td>
        <td>{st}</td>
        <td>
          <button className="blockbutt" onClick={rejectHandel}>
            Reject
          </button>
        </td>
        <td>
          <button className="openbutt" onClick={approveHandel}>
            Approve
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

export default HostelManage;