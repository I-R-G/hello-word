import { useState } from "react"
import Output from "./Output"

function Greeting(){

    const [changedText, setChangedText] = useState(false)
    
    function changeTextHandler(){
        setChangedText(true)
    }

    //It was p tags before changing for the <Output/> component
    //When Arranging the test we render(<Greeting/>) which renders (<Output/>)
    //So in the virtual screen all all components tree will be rendered
    //Therefore, the tests continue to succeed
    return (
        <div>
            <h2>Hello World!</h2>
            {!changedText && <Output>It's good to see you!</Output>}
            {changedText && <Output>Changed</Output>}
            <button onClick = {changeTextHandler}>Change Text!</button>
        </div>
    )
}

export default Greeting