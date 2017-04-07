

import React from 'react';

export default class AllPuppies extends React.Component {

  render () {
    return (
      <div>
        <div className="container flexbox-container">
            <div className="jumbotron">
                <ul className="list-unstyled">
                    {this.props.allPuppies.map( (puppy,i) => {
                    return (<li key={i}><a href="#">{puppy.name}</a></li>)
                    })}
                </ul>
            </div>
        </div>
      </div>
    )
  }
}
