import React from "react";

function MyParagraph(props){

    console.log("My paragraph component")

    return <p>{props.children}</p>
}

export default MyParagraph