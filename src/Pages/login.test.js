import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../Pages/login";
import Profile from "./profile";

jest.mock("../Repository/userData", () => ({
  userLogin: jest.fn(() => Promise.resolve({})),
}));
jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
    POSITION: {
      TOP_CENTER: "top-center",
    },
  },
}));

test("Login component functionality", async () => {
  const { getByPlaceholderText, getByTestId } = render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const emailInput = getByPlaceholderText("Enter Email...");
  const passwordInput = getByPlaceholderText("Enter Password...");
  const loginButton = getByTestId("login");

  fireEvent.change(emailInput, { target: { value: "abhi.jaga17@gmail.com" } });
  fireEvent.change(passwordInput, { target: { value: "Benny@123" } });
  fireEvent.click(loginButton);

  await waitFor(() => {
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  });
});

  