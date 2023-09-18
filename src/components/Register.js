import {Routes, Route, useNavigate} from 'react-router-dom';
function Register() {
	const navigate = useNavigate();

	const navigateToContacts = () => {
		// 👇️ navigate to /contacts
		navigate('/login');
	};
	return(
		<div className="Register">
			<form>
			    <div className="container">
			      <h1>Sign Up</h1>
			      <p>Please fill in this form to create an account.</p>
			      <hr/>
			      <label htmlFor="Name"><b>Name</b></label>
			      <input type="text" placeholder="Enter Name" name="name"/>

			      <label htmlFor="email"><b>Email</b></label>
			      <input type="text" placeholder="Enter Email" name="email"/>

			      <label htmlFor="psw"><b>Password</b></label>
			      <input type="password" placeholder="Enter Password" name="psw"/>

			      <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
			      <input type="password" placeholder="Repeat Password" name="psw-repeat"/>

			      <label htmlFor="mobile"><b>Mobile</b></label>
			      <input type="password" placeholder="Enter Mobile" name="mobile"/>

			      <fieldset data-role="controlgroup">
			      	<legend>Choose your gender:</legend>
			        <input type="radio" name="gender" id="male" value="male"/>
			        <label htmlFor="male">Male</label>
			        <input type="radio" name="gender" id="female" value="female"/>
			        <label htmlFor="female">Female</label>
			      </fieldset>

			      <label>
			        <input type="checkbox" name="remember" style={{"marginBottom":"15px"}}/> Remember me
			      </label>


			      <p>By creating an account you agree to our <a href="#" style={{"color":"dodgerblue"}}>Terms & Privacy</a>.</p>

			      <div className="clearfix">
			        <button type="submit" className="signupbtn" onClick={navigateToContacts}>Sign Up</button>
			      </div>
			    </div>
		  	</form>
		</div>
	);
}

export default Register;