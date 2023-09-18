import ForgotPassword from './ForgotPassword.js';
import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

function Login() {
	const [showForgotPassword, setShowForgotPassword] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  // Function to toggle the modal's visibility
  const toggleModal = () => {
  	console.log(modalVisible);
    setModalVisible(!modalVisible);
  };

  // Function to close the modal when clicking outside of it
  const closeModal = (event) => {
  	console.log(event.target);
  	console.log(event.currentTarget);
  	console.log(modalVisible);
    if (event.target === event.currentTarget) {
      setModalVisible(false);
    }
  };

	// Function to toggle the visibility of the ForgotPassword component
	const toggleForgotPassword = () => {
		console.log(showForgotPassword);
		setShowForgotPassword(!showForgotPassword);
	};


	const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/');
  };

	
	return(
		<div className="Login">
			<form>
			  <div className="imgcontainer">
			    <img src="img_avatar2.png" alt="Avatar" className="avatar"/>
			  </div>

			  <div className="container">
			    <label htmlFor="uname"><b>Username</b></label>
			    <input type="text" placeholder="Enter Username" name="uname"/>

			    <label htmlFor="psw"><b>Password</b></label>
			    <input type="password" placeholder="Enter Password" name="psw"/>

			    <button type="submit" onClick={navigateToContacts}>Login</button>
			    <button type="button" className="cancelbtn">Cancel</button>

			    <label>
			      <input type="checkbox" name="remember"/> Remember me
			    </label>
			  </div>


        {/* Conditional rendering of the ForgotPassword component */}
			  {/*<div className="container" style={{"backgroundColor":"#f1f1f1"}}>
			  </div>*/}
			</form> 
      <button onClick={toggleModal} style={{ width: 'auto' }}>
        Forgot Password
      </button>

      {/* Use conditional rendering to show/hide the modal */}
      {modalVisible && (
        <div className="modal" onClick={closeModal}>
          <form className="modal-content animate">
            <div className="imgcontainer">
              <span className="close" title="Close Modal" onClick={toggleModal}>
                &times;
              </span>
              <img src="img_avatar2.png" alt="Avatar" className="avatar" />
            </div>

            <div className="container">
              <label htmlFor="uname">
                <b>Username</b>
              </label>
              <input type="text" placeholder="Enter Username" name="uname" />

              <button type="submit">Submit</button>
            </div>

            <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
              <button type="button" onClick={toggleModal} className="cancelbtn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
			  {/*<span className="psw">Forgot <a href="#" onClick={toggleForgotPassword}>password?</a></span>
        showForgotPassword && <ForgotPassword />*/}
		</div>
	);
}

export default Login;