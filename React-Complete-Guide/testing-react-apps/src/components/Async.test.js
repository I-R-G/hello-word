import { render, screen } from "@testing-library/react";
import Async from "./Async";


//describe("Async component", () => {
//
//    test("render posts if request succeeds", async () => {
//        render(<Async/>)
//
//        using all because its more than one li elements
//        using find instead of get because the li items are result of an http request
//        thefore they are not in the screen instantly when react test

//        const listItemElements = await screen.findAllByRole("listitem" /*, {exact: false}, {timeout :}*/)
//        expect(listItemElements).not.toHaveLength(0)
//    })
//
//})
//*/

//The test above is not the most suitable one, since everytime we are testing we are sending http request
//When testing during development this could cause changes in the server and increase network traffic, what we shoud avoid
//The solution is to replace ,in this case, the built in fetch method by a mock function
// see the example below

describe("Async component", () => {
    
        test("render posts if request succeeds", async () => {
            //override the browser fetch method ans replace by a mock function
            window.fetch = jest.fn()
            //allows to set a value to this mock fetch function return
            window.fetch.mockResolvedValueOnce({
                //depends on the api response 
                //this will simulate a successfull request
                json: async () => [{id: "p1", title: "First Post"}] 
            })
            render(<Async/>)
    
         
    
            const listItemElements = await screen.findAllByRole("listitem")
            expect(listItemElements).not.toHaveLength(0)
        })
    
    })
