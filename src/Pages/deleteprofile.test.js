import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Profile from "../Pages/profile";
import Login from "./login";

jest.mock("../Repository/userData", () => ({
  findUserDetails: jest.fn(() => Promise.resolve({})),
  updateUserDetails: jest.fn(() => Promise.resolve({})),
  deleteUserAccount: jest.fn(),
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

test("Profile component edit functionality", async () => {
  const { getByText, getByTestId } = render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );

  // Find the "Button" button and click it
  const deleteButton = getByTestId("delete");
  fireEvent.click(deleteButton);

  const yesButton = getByTestId("Delete-Yes");
  fireEvent.click(yesButton);

  await waitFor(() => {
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  });
});
