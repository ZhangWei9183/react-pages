import Hello from "./apps/Hello"


const root = createRoot(document.getElementById("MainApp"))

root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(Hello)
  )
)

