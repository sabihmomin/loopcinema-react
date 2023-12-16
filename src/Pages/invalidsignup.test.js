import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Signup from "../Pages/signup";
import Profile from "./profile";
import '@testing-library/jest-dom'

jest.mock("../Repository/userData", () => ({
  userSignup: jest.fn(() => Promise.resolve({})),
}));
jest.mock("react-toastify", () => ({
  toast: {
    POSITION: {
      TOP_CENTER: "top-center",
    },
    error: jest.fn(),
    success: jest.fn(),
  },
}));

test("Signup component functionality", async () => {
  const { getByPlaceholderText, getByTestId } = render(
    <MemoryRouter>
      <Signup />
    </MemoryRouter>
  );
  const nameInput = getByPlaceholderText("Enter Email...");
  const emailInput = getByPlaceholderText("Enter Email...");
  const passwordInput = getByPlaceholderText("Enter Password...");
  const loginButton = getByTestId("signup");

  fireEvent.change(nameInput, { target: { value: "Benny" } });
  fireEvent.change(emailInput, { target: { value: "Benny@gmail.com" } });
  fireEvent.change(passwordInput, { target: { value: "BE" } });
  fireEvent.click(loginButton);

  await waitFor(() => {
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  });
});
