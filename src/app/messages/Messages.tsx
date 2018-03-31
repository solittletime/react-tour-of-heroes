import * as React from 'react';

import './Messages.css';

interface Props {
  messages: string[];
  onClick: () => void;
}

interface State {
}

class Messages extends React.Component<Props, State> {
  render() {
    if (this.props.messages.length === 0) {
      return (<div/>);
    }
    return (
      <div>
        <h2>Messages</h2>
        <button className="clear" onClick={() => this.props.onClick()}>clear</button>

        {this.props.messages.map((answer, i) => {
          return (<div key={i}>{answer}</div>);
        })}
      </div>
    );
  }
}

export default Messages;
