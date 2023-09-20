import {Routes, Route, useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';

function Register() {
	//
	const navigate = useNavigate();


	// A custom validation function. This must return an object
	// which keys are symmetrical to our values/initialValues
	const validate = values => {
	  const errors = {};
	  if (!values.userName) {
	    errors.userName = 'Enter Username';
	  }
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
	  if (!values.confirmPassword) {
	    errors.confirmPassword = 'Enter Confirm Password';
	  // } else if (values.confirmPassword.length != 8) {
	  //   errors.confirmPassword = 'Confirm Password Must be 8 characters';
	  // } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.confirmPassword)) {
	  //   errors.confirmPassword = 'Invalid Confirm Password';
	  } else if (values.confirmPassword != values.password) {
	    errors.confirmPassword = 'Confirm Password Must be Password';
	  }
	  if (!values.mobile) {
	    errors.mobile = 'Enter Mobile';
	  } else if (values.mobile.length != 10) {
	    errors.mobile = 'Must be 10 characters';
	  } else if (!/^[0-9]+$/i.test(values.mobile)) {
	    errors.mobile = 'Mobile number must contain digits only';
	  }
	  if (!values.gender) {
	    errors.gender = 'Select Gender';
	  }
	  return errors;
	};

	const formik = useFormik({
		initialValues: {
	       userName: '',
	       email: '',
	       password: '',
	       confirmPassword: '',
	       mobile: '',
	       gender: '',
	    },
	    validate,
	    onSubmit: values => {
	       alert(JSON.stringify(values, null, 2));
	    },
	});

	const navigateToContacts = () => {
		// 👇️ navigate to /contacts
		// navigate('/login');
	};

	return(
		<div className="form">
			<form onSubmit={formik.handleSubmit}>
				<div className="form-body">
					<div className="userName">
						<label className="form__label" htmlFor="userName">Username </label>
						<input className="form__input" type="text" id="userName" name="userName" onChange={formik.handleChange} value={formik.values.userName} placeholder="Username"/>
						{formik.errors.userName ? <span>{formik.errors.userName}</span> : null}
					</div>
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
					<div className="confirm-password">
						<label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
						<input className="form__input" type="password" id="confirmPassword" name="confirmPassword" onChange={formik.handleChange} value={formik.values.confirmPassword} placeholder="Confirm Password"/>
						{formik.errors.confirmPassword ? <span>{formik.errors.confirmPassword}</span> : null}
					</div>
					<div className="mobile">
						<label className="form__label" htmlFor="mobile">Mobile </label>
						<input  type="text" name="" id="mobile" name="mobile" onChange={formik.handleChange} value={formik.values.mobile}  className="form__input"placeholder="Mobile"/>
						{formik.errors.mobile ? <span>{formik.errors.mobile}</span> : null}
					</div>
					<fieldset data-role="controlgroup">
						<legend>Choose your Gender:</legend>
						<input type="radio" name="gender" id="male" value="male" onChange={formik.handleChange} defaultChecked={formik.values.gender === "male"}/>
						<label htmlFor="male">Male</label>
						<input type="radio" name="gender" id="female" value="female" onChange={formik.handleChange} defaultChecked={formik.values.gender === "female"}/>
						<label htmlFor="female">Female</label>
					</fieldset>
					{formik.errors.gender ? <span>{formik.errors.gender}</span> : null}
				</div>
				<div className="footer">
					<button type="submit" className="btn" onClick={navigateToContacts}>Register</button>
				</div>
			</form>
		</div>
	)
}

export default Register;