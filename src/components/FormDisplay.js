import React from "react";
import { useSelector } from "react-redux";

const FormDisplay = () => {
	const formData = useSelector((state) => {
		return state;
	});
	return <b>{JSON.stringify(formData)}</b>;
};

export default FormDisplay;
