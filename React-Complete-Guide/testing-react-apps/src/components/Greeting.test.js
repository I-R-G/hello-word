import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Greeting from "./Greeting"

//when writing a test use the three "A"s approach
//Arrange => Set up the test data, test conditions and test environment.
//Act => Run logic that should be testes (e.g. execute function)
//Assert => Compare executions results with expected results


/*
test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting/>)

    //Act
    //...nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World", {exact : false})
    expect(helloWorldElement).toBeInTheDocument()
})
*/

//Group the tests in testing suites
describe("Greeting component", () => {
    test("renders Hello World as a text", () => {
        //Arrange
        render(<Greeting/>)
    
        //Act
        //...nothing
    
        //Assert
        const helloWorldElement = screen.getByText(/hello world/i)
        expect(helloWorldElement).toBeInTheDocument()
    })

    test("renders 'good to see you' if the button is NOT clicked ", () => {
        //Arrage
        render(<Greeting/>)

        //Act
        //...nothing

        //Assert
        const pElementToRender = screen.getByText(/It's good to see you/i)
        expect(pElementToRender).toBeInTheDocument()
    })

    test("render 'changed' if the buttons is clicked", () => {
        //Arrange
        render(<Greeting/>)

        //Act
        const buttonElement = screen.getByRole("button")
        userEvent.click(buttonElement)

        //Assert
        const pElementToRender = screen.getByText(/changed/i)
        expect(pElementToRender).toBeInTheDocument()
    })

    test("does not render 'good to see you' if the button is clicked", () => {//error case
        //Arrange 
        render(<Greeting/>)

        //Act

        const buttonElement = screen.getByRole("button")
        userEvent.click(buttonElement)

        const pElementToRender = screen.queryByText(/it's good to see you/i)
        expect(pElementToRender).toBeNull()
    })

})