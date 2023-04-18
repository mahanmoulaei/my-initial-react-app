// PascalCasing for components
function Message() {
    
    const name = "Mahan";

    if (name) {
        return <h1>Hello {name}</h1>;
    }

    // JSX: Javascript XML
    return <h1>Hello World</h1>;   
}

export default Message;