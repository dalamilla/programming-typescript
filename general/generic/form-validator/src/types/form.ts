interface FormControls extends HTMLFormControlsCollection {
	username: HTMLInputElement;
	email: HTMLInputElement;
	password: HTMLInputElement;
	confirmPassword: HTMLInputElement;
}

export interface FormElements extends HTMLFormElement {
	readonly elements: FormControls;
}
