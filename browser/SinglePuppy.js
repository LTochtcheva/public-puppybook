import React from 'react';

export default class SinglePuppy extends React.Component {


  render () {

    return (
      <div>
        <h2>{this.props.singlePuppy.name}</h2>
        <div>
          <img src={this.props.singlePuppy.image} />
        </div>
      </div>
    )
  }
}
