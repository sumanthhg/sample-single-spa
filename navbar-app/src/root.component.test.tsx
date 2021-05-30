import React from "react";
import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root name='Testapp' />);
    expect(getByText(/Testapp is mounted!/i)).toBeInTheDocument();
  });
});
//http://single-spa-playground.org/playground/instant-test?name=@sample-company/navbar&url=8500
