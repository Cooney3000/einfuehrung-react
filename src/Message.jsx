import React from 'react'
import { Paragraph } from "./Paragraph"
import { Headline } from "./Headline"


export class Message extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Headline headline={this.props.headline} />
        <Paragraph text={this.props.text} />
      </React.Fragment>
    )
  }
}
