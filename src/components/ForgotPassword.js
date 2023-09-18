import React, { useState } from 'react';

function ForgotPassword() {
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

  return (
    <div className="Login">
      <h2>Modal Forgot Password Form</h2>

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

              <button type="submit">Login</button>
            </div>

            <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
              <button type="button" onClick={toggleModal} className="cancelbtn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
