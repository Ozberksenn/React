import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "./App";

describe("Emoji Test", () => {
  let emoji100, input;
  beforeEach(() => {
    render(<App />);
    emoji100 = screen.getByText(/100/i);
    input = screen.getByPlaceholderText(/search emoji/i);
  });

  test("Başlık render edildi mi ", () => {
    const headerTitle = screen.getByText(/Emoji Search/i);
    expect(headerTitle).toBeInTheDocument();
  });

  test("Emoji listesi render edildi mi", () => {
    expect(emoji100).toBeInTheDocument();
  });

  test("emoji listesinin filtreye uygun şekilde render edilmesi", () => {
    const emojiText = "grim";
    userEvent.type(input, emojiText);
    expect(emoji100).not.toBeInTheDocument();
  });
});
