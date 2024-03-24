import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import "../../../styles/profile.css"
import pr from "../../../assets/profile.png"

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  
  const [editData, setEdit] = useState({
    email: '',
    // avatar: '',
    phone: ''
  })

const handleChangeInput = e => {
  console.log(":kaam")
  const { name, value } = e.target
  setEdit({ ...editData, [name]: value })
}
const access_token = Cookies.get('access_token');
const fetchUserData = async () => {
  console.log("acc tok is ", access_token)
  try {
    const response = await axios.get("http://localhost:5000/user/userinfo", {
      headers: {
        Authorization: access_token
      }
    }).then((res) => {
      console.log("info is ", res.data)
      setUserData(res.data);
    }
    );

  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};


  useEffect(() => {
    
    if (access_token) {
      fetchUserData();
    }
  }, []);

  return (
    <div className="profile-container">
    <div className="profile-card">
      
       
            <div className="avatar-container">
                {userData && (
                    <img src={userData.avatar} alt="Avatar" className="avatar-image" />
                )}
            </div>
            <div className="user-details">
                {userData && (
                    <>
                        <h2>{userData.name}</h2>
                        <p>Email: {userData.email}</p>
                        <p>Contact: {userData.phone}</p>
                        <p>Role: {userData.role === 1 ? 'Owner' : 'User'}</p>
                        
                      
                       <button className='btn btn-primary' onClick={()=>{
                          let form =document.getElementById("edit")
                          form.classList.remove("hide")
                       }}>Edit</button>
                        <div id='edit'  className='hide'>
                <input type="text" name='email' placeholder='Email' style={{border:"1px solid black"}} value={editData.email} onChange={handleChangeInput}/>
                <br />
                  <input type="text" name='phone' placeholder='Phone' style={{border:"1px solid black"}} value={editData.phone} onChange={handleChangeInput}/>
                  <br />
                  <UploadAvatar  imageUrl={imageUrl} setImageUrl={setImageUrl}/>
                   
                  </div>
                  <button className='btn btn-success' onClick={()=>{
                  const access_token = Cookies.get('access_token');
   
                 editData.avatar=imageUrl;
                 editData.userId=Cookies.get('currentUser');
                    console.log("new data is : ",editData)
                    axios({
                      url:  "http://localhost:5000/user/update",
                      method:"PUT",
                      data:editData,
                      headers: {
                        Authorization: access_token
                      }
                    }
                      ).then((response)=>{
                        alert("profile updated")
                        console.log(response.data)
                        if (access_token) {
                          fetchUserData();
                        }
                    }).catch((err)=>{console.log("err")})
                  }}>Save</button>
                    </>
                )}
            </div>
      
            <div className="right-section">
  <img src={pr} alt="Your Image" className="animated-image" />
  </div>

    </div>
</div>
  );
};


const UploadAvatar = ({imageUrl,setImageUrl}) => {
const [selectedFile, setSelectedFile] = useState(null);
 
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post('http://localhost:5000/api/upload_avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setImageUrl(response.data.url);
      // console.log(imageUrl);
    } catch (error) {
      console.error('Error uploading avatar:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button className='btn btn-warning' onClick={handleUpload}>Upload Avatar</button>
      {imageUrl && (
        <div>
          <h3>Uploaded Avatar:</h3>
          <img src={imageUrl} alt="Avatar" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
        </div>
      )}
    </div>
  );
      }

// const ImageUpload = ({ setimg }) => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleSubmit = async () => {
//     console.log("sele file is :",selectedFile);
//     // setimg(selectedFile);
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append("image", selectedFile);

//       try {
//       console.log("condition is ok")
//       // axios({
//       //     url:"http://localhost:5000/api/upload_avatar",
//       //     method:"POST",

//       //     // body:formData,
//       //   }).then((res)=>{
//       //     console.log(res.data)
//       //   }).catch((err)=>{
//       //     console.log(err)
//       //   })
//         const response = await fetch(
//           "http://localhost:5000/api/upload_avatar",
//           {
//             method: "POST",
//             body: formData,
//           }
//         );

//         const data = await response.json();
//         console.log("Uploaded Image URL:", data.imageUrl);
//         setimg(data.imageUrl);
//         // Handle the URL as needed (e.g., display the image)
//       } catch (error) {
//         console.error("Error uploading image:", error);
//       }
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button
//         className="btn btn-warning"
//         // style={{ backgroundColor: "#cbc5b4" }}
//         onClick={handleSubmit}
//       >
//         Upload
//       </button>
//     </div>
//   );
// };


export default Profile;

