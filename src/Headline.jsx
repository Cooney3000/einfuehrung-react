import React from 'react'

export class Headline extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="headline">{this.props.headline}</h1>
      </React.Fragment>
    )
  }
}