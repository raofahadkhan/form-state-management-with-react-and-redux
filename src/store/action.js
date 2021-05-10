export const firstName = "firstName";
export const lastName = "lastName";
export const email = "email";
export const password = "password";
export const phoneNumber = "phoneNumber";
export const age = "age";
export const reset = "reset";

export const first_name = (e) => {
	return { type: firstName, payload: e.target.value };
};

export const last_name = (e) => {
	return { type: lastName, payload: e.target.value };
};

export const email_address = (e) => {
	return { type: email, payload: e.target.value };
};

export const your_password = (e) => {
	return { type: password, payload: e.target.value };
};

export const your_phone_number = (e) => {
	return { type: phoneNumber, payload: e.target.value };
};

export const your_age = (e) => {
	return { type: age, payload: e.target.value };
};
