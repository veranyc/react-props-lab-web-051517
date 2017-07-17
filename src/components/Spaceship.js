// Code The Spaceship Component Here
import React from 'react'
import ReactDOM from 'react-dom'


export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>speed: {this.props.speed}</p>
        <p>rockets: {this.props.hasRockets}</p>
        <p>colors: {this.props.colors.join(',')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

// ReactDOM.render (
//   <Spaceship
//     name= "Falcon"
//     speed= "60"
//     hasRockets="true"
//   />,
//   document.getElementById('root')
// )
