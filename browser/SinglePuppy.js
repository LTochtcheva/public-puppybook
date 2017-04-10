import React from 'react';

export default class SinglePuppy extends React.Component {


  render () {

    return (
      <div className="container flexbox-container">
        <div className="jumbotron">
          <h2>{this.props.singlePuppy.name}</h2>
            <div>
              <img src={this.props.singlePuppy.image} />
            </div>
        </div>
      </div>
    )
  }
}


