const test = () =>
{
    const ele = document.getElementById( "greeting" )
    
    if (ele.textContent === "Hello") {
        ele.textContent = "Bye"
    } else {
        ele.textContent = "Hello"
    }
}