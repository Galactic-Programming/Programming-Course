

function Button() {
    const handleClick1 = (e) => e.target.textContent = "Clicked!";

    return (<button onClick={(e) => handleClick1(e)}>Click me</button>);
}

export default Button;