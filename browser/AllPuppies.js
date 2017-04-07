

import React from 'react';

export default class AllPuppies extends React.Component {
componentDidMount() {
  this.props.onLoadPuppies();
}

  render () {
    return (
      <div>
        <ul className="list-unstyled">
          {this.props.allPuppies.map( (puppy,i) => {
            return (<li key={i}><a href="#">{puppy.name}</a></li>)
          })}
        </ul>
      </div>
    )
  }
}
