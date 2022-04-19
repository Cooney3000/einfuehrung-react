import React from 'react'
import { Message } from "./Message"

export class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Message headline="Hello World!" text="Das ist unsere Component basierte App, jetzt mit Webpack und React installiert" />
      </React.Fragment>
    )
  }
}
