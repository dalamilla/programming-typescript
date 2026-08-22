import "../assets/styles/form.css";
import type { FormElements } from "../types/form";

export function formUser(): HTMLElement {
	const form: HTMLFormElement = document.createElement("form");
	form.className = "form";

	form.innerHTML = `
		<h2 class="form__h2">Register With Us</h2>
		<div class="form__group">
			<label for="username" class="form__label">Username</label>
			<input class="form__input" type="text" id="username" name="username" placeholder="Enter username" />
			<p class="form__p"></p>
		</div>
		<div class="form__group">
			<label for="email" class="form__label">Email</label>
			<input class="form__input" type="text" id="email" name="email" placeholder="Enter email" />
			<p class="form__p"></p>
		</div>
		<div class="form__group">
			<label for="password" class="form__label">Password</label>
			<input class="form__input" type="password" id="password" name="password" placeholder="Enter password" />
			<p class="form__p"></p>
		</div>
		<div class="form__group">
			<label for="confirm-password" class="form__label">Confirm Password</label>
			<input class="form__input" type="password" id="confirm-password" name="confirmPassword" placeholder="Enter password again"/>
			<p class="form__p"></p>
		</div>
		<button class="form__button" type="submit">Submit</button>`;

	const formElements: FormElements = form as FormElements;

	const validateEmail = (emailElement: HTMLInputElement) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const errorMessage = "Email is not valid";

		if (emailRegex.test(emailElement.value.trim())) {
			showSuccess(emailElement);
		} else {
			showError(emailElement, errorMessage);
		}
	};

	const validateLength = (
		element: HTMLInputElement,
		min: number,
		max: number,
	) => {
		const errorMinMessage = (field: string, value: number) =>
			`${field} must be at least ${value} characters`;
		const errorMaxMessage = (field: string, value: number) =>
			`${field} must be less than ${value} characters`;

		if (element.value.length < min) {
			showError(
				element,
				errorMinMessage(element.labels?.[0]?.textContent ?? "", min),
			);
		} else if (element.value.length > max) {
			showError(
				element,
				errorMaxMessage(element.labels?.[0]?.textContent ?? "", max),
			);
		} else {
			showSuccess(element);
		}
	};

	const validateConfirmedPassword = (
		passElement: HTMLInputElement,
		confirmPassElement: HTMLInputElement,
	) => {
		const errorMessage = "Passwords do not match";
		const errorReqMessage = (field: string) => `${field} is required`;

		if (confirmPassElement.value === "") {
			showError(
				confirmPassElement,
				errorReqMessage(confirmPassElement.labels?.[0]?.textContent ?? ""),
			);
		} else if (passElement.value === confirmPassElement.value) {
			showSuccess(confirmPassElement);
		} else {
			showError(confirmPassElement, errorMessage);
		}
	};

	const showSuccess = (element: HTMLInputElement) => {
		const successElement = element.nextElementSibling as HTMLElement;

		successElement.textContent = "";
		successElement.className = "form__p";
		element.className = "form__input form__input--success";
	};

	const showError = (element: HTMLInputElement, message: string) => {
		const errorElement = element.nextElementSibling as HTMLElement;

		errorElement.textContent = message;
		errorElement.className = "form__p form__p--error";
		element.className = "form__input form__input--error";
	};

	form.addEventListener("submit", (event: SubmitEvent) => {
		event.preventDefault();

		validateLength(formElements.username, 3, 15);
		validateEmail(formElements.email);
		validateLength(formElements.password, 6, 25);
		validateConfirmedPassword(
			formElements.password,
			formElements.confirmPassword,
		);
	});

	return form;
}
