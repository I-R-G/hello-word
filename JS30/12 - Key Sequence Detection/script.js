const keysPressed = [];
    const secretCode = "wesbos";

    function targetKey(e){
        
        keysPressed.push(e.key);
        keysPressed.splice(-secretCode.length -1, keysPressed.length - secretCode.length)
        
        if(keysPressed.join("") === secretCode){
            cornify_add();
        }
    }

    window.addEventListener("keyup", targetKey)