import { render, screen } from "@testing-library/react";
import Main from "../components/Main";

import {DataContext} from "../components/App/context";

test("render main with context, find by role", () => {
  const data = { imageList: [], isLoading: false }
  
  function fakeFunction()
  {  
  }

  const providerValue = { data: data, fakeFunction };

  render(
    <DataContext.Provider value={providerValue}>
    <Main />
    </DataContext.Provider>);
  const element = screen.getByRole(/main/i);
  expect(element).toBeInTheDocument();
});
