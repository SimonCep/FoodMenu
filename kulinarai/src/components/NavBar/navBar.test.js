/* eslint-disable testing-library/prefer-query-by-disappearance */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Navbar from "./navBar";

window.matchMedia = jest.fn().mockImplementation(query => {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  });

describe("Navbar component", () => {
  it("should render without throwing an error", () => {
    render(<Navbar />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("should toggle the offcanvas sidebar when the button is clicked", () => {
    render(<Navbar />);
    const toggleButtons = screen.getAllByRole("button");
    fireEvent.click(toggleButtons[0]);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("should display the correct links in the offcanvas sidebar", async () => {
    render(<Navbar />);
    const toggleButtons = screen.getAllByRole("button");
    fireEvent.click(toggleButtons[0]);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About us")).toBeInTheDocument();
    expect(screen.getByText("Contact us")).toBeInTheDocument();
  });
  
});
