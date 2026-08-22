import { expect, test } from "@playwright/test";

test.describe("form", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("check title page", async ({ page }) => {
		await expect(page).toHaveTitle("form-validator");
	});

	test("check error message for short username and verify fix", async ({
		page,
	}) => {
		const usernameInput = page.getByRole("textbox", { name: "Username" });
		const usernameErrorMessage = usernameInput.locator("+ p");
		const submitButton = page.getByRole("button", { name: "Submit" });

		await usernameInput.fill("ja");
		await submitButton.click();

		await expect(usernameErrorMessage).toContainText(
			"Username must be at least 3 characters",
		);
		await expect(usernameInput).toContainClass("form__input--error");

		await usernameInput.click();
		await usernameInput.fill("jamie");
		await submitButton.click();

		await expect(usernameErrorMessage).toContainText("");
		await expect(usernameInput).not.toContainClass("form__input--error");
		await expect(usernameInput).toContainClass("form__input--success");
	});

	test("check error message when give a different value for password and confirm password", async ({
		page,
	}) => {
		const passwordInput = page.getByRole("textbox", {
			name: "Password",
			exact: true,
		});
		const confirmPasswordInput = page.getByRole("textbox", {
			name: "Confirm Password",
		});
		const confirmPasswordErrorMessage = confirmPasswordInput.locator("+ p");
		const submitButton = page.getByRole("button", { name: "Submit" });

		await passwordInput.fill("qweasdzxc");
		await confirmPasswordInput.fill("qweasdzxv");
		await submitButton.click();

		await expect(confirmPasswordErrorMessage).toContainText(
			"Passwords do not match",
		);
		await expect(confirmPasswordErrorMessage).toContainClass("form__p--error");
		await expect(confirmPasswordInput).toContainClass("form__input--error");
	});

	test("check error messages when no fill form", async ({ page }) => {
		await page.getByRole("button", { name: "Submit" }).click();

		await expect(
			page.getByText("Username must be at least 3 characters"),
		).toBeVisible();
		await expect(page.getByText("Email is not valid")).toBeVisible();
		await expect(
			page.getByText("Password must be at least 6 characters"),
		).toBeVisible();
		await expect(page.getByText("Confirm Password is required")).toBeVisible();
	});

	test("check sucess when fill form with correct data", async ({ page }) => {
		const usernameInput = page.getByRole("textbox", { name: "Username" });
		const emailInput = page.getByRole("textbox", { name: "Email" });
		const passwordInput = page.getByRole("textbox", {
			name: "Password",
			exact: true,
		});
		const confirmPasswordInput = page.getByRole("textbox", {
			name: "Confirm Password",
		});
		const submitButton = page.getByRole("button", { name: "Submit" });

		await usernameInput.fill("jamie");
		await emailInput.fill("jamie@arcticmonkeys.com");
		await passwordInput.fill("C0rn3rsT0n3");
		await confirmPasswordInput.fill("C0rn3rsT0n3");
		await submitButton.click();

		await expect(usernameInput).toContainClass("form__input--success");
		await expect(emailInput).toContainClass("form__input--success");
		await expect(passwordInput).toContainClass("form__input--success");
		await expect(confirmPasswordInput).toContainClass("form__input--success");
	});
});
