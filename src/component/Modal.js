import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./assets/style/modal.css";


const Modal = ({ setModal }) => {

  const {userId} = useParams();

  const [user,setUser] = useState({
    firstName : '',
    lastName : '',
    imageUrl : '',
    instagram : '',
    twitter : '',
    github : '',
    linkedin : ''
    
  });
const [imageSelected, setImageSelected] = useState(null);
const [imageUrl,setImageUrl] = useState(null);

const fetchData = `http://localhost:3300/api/users/${userId}` ;
const accessToken = localStorage.getItem('token');

const handlerSubmit = () => {
  axios
    .put(`http://localhost:3300/api/users/${userId}`, {
      firstName: user.firstName,
      lastName: user.lastName,
      imageUrl: user.imageUrl,
      instagram: user.instagram,
      twitter: user.twitter,
      github: user.github,
      linkedin: user.linkedin,
    })
    .then(
      (response) => {
        console.log("response", response);
      },
      (error) => {
        console.log(error);
      }
    );
}

const ref = useRef()
const handleclick = (event) => {
  ref.current.click()
}

console.log('user submission', user.firstName)

useEffect(() =>{
  fetch(fetchData,{
    method :'GET',
    headers: new Headers({'Content-Type': 'application/json'}),
             
  })
  .then((res)=> res.json())
  .then((data)=> {
    setUser(data)
    console.log('user items',data)
  })

},[])
const handleChange = (event) => {
  setUser(event.target.value);
};


  return (
    <>
      <div className="backshow">
        <div className="modal">
          <div className="delete-icon" onClick={() => setModal(false)}>
            x
          </div>
          <h1>Modification de Profil</h1>
          <form className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="votre prenom"
              value={user.firstName}
              onChange={handleChange}
            />

            <input
              type="text"
              className="form-control"
              placeholder="votre nom "
              value={user.lastName}
              onChange={handleChange}
            />
            <input
              type="text"
              value={user.instagram}
              onChange={handleChange}
              className="form-control"
              placeholder="compte instagram"
            />
            <input
              type="text"
              value={user.twitter}
              onChange={handleChange}
              className="form-control"
              placeholder="compte twitter"
            />
            <input
              type="text"
              className="form-control"
            
            />
            <div onClick={handleclick}>
              <input
                type="file"
                className="form-control"
                id="select-image"
                onChange={(e) => setImageSelected(e.target.files[0])}
                ref={ref}
              />
            </div>

            <button
              type="submit"
              className="buttonModif"
              onClick={handlerSubmit}
            >
              Modifier
            </button>
            
              <button
                type="submit"
                className="buttonCancel"
               
              >
                Annuler
              </button>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
