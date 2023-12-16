import React from "react";
import { render, screen } from "@testing-library/react";
import ViewReviews from "./ViewReviews";

test("displays 'No reviews available' when there are no reviews", () => {
  const props = {
    displaychange: jest.fn(),
    selectedMovie: { id: 1 }, // checks for selected movie id
  };

  render(<ViewReviews {...props} />);

  // "No reviews available" message is displayed
  const noReviewsMessage = screen.getByText("No reviews available for this movie.");
  expect(noReviewsMessage).toBeTruthy();
});
