import React from "react"
import ReactDOM from "react-dom"
import Main from "./pages/Main"
import { AppContainer } from "react-hot-loader"

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("react-root")
  )
}
render(Main)
//in charge of maintaining the state during hot reload JS files
// if (module.hot) {
//   module.hot.accept("./counter.js", () => {
//     const NewCounter = require("./counter.js").default
//     render(NewCounter)
//   })
// }