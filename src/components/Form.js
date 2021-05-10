import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	email_address,
	first_name,
	last_name,
	your_age,
	your_password,
	your_phone_number,
} from "../store/action";

const Form = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => {
		return state;
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: "reset" });
	};
	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor="firstName">First Name: </label>
				<input
					type="text"
					id="firstName"
					placeholder="Enter Your First Name"
					value={state.firstName}
					name="firstName"
					onChange={(e) => dispatch(first_name(e))}
					required
				/>
				<br />
				<br />
				<label htmlFor="lastName">Last Name: </label>
				<input
					type="text"
					id="lastName"
					placeholder="Enter Your Last Name"
					name="lastName"
					value={state.lastName}
					onChange={(e) => dispatch(last_name(e))}
					required
				/>
				<br />
				<br />
				<label htmlFor="email">E-mail: </label>
				<input
					type="email"
					id="email"
					placeholder="Enter Your email"
					name="email"
					value={state.email}
					onChange={(e) => dispatch(email_address(e))}
					required
				/>
				<br />
				<br />
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					id="password"
					placeholder="Enter Your Password"
					name="password"
					value={state.password}
					onChange={(e) => dispatch(your_password(e))}
					required
				/>
				<br />
				<br />
				<label htmlFor="age">Age: </label>
				<input
					type="text"
					id="age"
					placeholder="Enter Your Age"
					name="age"
					value={state.age}
					onChange={(e) => dispatch(your_age(e))}
					required
				/>
				<br />
				<br />
				<label htmlFor="phoneNumber">Phone Number: </label>
				<input
					type="text"
					id="phoneNumber"
					placeholder="Enter Your Phone Number"
					name="phoneNumber"
					value={state.phoneNumber}
					onChange={(e) => dispatch(your_phone_number(e))}
					required
				/>
				<br />
				<br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default Form;
