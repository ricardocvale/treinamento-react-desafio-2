import { render, screen } from "@testing-library/react"
import Title from "."

describe("given title component", () => {
  beforeEach(() =>{
    console.log("Iniciando teste")
  })

  it("should render only title", () => {
    //title-styled
    //subtitle-styled
    render(<Title textTitle="Test" />);

    const title = screen.getByTestId("title-styled");

    expect(title).toBeInTheDocument();
    expect(screen.queryByTestId("subtitle-styled")).not.toBeInTheDocument();
    expect(title.textContent).toBe("Test");
  });

  if("should render subtitle", () =>{
    render(<Title textTitle="Test" subTitle="subTitle"/>);

    const title = screen.getByTestId("title-styled");
    const subtitle = screen.getByTestId("subtitle-styled");

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(title.textContent).toBe("Test");
    expect(subtitle.textContent).toBe("subTitle");
  });  

})