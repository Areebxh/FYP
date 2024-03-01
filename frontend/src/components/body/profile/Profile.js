// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Navigate } from 'react-router-dom';
// import { isLength, isMatch } from '../../utils/validation/Validation';
// import { showSuccessMsg, showErrMsg } from '../../utils/notification/Notification';
// import { useCookies } from 'react-cookie';

// const initialState = {
//   name: '',
//   password: '',
//   cf_password: '',
//   phone:'',
//   address:'',
//   err: '',
//   success: '',
// };

// function Profile() {
//   const [userinfo, setUserinfo] = useState(null);
//   const [data, setData] = useState(initialState);
//   const [cookies] = useCookies(['refreshtoken']);

//   useEffect(() => {
//     const fetchUserInfo = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/user/userinfo', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${cookies.refreshtoken}`,
//           },
//         });
//         const data = await response.json();
//         setUserinfo(data);
//         console.log(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchUserInfo();
//   }, [cookies.refreshtoken]);

//   return (
//     <>
//       <h1>areeb</h1>
//       {userinfo && userinfo.user && (
//         <table>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>password</th>
//             <th>address</th>
//             <th>phone</th>
//           </tr>
//           <tr>
//             <td>{userinfo.user.username}</td>
//             <td>{userinfo.user.email}</td>
//             <td>{userinfo.user.revenue}</td>
//             <td>{userinfo.user.service_deliveries}</td>
//           </tr>
//         </table>
//       )}
//     </>
//   );
// }

// export default Profile;
// Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ accessToken }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user/userinfo', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error fetching user data
      }
    };

    fetchUserData();
  }, [accessToken]);

  return (
    <div>
      {userData && userData.user ? (
        <div>
          <h2>Welcome, {userData.user.name}!</h2>
          <p>Email: {userData.user.email}</p>
          <p>Phone: {userData.user.phone}</p>
          <p>Address: {userData.user.address}</p>
          <img src={userData.user.avatar} alt="User Avatar" />
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Profile;
