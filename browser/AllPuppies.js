

import React from 'react';
import {Link} from 'react-router';

export default class AllPuppies extends React.Component {

  render () {

    return (
      <div>
        <div className="container flexbox-container">
            <div className="jumbotron">
                <ul className="list-unstyled">
                    {this.props.allPuppies.map( (puppy,i) => {
                    return (<li key={i}><Link to={`/puppies/{puppy.id}`}>{puppy.name}</Link></li>)
                    })}
                </ul>
            </div>
        </div>
      </div>
    )
  }
}
