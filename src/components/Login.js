import ForgotPassword from './ForgotPassword.js';
import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';

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


  // A custom validation function. This must return an object
  // which keys are symmetrical to our values/initialValues
  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Enter Email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Enter Password';
    } else if (values.password.length < 8) {
      errors.password = 'Password Must be 8 characters';
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(values.password)) {
      errors.password = 'Invalid Password';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  const navigateToContacts = () => {
    console.log(formik.errors);
    // 👇️ navigate to /contacts
    // navigate('/');
  };

	return(
    <div className="Login">
      <form onSubmit={formik.handleSubmit}>
        <div className="form">
          <div className="form-body">
            <div className="email">
              <label className="form__label" htmlFor="email">Email </label>
              <input  type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} className="form__input" placeholder="Email"/>
              {formik.errors.email ? <span>{formik.errors.email}</span> : null}
            </div>
            <div className="password">
              <label className="form__label" htmlFor="password">Password </label>
              <input className="form__input" type="password"  id="password" name="password" onChange={formik.handleChange} value={formik.values.password} placeholder="Password"/>
              {formik.errors.password ? <span>{formik.errors.password}</span> : null}
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="btn" onClick={navigateToContacts}>Login</button>
          </div>
          <button onClick={toggleModal} style={{ width: 'auto' }}>
            Forgot Password
          </button>
        </div>
      </form>

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