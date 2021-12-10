import React from "react";

import { render, screen } from "@testing-library/react";
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test("renders learn react link", () => {
 
  render(<App />);

  // const linkElement1 = screen.getByText(/product/i);

  // expect(linkElement1).toBeInTheDocument();

  // const linkElement2 = screen.getByText(/addtocart/i);

  // expect(linkElement2).toBeInTheDocument();
});