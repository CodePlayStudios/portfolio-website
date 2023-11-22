import React, { Component } from 'react'

class Button extends Component {
  handleClick = (buttonId) => {
    // window.location.href='https://portfoliosite.com';
    
  const actions = {
    button1: () => {
      console.log('Button 1 clicked!');
    },
    button2: () => {
      console.log('Button 2 clicked!');
    },
  };

  if (actions[buttonId]) {
    actions[buttonId]();
  }
}

  render() {
    return (
        <div>

        <button onClick={() => this.handleClick('button1')}>
          Button 1
        </button>
        <button onClick={() => this.handleClick('button2')}>
          Button 2
        </button>

      </div>
    );
  }
}

export default Button;
