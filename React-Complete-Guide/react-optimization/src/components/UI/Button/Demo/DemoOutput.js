import React from "react";
import MyParagraph from "./MyParagraph";

function DemoOutput(props){
    console.log("demooutput component")

    return <MyParagraph>{props.show ? "This is new" : ""}</MyParagraph>
}

//This prevents the demo component to be re-evaluated each time the parent component changes
//It will only be re-evaluated when the props passed by the parent changes
//This is good to improve performance in larger apps
//You can use to avoid entire components tree useless re-evaluations 
export default React.memo(DemoOutput)