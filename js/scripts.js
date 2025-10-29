const Hello = () =>
{
    return <h2>Hello, React</h2>
}

const elem = document.querySelector( "#MainApp" )
const root = ReactDOM.createRoot( elem )
root.render(<Hello />)
