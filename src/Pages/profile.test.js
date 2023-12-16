import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Profile from "../Pages/profile";

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

  // Find the "Edit" button and click it
  const editButton = getByTestId("edit");
  fireEvent.click(editButton);

  const nameInput = getByTestId("name-edit");
  expect(nameInput.disabled).toBe(false);

  const saveButton = getByText("Save Changes");
  fireEvent.click(saveButton);

  expect(nameInput.disabled).toBe(true);
});
