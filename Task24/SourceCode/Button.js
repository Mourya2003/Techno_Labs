import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button 
        className={this.props.light ? 'light-button' : 'dark-button'}
        onClick={this.props.onClick} // Pass the onClick prop to the button
      >
        Refresh
      </button>
    );
  }
}

export default Button; // Export the Button component